<template>
  <div class="liuyan">
    <HeaderNav></HeaderNav>
    <msgtop></msgtop>
    <myfooter></myfooter>
  </div>
</template>
<script>
import HeaderNav from "../components/haderNav";
import myfooter from "@/views/home/myfooter.vue";
import msg from "@/components/msg.vue";
import msgtop from "@/components/msgtop.vue";

export default {
  name: "App",
  data() {
    return {};
  },

  components: {
    HeaderNav,
    msgtop,
    msg,
    myfooter,
  },
};
</script>

<style>
</style>


