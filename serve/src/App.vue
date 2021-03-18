<template>
  <div class="home">
    <!-- 头部导航条 -->
    <router-view :datas="arr"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      arr: [],
    };
  },
  mounted() {
    this.$axios.get("http://127.0.0.1:7001/goods").then((res) => {
      this.arr = res.data;
    });
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.home {
  width: 100%;
  height: 100%;
}
</style>
