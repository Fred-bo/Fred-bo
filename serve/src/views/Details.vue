<template>
  <div>
    <topnav></topnav>
    <div class="back-hander" @click="toPage()">
      <BackButtom></BackButtom>
    </div>
    <div id="details">
      <Rotation></Rotation>
    </div>

    <!-- <myfooter></myfooter> -->
  </div>
</template>

<script>
import topnav from "../components/haderNav";
// import myfooter from "@/views/home/myfooter.vue";
import BackButtom from "../components/backButtom";
//详情页面
export default {
  name: "Details",
  components: {
    Rotation: () => import("@/views/Details/Rotation.vue"),
    topnav,
    BackButtom,
    // myfooter,
  },
  data() {
    return {
      pageNum: undefined,
    };
  },
  mounted() {
    this.pageNum = this.$route.query.pageNum;
    console.log(this.pageNum);
  },
  methods: {
    // 跳转路由返回首页
    toPage() {
      if (this.pageNum == 1) {
        this.$router.push({ name: "Qianggou" });
      } else if (this.pageNum == 2) {
        this.$router.push({
          name: "Lingshi",
        });
      } else if (this.pageNum == 3) {
        this.$router.push({
          name: "DailyUse",
        });
      } else if (this.pageNum == 0) {
        this.$router.push({
          name: "Home",
        });
      }
    },
  },
};
</script>

<style scoped="scoped">
#details {
  margin-top: 50px;
  padding-bottom: 50px;
}
.back-hander {
  width: 90px;
  height: 35px;
  margin-left: 8%;
}
</style>
