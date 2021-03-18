<template >
  <div class="order">
    <!-- 订单 -->
    <div class="goods-table">
      <el-table :data="orderList">
        <el-table-column prop="time" label="日期" width="150" align="center">
          <template slot-scope="scope">
            {{ scope.row.time | formatTime("yyyy-MM-dd ") }}
          </template>
        </el-table-column>
        <el-table-column
          prop="relname"
          label="收货人"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="goodsid"
          label="商品序号"
          width="80"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="num" label="商品数量" width="80" align="center">
        </el-table-column>
        <el-table-column prop="total" label="总价" width="80" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话" align="center">
        </el-table-column>
        <el-table-column prop="address" label="收货地址" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="danger" @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import formatTime from "../../../assets/js/filter";
export default {
  name: "order",
  components: {
    formatTime,
  },
  name: "Order",
  data() {
    return {
      orderList: [],
    };
  },
  mounted() {
    this.order();
  },
  methods: {
    order() {
      let res = this.$axios.get("http://127.0.0.1:7001/order").then((res) => {
        this.orderList = res.data;
      });
    },
    //删除商品
    handleDelete(id) {
      console.log(id);
      this.$confirm("确认删除该商品吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .get("http://127.0.0.1:7001/suborder", {
              params: {
                id: id,
              },
            })
            .then((result) => {
              this.$message({
                message: "删除成功！",
                type: "success",
                center: true,
                duration: 1500,
              });
            });
          window.location.reload();
        })
        .catch(() => {
          this.$message({
            message: "已取消删除",
            type: "info",
            center: true,
            duration: 1500,
          });
        });
    },
  },
};
</script>
<style scoped>
.el-table {
  width: 90%;
  margin: 0 auto;
}
</style>