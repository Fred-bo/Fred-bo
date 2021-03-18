<template>
  <div id="backButtom">
    <span class="el-icon-back"></span>
    <span>返回</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style >
#backButtom {
  margin-top: 20px;
  width: 90px;
  height: 35px;
  border-radius: 6px;
  background-color: #8d70c6;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  justify-content: center;
  cursor: pointer;
}
#backButtom:hover {
  opacity: 0.8;
}
.el-icon-back {
  padding-right: 5px;
}
</style>