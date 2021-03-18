<template>
<div>
		<topnav></topnav>
	<div class="dailybox">
		<div class="title">
			<span>日用小天地</span>
		</div>

		<div class="list" v-for="el in arr" :key="el.id" v-if="el.type=='02'" @click="choose(el.id)">
			<img :src="el.img" class="daily-img" />
			<p v-html="el.desc" class="daily-desc"></p>
			</router-link>
			<p class="daily-price">￥{{el.price}}</p>
			<img :src="hotimg" alt v-if="el.hot==1" class="hotimg" />
		</div>
	</div>
		<myfooter></myfooter>
</div>
</template>

<script>
import topnav from "@/views/home/topnav.vue";
import myfooter from "@/views/home/myfooter.vue";
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      arr: [],
      hotimg: "http://127.0.0.1:7001/public/img/hot1.png",
    };
  },
  components: {
    topnav,
    myfooter,
  },
  methods: {
    choose(goodsid) {
      this.$router
        .push({
          path: "/Details",
          query: {
            goodsid: goodsid,
            pageNum: 3,
          },
        })
        .catch((err) => {});
    },
  },

  async created() {
    var re = await axios.get("http://127.0.0.1:7001/goods");

    this.arr = re.data;
  },
};
</script>

<style>
.dailybox {
  /* background-color: rgb(233, 252, 255); */
  width: 1235px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-items: center;
}

.dailybox .title {
  width: 1235px;
  height: 60px;
  margin: 20px 0;
  line-height: 60px;
  font-size: 18px;
  /* background-color: #3FB4D4; */
}

.dailybox .title span {
  /* margin-left: 20px; */
  font-size: 20px;
  /* font-weight: bold; */
  color: aliceblue;
  display: inline-block;
  width: 150px;
  height: 100%;
  background-color: #717eea;
  text-align: center;
  border-radius: 5px;
}

.dailybox .list {
  width: 180px;
  height: 250px;
  margin-bottom: 30px;
  border: 1px solid #bde2f7;
  border-radius: 5px;
  padding: 20px;
}

.dailybox .list:hover {
  box-shadow: 0px 1rem 2rem 0px rgba(40, 74, 90, 0.2);
  transform: translate(0, -3px);
  /* transition-delay: 0s !important; */
}

.dailybox .list a {
  text-decoration: none;
  color: #000000;
}

.dailybox .list .daily-img {
  width: 180px;
  height: 150px;
  border-radius: 5px;
  cursor: pointer;
}

.dailybox .list .daily-desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 15px;
  margin-top: 15px;
}

.dailybox .list .daily-desc:hover {
  color: red;
  text-decoration: underline;
  cursor: pointer;
}

.dailybox .list .daily-price {
  font-size: 18px;
  color: orangered;
  display: inline-block;
  margin-top: 10px;
}

.hotimg {
  width: 65px;
  height: 65px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
