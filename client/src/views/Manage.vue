<template>
  <div class="Manage">
    <!-- 头部 -->
    <el-header>
      <div class="logo-left">
        <img src="@/img/cloudCity.png" alt="" class="logo" />
        <span>云城便利店后台管理系统</span>
      </div>
      <div class="header-right">
        <div v-if="userInfo.length > 0" class="header-img">
          <img :src="userInfo[0].headpic" alt="" />
          <span style="color: #fff">管理员</span>
        </div>
        <router-link
          to="/login"
          style="color: #fff; margin-left: 30px; text-decoration: none"
          @click="fn"
          >退出</router-link
        >
      </div>
    </el-header>
    <!-- 内容 -->
    <div class="conten-block">
      <!-- 左边看板 -->
      <div class="content-left">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="selectItem"
        >
          <el-submenu index="1">
            <template slot="title">
              <span class="el-icon-menu"></span>
              <span class="title-menu">商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="goodsL()">零食</el-menu-item>
              <el-menu-item index="1-2" @click="goodsS()"
                >生活用品</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span class="el-icon-tickets"></span>
              <span class="title-menu"> 订单管理 </span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1" @click="order()">订单列表</el-menu-item>
              <!-- <el-menu-item index="1-2" @click="goodsS()"
                >生活用品</el-menu-item> -->
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <span class="el-icon-s-custom"></span
              ><span class="title-menu"> 用户管理</span></template
            >
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="VIPuser()"
                >VIP用户</el-menu-item
              >
              <el-menu-item index="3-2" @click="ComUser()"
                >普通用户</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <!-- 右边看板 -->
      <div class="content-right">
        <div class="title">
          <div>
            <span class="tupiao"></span>
            <span>{{ activeTitle }}</span>
          </div>
          <div
            class="addGoods"
            v-if="activeTitle == '零食' || activeTitle == '生活用品'"
          >
            <el-button @click="dialogVisible = true">添加商品</el-button>
          </div>
        </div>
        <Order v-if="dateBl"></Order>
        <!-- 零食列表 -->
        <GoodsL v-if="goodsBl"></GoodsL>
        <!-- 生活用品列表 -->
        <GoodsS v-if="goodsB2"></GoodsS>
        <!-- 普通用户列表 -->
        <ComUser v-if="userBl"></ComUser>
        <!-- VIP用户列表 -->
        <VIPuser v-if="userB2"></VIPuser>
      </div>
    </div>
    <!-- 弹出新增 -->
    <el-dialog
      title="新增商品"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="id">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="图片地址">
          <el-input v-model="form.ImageUrl"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="种类" prop="type">
          <template>
            <el-select v-model="form.type">
              <el-option
                v-for="key in Object.keys(templateType)"
                :key="key"
                :label="templateType[key]"
                :value="Number(key)"
              ></el-option>
            </el-select>
          </template>
        </el-form-item>
        <el-form-item label="热销">
          <template>
            <el-select v-model="form.hot">
              <el-option
                v-for="key in Object.keys(templateHot)"
                :key="key"
                :label="templateHot[key]"
                :value="Number(key)"
              ></el-option>
            </el-select>
          </template>
        </el-form-item>
        <el-upload
          class="upload-demo"
          action="http://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="upgoods()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Order from "../components/manage/order";
import GoodsL from "../components/manage/goodsL";
import GoodsS from "../components/manage/goodsS";
import ComUser from "../components/manage/ComUser";
import VIPuser from "../components/manage/VIPuser";
export default {
  name: "Manage",
  components: {
    Order,
    GoodsL,
    GoodsS,
    ComUser,
    VIPuser,
  },
  data() {
    return {
      dateBl: false,
      goodsBl: false,
      goodsB2: false,
      userBl: false,
      userB2: false,
      dialogVisible: false,
      dateArr: [],
      goodsArr: [],
      goodsAllArr: [],
      userArr: [],
      userInfo: [],
      form: {
        id: "",
        name: "",
        price: "",
        desc: "",
        number: "",
        type: "",
        hot: "",
        ImageUrl: "",
      },
      templateType: {
        1: "零食",
        2: "生活会用品",
      },
      templateHot: {
        1: "热卖",
        0: "非热卖",
      },
      activeTitle: "零食",
    };
  },
  mounted() {
    this.goods();
    this.getUserInfo();
  },
  methods: {
    // 获取用户个人信息
    getUserInfo() {
      this.$axios.get("http://127.0.0.1:7001/userp").then((res) => {
        this.userInfo = res.data;
      });
    },
    // 获得所有订单
    order() {
      this.dateBl = true;
      this.goodsBl = false;
      this.userBl = false;
      this.goodsB2 = false;
      this.userB2 = false;
    },
    // 获得所有商品列表
    goods() {
      this.goodsBl = !this.goodsBl;
      this.dateBl = false;
      this.userBl = false;
      this.goodsB2 = false;
      this.userB2 = false;
      let res = this.$axios.get("http://127.0.0.1:7001/goods").then((res) => {
        this.goodsAllArr = res.data.filter((item) => item.type == "1");
      });
    },
    goodsL() {
      this.goodsBl = !this.goodsBl;
      this.dateBl = false;
      this.userBl = false;
      this.goodsB2 = false;
      this.userB2 = false;
    },

    goodsS() {
      this.goodsB2 = true;
      this.goodsBl = false;
      this.dateBl = false;
      this.userBl = false;
      this.userB2 = false;
    },
    // 获得所有用户
    ComUser() {
      this.userBl = !this.userBl;
      this.goodsBl = false;
      this.goodsB2 = false;
      this.dateBl = false;
      this.userB2 = false;
    },
    VIPuser() {
      this.userB2 = true;
      this.userBl = false;
      this.goodsBl = false;
      this.goodsB2 = false;
      this.dateBl = false;
    },
    fn() {
      window.localStorage.removeItem("email");
    },
    selectItem(key, keyPath) {
      console.log(key, keyPath);
      if (key == "1-1") {
        this.activeTitle = "零食";
      } else if (key == "1-2") {
        this.activeTitle = "生活用品";
      } else if (key == "2-1") {
        this.activeTitle = "订单列表";
      } else if (key == "3-1") {
        this.activeTitle = "VIP用户";
      } else if (key == "3-2") {
        this.activeTitle = "普通用户";
      }
    },
    // 弹出框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    //添加商品
    upgoods() {
      this.$axios({
        method: "post",
        url: "http://127.0.0.1:7001/upgoods",
        data: {
          id: this.form.id,
          name: this.form.name,
          price: this.form.price,
          desc: this.form.desc,
          number: this.form.number,
          type: this.form.type,
          hot: this.form.hot,
          ImageUrl: this.form.ImageUrl,
        },
      }).then((res) => {
        // console.log(res)
        window.location.reload();
      });
      this.dialogVisible = false;
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      this.form.ImageUrl = file.url;
    },

    open() {
      this.$prompt("请输入商品ID", "删除商品", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.$axios
            .get(`http://127.0.0.1:7001/subgoods?id=${value}`)
            .then((res) => {
              return "成功";
            });
          this.$message({
            type: "success",
            message: "删除成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除",
          });
        });
    },
  },
};
</script>
<style scoped>
.Manage {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #3b5163;
  color: #333;
  height: 65px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.logo-left {
  display: flex;
  align-items: center;
  height: 100%;
  width: 33%;
  border-top-right-radius: 60px;
  background-color: #a60000;
}

.logo-left .logo {
  margin-left: 10px;
  height: 60px;
  border-radius: 15px;
}
.logo-left span {
  font-weight: 600;
  color: #fff;
  font-size: 30px;
  padding-left: 20px;
}
.header-right {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.header-img {
  display: flex;
  align-items: center;
}

.header-img img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 10px;
}
.conten-block {
  width: 100%;
  display: flex;
}
.content-left {
  width: 15%;
  height: 100%;
}
.content-left .el-menu {
  height: 640px;
}
.content-right {
  width: 85%;
  height: 640px;
  overflow: auto;
  overflow-y: scroll;
}
.content-right .title {
  height: 70px;
  width: 90%;
  margin: 0 auto;
  color: #a60000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title .tupiao {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #a60000;
  margin-right: 10px;
}
.addGoods .el-button {
  background-color: #a60000;
  color: #ffff;
}
.title-menu {
  font-size: 16px;
}
</style>
