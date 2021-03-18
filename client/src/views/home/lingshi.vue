<template>
	<div>
		<topnav></topnav>
	<div class="box">

		<div class="lingshibox">
			<div class="title">
				<span>零食小天地</span>
			</div>

			<div class="list" v-for="el in arr" v-if="el.type=='01'" :key="el.id" @click="choose(el.id)">

				<img :src="el.img" class="lingshi-img" />
				<p v-html="el.desc" class="lingshi-desc"></p>
				</router-link>
				<p class="lingshi-price">￥{{el.price}}</p>
				<img :src="hotimg" alt v-if="el.hot==1" class="hotimg" />
			</div>
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
            pageNum: 2,
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
.box {
  /* background-color: rgb(233, 252, 255); */
}

.lingshibox {
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-items: center;
}

.lingshibox .title {
  width: 100%;
  height: 60px;
  margin: 20px 0;
  line-height: 60px;
  font-size: 18px;
  /* background-color: #3FB4D4; */
}

.lingshibox .title span {
  font-size: 20px;
  color: #fff;
  display: inline-block;
  width: 150px;
  height: 100%;
  background-color: #717eea;
  text-align: center;
  border-radius: 5px;
}

.list {
  position: relative;
  text-align: center;
  width: 180px;
  height: 250px;
  margin-bottom: 30px;
  border: 1px solid #bde2f7;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  margin-right: 15px;
}

.list:hover {
  box-shadow: 0px 1rem 2rem 0px rgba(40, 74, 90, 0.2);
  transform: translate(0, -3px);
  /* transition-delay: 0s !important; */
}

.list a {
  text-decoration: none;
  color: #000000;
}

.list .lingshi-img {
  width: 180px;
  height: 150px;
  border-radius: 5px;
  cursor: pointer;
}

.list .lingshi-desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 15px;
  margin-top: 15px;
}

.list .lingshi-desc:hover {
  color: red;
  text-decoration: underline;
  cursor: pointer;
}

.list .lingshi-price {
  margin-top: 10px;
  font-size: 18px;
  color: orangered;
  display: inline-block;
}

.hotimg {
  width: 65px;
  height: 65px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
