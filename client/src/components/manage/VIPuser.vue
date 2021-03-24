<template>
  <div class="user">
    <el-table :data="userList">
      <el-table-column prop="uid" label="序号" width="80" align="center">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="200"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="260" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="电话" align="center">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="360" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "VIPuser",
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    // this.ComUser();
  },
  methods: {
    // ComUser() {
    //   this.$axios.get("http://127.0.0.1:7001/user").then((res) => {
    //     this.userList = res.data;
    //   });
    // },
  },
};
</script>
<style scoped>
.el-table {
  width: 90%;
  margin: 0 auto;
}
</style>
