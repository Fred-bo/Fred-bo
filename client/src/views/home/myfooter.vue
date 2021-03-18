<template>
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
        <span @mouseenter="trenter()" :style="trblock" @mouseleave="trleave()">
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
        <span>
          云城便利店 版权所有
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

  methods: {
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
  },
};
</script>

<style>
/* 售后服务、关注我们 */
.footer-box {
  height: 500px;
  /* background-color: #00d6b2; */
  margin-top: 40px;
}

.footer-box .top {
  height: 70px;
  line-height: 70px;
  /* background-color: #0b97c4; */
  font-size: 18px;
  font-weight: bold;
  border-top: 1px solid #cccccc;
}

.footer-box .top span {
  margin-left: 17%;
}

.footer-box .top a {
  text-decoration: none;
  color: #000000;
  /* margin-left: 200px; */
}

/* 第二列 */

.footer-box .us {
  width: 1200px;
  display: flex;
  flex-wrap: nowrap;
  margin-left: 16%;
  font-size: 12px;
  margin-top: 20px;
}

.footer-box .us div {
  width: 100px;
  height: 100px;
  text-align: center;
  margin-right: 150px;
  border: 1px solid #cdcdcd;
  border-radius: 10px;
}

.footer-box .us div:last-of-type {
  margin-right: 0;
}

.footer-box .us .one {
  width: 70px;
  height: 70px;
}

.footer-box .us .two {
  width: 46px;
  height: 46px;
  margin: 12px 0;
}

.footer-box .us .three {
  width: 56px;
  height: 56px;
  margin: 7px 0;
}

.footer-box .us .four {
  width: 42px;
  height: 42px;
  margin: 14px 0;
}

.footer-box .us .five {
  width: 56px;
  height: 56px;
  margin: 7px 0;
}

/* 包邮、品质 */
.footer-box .bottom {
  margin-top: 30px;
  width: 100%;
  height: 90px;
  /* background-color: #1a7b96; */
  background-color: #444444;
  font-size: 12px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}

.footer-box .bottom .baoyou {
  width: 100px;
  height: 100px;
  text-align: center;
  color: #cdcdcd;
  margin-right: 350px;
  margin-top: 12px;
}

.footer-box .bottom .baoyou img {
  width: 50px;
  height: 50px;
}

.footer-box .bottom .pinzhi {
  width: 100px;
  height: 100px;
  text-align: center;
  margin-top: 12px;
  color: #cdcdcd;
}

.footer-box .bottom .pinzhi img {
  width: 50px;
  height: 50px;
}

/* 最后一部分 */
.last {
  width: 100%;
  height: 160px;
  background-color: #313131;
  color: #cdcdcd;
  padding-top: 30px;
  font-size: 12px;
}

.last p {
  text-align: center;
  margin-bottom: 20px;
}

.last p span {
  margin-right: 10px;
}

.last .logo {
  height: 50px;
}

.last .logo img {
  width: 50px;
  height: 50px;
  position: relative;
  left: -60px;
}

.last .logo span {
  display: inline-block;
  height: 50px;
  line-height: 50px;
  position: absolute;
}
</style>
