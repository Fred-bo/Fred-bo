<template >
  <div>
    <!-- 购物车 -->
    <el-table :data="goodsAllArr">
      <el-table-column label="序号" type="index" align="center" width="80">
      </el-table-column>
      <el-table-column label="商品图片" align="center" width="150">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" />
        </template>
      </el-table-column>
      <el-table-column label="商品名称" prop="title" align="center" width="200">
      </el-table-column>
      <el-table-column label="价格" align="center" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.price }}元</span>
        </template>
      </el-table-column>

      <el-table-column label="详情" align="center" prop="desc">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsAllArr: [],
    };
  },
  mounted() {
    this.goods();
  },
  methods: {
    goods() {
      let res = this.$axios
        .get("http://127.0.0.1:7001/getfromcar")
        .then((res) => {
          this.goodsAllArr = res.data;
        });
    },
  },
};
</script>
<style >
.el-table {
  width: 90%;
  margin: 0 auto;
}
.el-table img {
  width: 100%;
}
</style>