<template>
  <div class="home" @wheel="catchscoll">
    <div :class="top ? 'topshow' : ''" class="scollTop">
      <topnav></topnav>
    </div>
    <!-- 搜索栏 -->
    <!-- <div class="search">
			<input type="text" placeholder="热销商品" >
			<span>
				<img src="../img/search.png" alt="">
			</span>
		</div> -->

    <!-- 轮播图 -->
    <div class="lunbo">
      <el-carousel :interval="2000" type="card" height="200px">
        <el-carousel-item v-for="(el, index) in lunbourl" :key="index">
          <img :src="el.imgurl" class="medium" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 首页部分热销商品展示 -->
    <div class="showpage">
      <div class="hotgoods">
        热销商品
      </div>
      <hotlist :data1="datas"></hotlist>
    </div>

    <!-- footer -->
    <myfooter></myfooter>
  </div>
</template>

<script>
import topnav from "@/views/home/topnav.vue";
import myfooter from "@/views/home/myfooter.vue";
import hotlist from "@/views/home/hotlist.vue";
import lingshi from "@/views/home/lingshi.vue";

export default {
  name: "Home",
  props: ["datas"],
  data() {
    return {
      top: false,
      lunbourl: [
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i3/628189716/O1CN01siFQfs2LdypqsfRq2_!!628189716.jpg_430x430q90.jpg",
        },
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i4/122823246/O1CN01VDCJKr1ZqiHyfUjdA_!!0-saturn_solar.jpg",
        },
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i2/113513589/O1CN01YmWUpb1cNo5nhkk6G_!!0-saturn_solar.jpg",
        },
        {
          imgurl:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2034870996,3303762327&fm=26&gp=0.jpg",
        },

        {
          imgurl:
            "https://img.alicdn.com/tps/i4//TB162_NSQL0gK0jSZFASuwA9pXa.jpg",
        },
        {
          imgurl:
            "https://img.alicdn.com/imgextra/i3/494860015/O1CN01meF7iY1ByuZhR0Qb0_!!0-saturn_solar.jpg",
        },
      ],
    };
  },
  components: {
    hotlist,
    lingshi,
    topnav,
    myfooter,
  },
  mounted() {},
  methods: {
    catchscoll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 0) {
        this.top = true;
      } else {
        this.top = false;
      }
    },
  },
};
</script>

<style>
.home {
  background-color: #eff0f4;
  /* min-height: 100%; */
}
.scollTop {
  width: 100%;
  transition: height 0.6s;
}
.topshow {
  position: fixed;
  top: 0;
  z-index: 20;
  transition: height 0.6s;
}

/* 顶部导航栏样式 */
.nav-top {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
}

.left-tittle {
  height: 60px;
  line-height: 60px;
  float: left;
  margin-left: 150px;
}

.left-tittle .logo {
  width: 60px;
  height: 60px;
}

.right-tittle {
  height: 60px;
  float: right;
  line-height: 60px;
  margin-right: 150px;
}

.right-tittle div {
  display: inline-block;
  margin-right: 50px;
  cursor: pointer;
}

.right-tittle div a {
  color: #000000;
  text-decoration: none;
  font-size: 14px;
}

.right-tittle .red a {
  color: #1db6e2;
}

/* 第二个导航栏样式 */
.home-navigate {
  height: 60px;
  /* background-color: #1DB6E2; */
  background-color: #333333;
}

.home-navigate ul {
  height: 60px;
  line-height: 60px;
}

.home-navigate ul li {
  height: 60px;
  width: 150px;
  float: left;
  list-style: none;
  text-align: center;
}

.home-navigate ul li:hover {
  background-color: #a5dfe9;
}
/* 
	.home-navigate ul li:hover a{
		color: #1DB6E2;
	} */

.home-navigate ul li a {
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
}

.home-navigate ul .home-navigate-home {
  margin-left: 150px;
  /* background-color: #A0C5D7; */
}

.home-navigate ul .home-navigate-mycar {
  float: right;
  margin-right: 220px;
  width: 200px;
}

.home-navigate ul .home-navigate-mycar .car {
  display: inline-block;
  height: 60px;
  width: 60px;
  line-height: 60px;
  float: left;
}

.home-navigate ul .home-navigate-mycar .car::after {
  content: "";
  display: block;
  clear: both;
}

.home-navigate ul .home-navigate-mycar .car img {
  width: 30px;
  height: 30px;
  /* margin-right: 10px; */
  display: inline-block;
  float: left;
  margin-top: 15px;
  margin-left: 15px;
}

.home-navigate ul .home-navigate-mycar .car img::after {
  content: "";
  display: block;
  clear: both;
}

/* 搜索栏 */
.home .search {
  height: 50px;
  width: 1235px;
  margin: 0 auto;
  line-height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  justify-items: center;
}

.home .search input {
  height: 50px;
  width: 800px;
  font-size: 18px;
  outline: none;
  padding-left: 20px;
  border: 2px solid lightgrey;
  border-right: none;
  /* border-radius: 5px; */
}

.home .search span {
  display: inline-block;
  background-color: #1db6e2;
  text-align: center;
  line-height: 50px;
  border: 2px solid lightgrey;
  border-left: none;
  height: 50px;
  width: 70px;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  /* border-radius: 5px; */
}

.home .search span img {
  margin-top: 8px;
  height: 35px;
  width: 35px;
}

/* 轮播图样式 */
.home .lunbo {
  width: 1235px;
  height: 400px;
  margin: 0 auto;
  /* background-color: #1DB6E2; */
  margin-top: 30px;
}

.home .lunbo .el-carousel {
  height: 400px;
}

.home .lunbo .el-carousel__item {
  height: 350px;
}

.home .lunbo .el-carousel__item img {
  height: 350px;
  width: 617px;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.home .lunbo .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.home .lunbo .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.home .lunbo .el-carousel__container {
  height: 350px !important;
}

/* 首页商品展示样式  热销商品*/

.home .showpage {
  width: 1235px;
  margin: 0 auto;
}

.home .showpage .hotgoods {
  /* width: 150px; */
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  background-color: #717eea;
  color: #ffffff;

  margin-bottom: 30px;
}
</style>
