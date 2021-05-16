<template>
  <div class="personal">
    <!-- 头部导航条 -->
    <HaderNav></HaderNav>
    <div class="mygoods-block">
      <el-col class="mygoods-left-block" :span="12">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#8d70c6"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <span class="my-title">个人中心</span>

          <el-submenu index="1">
            <template slot="title">
              <span class="el-icon-tickets"></span>
              <span>我的订单</span>
            </template>
            <el-menu-item @click="order()" index="1-1">订单列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span class="el-icon-shopping-cart-1"></span>
              <span>购物车</span>
            </template>
            <el-menu-item @click="goods()" index="2-1">购物车列表</el-menu-item>
            <!-- <el-menu-item @click="goodsE()" index="2-1">零食小吃</el-menu-item> -->
            <!-- <el-menu-item @click="goodsU()" index="2-2">生活用品</el-menu-item> -->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span class="el-icon-user-solid"></span>
              <span>个人资料</span>
            </template>
            <el-menu-item index="3-1" @click="user()">基本资料</el-menu-item>
            <el-menu-item index="3-2" @click="userm()">修改密码</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <div class="mygoods-right-block">
        <!-- 列表头部 -->
        <div class="header-nav">
          <!-- <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
            </el-dropdown> -->
          <div class="header-nav-left">
            <span class="tip"></span>
            <span>{{ activeTitle }}</span>
          </div>
          <div class="header-nav-right">
            <router-link
              v-if="activeTitle == '基本资料' || activeTitle == '修改密码'"
              to="/login"
              style="color: #8d70c6; text-decoration: none"
              @click.native="backUser"
              >退出登录</router-link
            >
            <router-link
              v-else
              to="/Home"
              style="color: #8d70c6; text-decoration: none"
              >返回首页</router-link
            >
          </div>
        </div>
        <!-- 我的订单 -->
        <template v-if="dateBl">
          <el-table :data="dateArr">
            <el-table-column
              label="序号"
              align="center"
              type="index"
              width="60"
            >
            </el-table-column>
            <el-table-column label="日期" align="center" width="120">
              <template slot-scope="scope">
                {{ scope.row.time | formatTime("yyyy-MM-dd ") }}
              </template>
            </el-table-column>
            <el-table-column
              style="text-align: center"
              label="用户名"
              prop="relname"
              width="200"
              align="center"
            >
            </el-table-column>
            <el-table-column label="商品序号" prop="goodsid" align="center">
            </el-table-column>
            <el-table-column label="商品数量" prop="num" align="center">
            </el-table-column>
            <el-table-column label="总价"  align="center">
              <template  slot-scope="scope">
                <span>{{scope.row.total}}元</span>
              </template>
            </el-table-column>
            <el-table-column label="联系电话" prop="phone" align="center">
            </el-table-column>
            <el-table-column label="收货地址" prop="address" align="center" width="250">
            </el-table-column>
          </el-table>
        </template>
        <!-- 购物车 -->
        <template v-if="goodsBl">
          <CarTable></CarTable> 
          </el-table>
        </template>
        <!-- 用户基本资料 -->
        <div class="u-info" v-if="userBl">
          <div class="u-head">
            <span>当前头像</span
            ><img :src="userInfo.headpic" alt="" />
            <input type="file" @change="readImg($event)" class="xuanze" /><br />
          </div>
          <div class="u-name">
            <span>昵称：</span>
            <el-input
              class="u-inp"
              placeholder="请输入昵称"
              v-model="userInfo.username"
              clearable
            >
            </el-input>
          </div>
          <div class="u-name">
            <span>邮箱：</span>
            <el-input
              class="u-inp"
              v-model="userInfo.email"
              placeholder="请输入邮箱"
              clearable
            >
            </el-input>
          </div>
          <div class="u-name">
            <span>电话：</span>
            <el-input
              class="u-inp"
              v-model="userInfo.phone"
              placeholder="请输入电话"
              clearable
            >
            </el-input>
          </div>
          <div class="u-name">
            <span>个性签名：</span>
            <el-input
              class="u-inp"
              v-model="userInfo.signature"
              placeholder="请输入个性签名"
              clearable
            >
            </el-input>
          </div>
          <div class="u-name">
            <span>收货地址：</span>
            <el-input
              class="u-inp"
              v-model="userInfo.address"
              placeholder="请输入收货地址"
              clearable
            >
            </el-input>
          </div>
          <el-button type="primary" @click="submit" class="change"
            >修改</el-button
          >
        </div>
        <!-- 修改密码 -->
        <div class="u-info" v-if="usermBl">
          <div class="u-name">
            <span>旧密码：</span>
            <el-input class="u-inp" placeholder="请输入旧密码" clearable>
            </el-input>
          </div>
          <div class="u-name">
            <span>新密码：</span>
            <el-input class="u-inp" placeholder="请输入新密码" clearable>
            </el-input>
          </div>
          <div class="u-name">
            <span>再次输入：</span>
            <el-input class="u-inp" placeholder="请再次输入新密码" clearable>
            </el-input>
          </div>
          <el-button type="primary" class="change">修改</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import Cookies from 'js-cookie'
import HaderNav from "../components/haderNav";
import formatTime from "../../assets/js/filter";
import CarTable from "../components/carTable";
import Car from "./car.vue";
export default {
  name: "Personal",
  components: {
    HaderNav,
    formatTime,
    CarTable,
    Car,
  },
  data() {
    return {
      img1: "",
      dateBl: false,
      goodsBl: false,
      userBl: false,
      usermBl: false,
      dateArr: [],
      goodsArr: [],
      goodsAllArr: [],
      activeTitle: "订单列表",
      userArr: [],
      userInfo: {
        address: "",
        email: "",
        headpic: "",
        phone: "",
        pwd: "",
        signature: "",
        username: "",
        uid: "",
      },
    };
  },
  mounted() {
    // 获取订单列表
    this.order();
  },
  methods: {
    order() {
      this.dateBl = !this.dateBl;
      this.goodsBl = false;
      this.userBl = false;
      this.usermBl = false;
      let res = this.$axios
        .get("http://127.0.0.1:7001/useorder")
        .then((res) => {
          this.dateArr = res.data;
        });
    },
    goods() {
      this.goodsBl = !this.goodsBl;
      this.dateBl = false;
      this.userBl = false;
      this.usermBl = false;

      // goodsE() {
      //   this.goodsArr = this.goodsAllArr;
      //   this.goodsArr = this.goodsArr.filter((item) => item.type == "01");
      // },
      // goodsU() {
      //   this.goodsArr = this.goodsAllArr;
      //   this.goodsArr = this.goodsArr.filter((item) => item.type == "02");
      // },
    },
    user() {
      this.userBl = true;
      this.usermBl = false;
      this.goodsBl = false;
      this.dateBl = false;
      this.$axios.get("http://127.0.0.1:7001/userp?id=1").then((res) => {
        Object.keys(res.data[0]).forEach((key) => {
          this.userInfo[key] = res.data[0][key];
        });
      });
    },
    userm() {
      this.usermBl = !this.usermBl;
      this.userBl = false;
      this.goodsBl = false;
      this.dateBl = false;
    },
    clearCookie(){
      document.cookie=document.cookie.match(/[^ =;]+(?=\=)/g)[0]+'=0;expires=' + new Date( 0).toUTCString()
      // var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
      // if(arr){
      //   for(let i=0;i<arr.length;i++){
      //    document.cookie=arr[i]=0;
      //   }
      // }else{}
    },
    backUser() {
      // localStorage.setItem("email", null);
      localStorage.clear();     
      // document.cookie=document.cookie.match(/[^ =;]+(?=\=)/g)[0]+'=0;expires=' + new Date( 0).toUTCString()
      // cookie.setMaxAge(0)
      clearCookie()
    },

    //删除
    changeImg() {},
    readImg(event) {
      this.userInfo.headpic = event.target.files[0];
      let f = new FileReader();
      f.readAsDataURL(this.userInfo.headpic);
      f.onload = (e1) => {
        this.img1 = e1.currentTarget.result;
      };
    },
    // 修改用户信息
    async submit() {
      // let loading = localStorage.getItem("loading");
      let transfer = new FormData();

      transfer.append("username", this.userInfo.username);
      transfer.append("headpic", this.userInfo.headpic);
      transfer.append("email", this.userInfo.email);
      transfer.append("address", this.userInfo.address);
      transfer.append("phone", this.userInfo.phone);
      transfer.append("signature", this.userInfo.signature);
      transfer.append("uid", this.userInfo.uid);
      let result1 = await this.$axios
        .post("http://127.0.0.1:7001/changeuser", transfer, {
          header: {
            "content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          window.location.reload();
          this.$emit("myclick");
        });
    },

    handleSelect(key, keyPath) {
      if (key == "2-1") {
        this.activeTitle = "购物车列表";
      } else if (key == "3-1") {
        this.activeTitle = "基本资料";
      } else if (key == "3-2") {
        this.activeTitle = "修改密码";
      }
    },
  },
};
</script>

<style scoped>
.personal {
  width: 100%;
  height: calc(100%-60px);
}
.my-title {
  display: block;
  width: 100%;
  color: #ccc;
  font-size: 22px;
  padding: 20px 40px;
}
.mygoods-block {
  width: 100%;
  height: 690px;
  display: flex;
}
.mygoods-left-block {
  width: 20%;
}
.mygoods-right-block {
  width: 80%;
}
.header-nav {
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  color: #8d70c6;
  font-weight: 800;
}
.header-nav-left {
  display: flex;
  align-items: center;
}
.header-nav-left .tip {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #8d70c6;
  margin-right: 10px;
}
.el-table {
  width: 90%;
  margin: 0 auto;
}

.el-menu {
  height: 100%;
}
::v-deep .el-submenu__title {
  font-size: 20px;
}
::v-deep .el-menu-item {
  font-size: 16px;
}
.u-name {
  display: flex;
  align-items: center;
  height: 80px;
}

.u-name span {
  width: 100px;
}

.u-inp {
  width: 500px;
}

.u-info {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}

.u-head {
  display: flex;
}

.u-head span {
  width: 100px;
}

.u-head img {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-left: 10px;
}

.change {
  width: 300px;
}
</style>
