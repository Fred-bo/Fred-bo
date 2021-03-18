<template>
  <div class="magnify">
    <Picshow :goodsinfo="goodsinfo"></Picshow>
    <GoodsInfo :goodsinfo="goodsinfo"></GoodsInfo>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      goodsinfo: {},
    };
  },
  components: {
    Picshow: () => import("./Picshow.vue"),
    GoodsInfo: () => import("./GoodsInfo.vue"),
  },
  mounted() {
    this.$axios("http://127.0.0.1:7001/getgood", {
      params: {
        goodsid: this.$route.query.goodsid,
      },
    }).then((result) => {
      this.goodsinfo = result.data[0];
    });
  },
  methods: {},
};
</script>

<style scoped="scoped">
.magnify {
  position: relative;
  width: 1100px;
  height: 530px;
  margin-left: auto;
  margin-right: auto;
  padding: 55px;
  box-sizing: border-box;
  background: linear-gradient(360deg, #ffdbdb 0%, #fef9f9 100%);
  box-shadow: 0px 2px 4px 0px #dbbdbd;
  border-radius: 4px;
}

.goback {
  position: absolute;
  right: 50px;
  top: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
}

.goback:hover {
  color: red;
}

[v-cloak] {
  display: none;
}
</style>
