<template>
  <div class="home minw">
    <!-- 头部导航条 -->
    <div class="nav-top">
      <div class="left-tittle" style="margin-left: 50px">
        <img src="../../img/cloudCity.png" class="logo" />
        <img src="../../img/slogan.jpg" class="slogan" />
      </div>
      <div class="right-tittle" style="margin-right: 0px">
        <div v-if="userInfo.length > 0" class="header-block">
          <!-- <img class="header-img" :src="userInfo[0].headpic" alt="" /> -->
          <router-link to="/personal">
            <img
              v-if="userInfo[0].headpic"
              class="header-img"
              :src="userInfo[0].headpic ? userInfo[0].headpic : deImg"
              alt=""
            />
            <img v-else class="header-img" :src="deImg" alt="" />
          </router-link>
        </div>
        <div v-else>
          <router-link to="/register">注册</router-link>
        </div>
        <div v-if="userInfo.length > 0">
          <router-link to="/personal">{{ userInfo[0].username }}</router-link>
        </div>
        <div v-else>
          <router-link to="/Login">登录</router-link>
        </div>

        <div>
          <router-link to="/Settlement">我的订单</router-link>
        </div>
        <div>
          <router-link to="/personal">个人中心</router-link>
        </div>
        <div>
          <router-link to="/liuyan">客服</router-link>
        </div>
        <div>
          <router-link to="/car">
            <img
              style="width: 25px; height: 25px"
              src="../../img/car.png"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>

    <!-- 第二栏导航条 -->
    <div class="home-navigate">
      <ul>
        <li class="home-navigate-home">
          <router-link to="/Home" class="router-link">首页</router-link>
        </li>
        <li>
          <router-link to="/qianggou" class="router-link">限时抢购</router-link>
        </li>
        <li>
          <router-link to="/lingshi" class="router-link">休闲零食</router-link>
        </li>
        <li>
          <router-link to="/dailyUse" class="router-link">生活日用</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      headerImg: "",
      indexNav: 1,
      userInfo: "",
      deImg: require("../../../assets/deIMG.jpg"),
    };
  },
  mounted() {
    // this.email = localStorage.getItem("email"); //当前登录的邮箱
    this.getUserInfo();
  },

  methods: {
    // 获取用户个人信息
    getUserInfo() {
      this.$axios.get("http://127.0.0.1:7001/userp").then((res) => {
        this.userInfo = res.data;
        console.log(this.userInfo);
      });
    },
  },
};
</script>

<style scoped>
/* 顶部导航栏样式 */
.minw {
  min-width: 1200px;
}
img {
  display: block;
}
.nav-top {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
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
.header-block img {
  border-radius: 50%;
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
  /* margin-top: 24px; */
  /* line-height: 60px; */
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
  background-color: #afb9ef;
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

/* .home-navigate ul li:hover {
  background-color: #a5dfe9;
} */
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
.home-navigate .router-link-active {
  background-color: #4352d4;
  opacity: 0.7;
}
</style>
