<template>
  <div class="hot-box">
    <div
      class="hotlist"
      v-for="el in data1"
      :key="el.id"
      v-if="el.hot == '1'"
      @click="choose(el.id)"
    >
      <router-link to="/detail">
        <img :src="el.img" class="hot-img" />
        <p v-html="el.desc" class="hot-desc"></p>
      </router-link>
      <p class="hot-price">￥{{ el.price }}</p>

      <!-- hot图片，v-if判断 -->
      <img
        :src="hotimg"
        alt
        v-if="el.hot == 1"
        style="width: 50px; height: 50px"
        class="hotimg"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  props: ["data1"],
  data() {
    return {
      hotimg: "http://image31.bookschina.com/pro-images/200916fd/tubiao45.png",
    };
  },
  methods: {
    choose(goodsid) {
      this.$router
        .push({
          path: "/Details",
          query: {
            goodsid: goodsid,
            pageNum: 0,
          },
        })
        .catch((err) => {});
    },
  },
};
</script>

<style>
.hot-box {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-items: center;
}

.hotlist {
  width: 180px;
  height: 250px;
  text-align: center;
  margin-bottom: 30px;
  border: 1px solid #bde2f7;
  border-radius: 5px;
  padding: 20px;
  background-color: #fff;
  margin-right: 20px;
  position: relative;
  /* cursor: pointer; */
}

.hotlist:hover {
  box-shadow: 0px 1rem 2rem 0px rgba(40, 74, 90, 0.2);
  transform: translate(0, -3px);
}

.hotlist a {
  text-decoration: none;
  color: #000000;
}

.hotlist .hot-img {
  width: 180px;
  height: 150px;
  border-radius: 5px;
}
.hot-img {
  height: 120px;
}

.hotlist .hot-desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 15px;
  margin-top: 15px;
}

.hotlist .hot-desc:hover {
  color: red;
  text-decoration: underline;
}

.hotlist .hot-price {
  margin-top: 10px;
  font-size: 18px;
  color: orangered;
  display: inline-block;
}

.hotimg {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
