<template>
  <div>
    <div class="listtit">
      <div id="listimg" v-cloak>商品图片</div>
      <div id="goods" v-cloak>商品名称</div>
      <div id="oprice" v-cloak>原价</div>
      <div id="gprice" v-cloak>现价</div>
      <div id="number" v-cloak>数量</div>
      <div id="total" v-cloak>小计</div>
      <div id="operate" v-cloak>操作</div>
    </div>
    <div class="listcon">
      <div v-if="this.tableData.length != 0">
        <div class="boxcontent" v-for="(item, id) in this.tableData" :key="id">
          <img :src="item.img" />
          <div class="gtitle" v-html="item.title"></div>
          <div class="price1" v-cloak>￥{{ item.oldprice }}</div>
          <div class="price2" v-cloak>￥{{ item.price }}</div>
          <div class="numbtn">
            <button
              v-on:click="item.num <= 0 ? 0 : (item.num -= 1)"
              class="left"
            >
              -
            </button>
            <input
              type="text"
              v-model="item.num"
              class="num"
              value="item.num"
            />
            <button v-on:click="item.num += 1" class="right">+</button>
          </div>
          <div class="total1">{{ item.price * item.num }}元</div>
          <div class="opera" v-cloak @click="deleteRow(id, item.goodsid)">
            <el-button type="warning" plain>删除</el-button>
          </div>
        </div>
      </div>
      <div v-else>
        <div id="emptycar" style="display: block">
          <img />
          <!-- src="@/assets/shopcar.png" -->
          <p>您的购物车还是空的，赶快去挑选商品吧！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tableData"],

  data() {
    return {};
  },
  methods: {
    //删除商品
    deleteRow(id, goodsid) {
      this.$confirm("确认删除该商品吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(id, 1);
          // this.$axios.get("http://192.168.1.123:7001/removegood", {
          this.$axios
            .get("http://127.0.0.1:7001/removegood", {
              params: {
                goodsid: goodsid,
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

<style scoped="scoped">
.listtit {
  height: 40px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
}

/* #listimg {
		margin-left: 60px;
	} */

.listtit div {
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  font-size: 14px;
  color: #737373;
}

.listtit #listimg {
  margin-left: 60px;
  width: 100px;
}

.listtit #goods {
  margin-left: 46px;
  width: 400px;
}

#oprice,
#number,
#operate,
#total,
#gprice {
  width: 150px;
}

/* #gprice {
  margin-left: -10px;
} */

.numbtn input {
  width: 20px;
}

.boxcontent {
  margin: 0px 20px;
  padding: 15px 0 15px 15px;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  align-items: center;
}

.boxcontent {
  height: 90px;
  line-height: 90px;
}

.boxcontent:last-of-type {
  border-bottom: 0;
}

.boxcontent img {
  height: 100px;
  width: 90px;
  margin-left: 10px;
}

.boxcontent .gtitle {
  width: 400px;
  padding-left: 50px;
  font-size: 15px;
  font-weight: bold;
  color: #555;
}

.gintro {
  position: absolute;
  top: 55px;
  left: 135px;
  width: 400px;
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.price1,
.price2,
.numbtn,
.opera,
.total1 {
  width: 150px;
  height: 100px;
  line-height: 100px;
}
.price2 {
  color: black;
  text-decoration: none;
}

.price1 {
  text-decoration: line-through;
  color: #999999;
  font-size: 14px;
  cursor: default;
}

/* .opera {
  font-size: 14px;
  width: 248px;
} */

.opera:hover {
  color: red;
  cursor: default;
  text-decoration: underline;
}

#emptycar {
  height: 200px;
  display: none;
  position: relative;
}

#emptycar p {
  position: absolute;
  margin-top: 82px;
  left: 440px;
  color: #777;
  font-size: 22px;
}

/* .total1 {
  text-align: right;
  width: 115px;
} */

.num {
  width: 40px;
  height: 16px;
  padding: 1px;
  text-align: center;
  border: 1px solid #cacbcb;
}

.left,
.right {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #cacbcb;
}
</style>
