<template>
  <!-- 订单提交按钮组件 -->
  <div class="pricebox">
    <div>
      <span>总商品金额：</span>
      <span class="totalprice" v-html="price.toFixed(2)"></span>
    </div>

    <div class="paybox">
      <span>应付总额：</span>
      <span id="totalpay" v-html="price.toFixed(2)"></span>
    </div>
    <div class="paymode">
      <!-- <img src="@/assets/payfor.jpg" id="vxpay1" /> -->
    </div>
    <div id="subbtn" @click="payfor">提交订单</div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  props: ["tableData", "orderinfo"],
  data() {
    return {
      arr: {},
      fg: true,
    };
  },
  methods: {
    //提交订单
    payfor() {
      if (this.orderinfo) {
        for (let i = 0; i < this.tableData.length; i++) {
          this.arr = this.tableData[i];
          let a = this.$axios({
            method: "post",
            url: "http://127.0.0.1:7001/addtoorder",
            data: {
              name: this.orderinfo.name,
              phone: this.orderinfo.phone,
              address: this.orderinfo.address,
              goodsid: this.arr.goodsid,
              num: this.arr.num,
              price: this.arr.price,
              total: this.arr.num * this.arr.price,
            },
          });
          a.then(() => {
            if (this.fg) {
              this.$router.push({
                path: "/Success",
              });
              this.fg = false;
            }
          });
        }
      } else {
        this.$message({
          message: "请先填写订单信息！",
          type: "warning",
          center: true,
          duration: 1500,
        });
      }
    },
  },
  computed: {
    //计算总价
    price: function() {
      let sum = 0;
      for (let value of this.tableData) {
        var newprice = Number(value.price);
        var newnum = Number(value.num);
        sum += newprice * newnum;
      }
      return sum;
    },
  },
};
</script>

<style scoped="scoped">
.pricebox {
  margin-top: 10px;
  margin-bottom: 150px;
}

.pricebox > div {
  height: 28px;
  position: relative;
}

.pricebox span {
  color: #777;
  font-size: 13px;
  font-family: Verdana;
}

.pricebox > div > span:first-of-type {
  width: 100px;
  position: absolute;
  right: 115px;
  text-align: right;
}

.pricebox > div > span:last-of-type {
  width: 120px;
  position: absolute;
  right: 15px;
  text-align: right;
}

.pricebox > div:nth-of-type(3) {
  border-bottom: 1px solid #a9a9a9;
}

.paybox {
  line-height: 28px;
}

.paybox span:first-of-type {
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.paybox #totalpay {
  color: #f42424;
  font-size: 16px;
  font-weight: bold;
}

.paymode {
  position: relative;
  height: 46px;
  margin-bottom: 40px;
  margin-top: 20px;
}

.paymode #vxpay1 {
  border: 1px solid #d2d2d2;
  position: absolute;
  right: 160px;
  box-sizing: border-box;
  cursor: pointer;
}

.paymode #zfbpay1 {
  border: 1px solid #d2d2d2;
  position: absolute;
  right: 0;
  box-sizing: border-box;
  cursor: pointer;
}

.paymode #vxpay1 {
  border: 1px solid #d2d2d2;
  position: absolute;
  right: 160px;
  box-sizing: border-box;
  cursor: pointer;
}

#subbtn {
  width: 240px;
  height: 50px;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  background-color: #f42424;
  margin-bottom: 40px;
  float: right;
  cursor: pointer;
}
</style>
