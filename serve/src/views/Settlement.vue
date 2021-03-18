<template>
  <div>
    <!-- 头部导航条 -->
    <HaderNav></HaderNav>

    <div class="back-hander" @click="toPage()">
      <BackButtom></BackButtom>
    </div>
    <div id="Settlement">
      <div class="itemlist">
        <Orderinfo @adrinfo="Orderinfo"></Orderinfo>
      </div>
      <div class="itemlist">
        <Carlist :tableData="tableData"></Carlist>
      </div>
      <Pricebox :tableData="tableData" :orderinfo="orderInfo"></Pricebox>
    </div>
    <div class="footer-box">
      <div class="top">
        <span>
          <router-link to="/customerService">售后服务</router-link>
        </span>
        <span>关注我们</span>
        <span>
          <router-link to="/customerService">用户反馈</router-link>
        </span>
        <span>专属客服</span>
      </div>
      <div class="us">
        <div>
          <img src="@/img/footer-car.png" class="one" />
          <p>实物订单问题</p>
        </div>

        <div>
          <span @mouseenter="enter()" :style="onenone" @mouseleave="leave()">
            <img src="@/img/footer-weibo.png" class="two" />
          </span>
          <span @mouseenter="enter()" :style="oneblock" @mouseleave="leave()">
            <img
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3101623223,11353193&fm=26&gp=0.jpg"
              class="two"
            />
          </span>
          <p>云城官方微博</p>
        </div>

        <div>
          <span @mouseenter="tenter()" :style="twonone" @mouseleave="tleave()">
            <img src="@/img/footer-wechat.png" class="three" />
          </span>
          <span @mouseenter="tenter()" :style="twoblock" @mouseleave="tleave()">
            <img
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3101623223,11353193&fm=26&gp=0.jpg"
              class="two"
            />
          </span>
          <p>云城官方微信</p>
        </div>

        <div>
          <span @mouseenter="trenter()" :style="trnone" @mouseleave="trleave()">
            <img src="@/img/footer-liuyan.png" class="four" />
          </span>
          <span
            @mouseenter="trenter()"
            :style="trblock"
            @mouseleave="trleave()"
          >
            <img
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3101623223,11353193&fm=26&gp=0.jpg"
              class="two"
            />
          </span>
          <p>云城留言板</p>
        </div>

        <div>
          <span @mouseenter="fenter()" :style="fnone" @mouseleave="fleave()">
            <img src="@/img/footer-kefu.png" class="five" />
          </span>
          <span @mouseenter="fenter()" :style="fblock" @mouseleave="fleave()">
            <img
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3101623223,11353193&fm=26&gp=0.jpg"
              class="two"
            />
          </span>
          <p>云城专属客服</p>
        </div>
      </div>
      <div class="bottom">
        <!-- <div class="logo">
		      <img src="@/img/cloudCity.png" alt="">
		  </div> -->
        <div class="baoyou">
          <img src="@/img/footer-baoyou.png" alt="" />
          <p>满49送货到家</p>
        </div>
        <div class="pinzhi">
          <img src="@/img/footer-pinzhi.png" alt="" />
          <p>品质保证</p>
        </div>
      </div>

      <div class="last">
        <p class="first">
          <span>增值电信业务经营许可证 川B2-20130104</span>
          <span>蜀ICP备14009198号-2</span>
          <span>网络文化经营许可证 川网文[2018]9435-346号</span>
          <span>互联网出版许可证 新出网证 <川>字027号</span>
        </p>
        <p class="second">
          <span>信息系统安全等级保护备案证书</span>
          <span>《电商管理暂行办法》第九条内容</span>
          <span>《中华人民共和国网络安全法》</span>
          <span>违法和不良信息举报中心</span>
          <span>未成年人家长监护系统</span>
        </p>
        <p class="logo">
          <img src="@/img/cloudCity.png" alt="" />
          <span> 云城便利店 版权所有 </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import HaderNav from "../components/haderNav";
// import myfooter from "@/views/home/myfooter.vue"
import BackButtom from "../components/backButtom.vue";
export default {
  name: "Settlement",
  components: {
    Carlist: () => import("./Settlement/Carlist.vue"),
    Orderinfo: () => import("./Settlement/Orderinfo.vue"),
    Pricebox: () => import("./Settlement/Pricebox.vue"),
    BackButtom,
    HaderNav,
  },

  data() {
    return {
      pageNum: undefined,
      tableData: [],
      orderInfo: "",
      onenone: {
        display: "block",
      },
      oneblock: {
        display: "none",
      },
      twonone: {
        display: "block",
      },
      twoblock: {
        display: "none",
      },
      trnone: {
        display: "block",
      },
      trblock: {
        display: "none",
      },
      fnone: {
        display: "block",
      },
      fblock: {
        display: "none",
      },
    };
  },
  mounted() {
    this.pageNum = this.$route.query.pageNum;
    this.$axios.get("http://127.0.0.1:7001/getfromcar").then((result) => {
      this.tableData = result.data;
    });
  },

  methods: {
    Orderinfo(arg) {
      this.orderInfo = arg;
    },
    enter() {
      this.onenone = { display: "none" };
      this.oneblock = { display: "block" };
    },
    leave() {
      this.onenone = { display: "block" };
      this.oneblock = { display: "none" };
    },
    tenter() {
      this.twonone = { display: "none" };
      this.twoblock = { display: "block" };
    },
    tleave() {
      this.twonone = { display: "block" };
      this.twoblock = { display: "none" };
    },
    trenter() {
      this.trnone = { display: "none" };
      this.trblock = { display: "block" };
    },
    trleave() {
      this.trnone = { display: "block" };
      this.trblock = { display: "none" };
    },
    fenter() {
      this.fnone = { display: "none" };
      this.fblock = { display: "block" };
    },
    fleave() {
      this.fnone = { display: "block" };
      this.fblock = { display: "none" };
    },
    // 跳转路由返回首页
    toPage() {
      if (this.pageNum == 1) {
        this.$router.push({ name: "Car" });
      } else {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style  scoped>
#Settlement {
  width: 80%;
  margin: 0 auto;
  /* margin-top: 80px; */
}
.back-hander {
  width: 90px;
  height: 35px;
  margin-left: 10%;
}
.demo-ruleForm {
  margin-top: 20px;
  margin-left: -50px;
}

.itemlist {
  margin: 30px 0 30px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 5px;
}

.listtit {
  height: 40px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
}

.nav-top {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
}
.left-tittle {
  display: flex;
  align-content: center;
}
.right-tittle {
  display: flex;
  align-items: center;
}
.right-tittle div {
  margin-right: 30px;
}
.header-block {
  display: flex;
  align-items: center;
}
.slogan {
  width: 400px;
  height: 50px;
}

.right-tittle div :hover {
  color: #1db6e2;
}

.right-tittle div a {
  color: #000000;
  text-decoration: none;
  font-size: 14px;
}
.header-img {
  width: 40px;
  height: 40px;
}
/* 第二个导航栏样式 */
.home-navigate {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #1db6e2;
  /* padding-left: 142px; */
}
.nav-item {
  padding: 16px 30px;
  border: 1px solid #000;
}
.nav-item.active {
  background-color: #fff;
}
.home-navigate ul {
  height: 60px;
  line-height: 60px;
}

.home-navigate ul li {
  height: 60px;
  width: 150px;
  list-style: none;
  text-align: center;
}

.home-navigate ul li:hover {
  background-color: #a5dfe9;
}
.home-navigate a {
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
}

.home-navigate-mycar {
  display: flex;
  align-items: center;
}
.home-navigate-mycar.car img {
  width: 30px;
  height: 30px;
}
.router-link {
  display: inline-block;
  width: 100%;
  height: 99%;
}
.router-link-active {
  background-color: #a0c5d7;
}
</style>
