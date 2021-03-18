<template>
  <div>
    <topnav></topnav>

    <div class="car">
      <h2>我的购物车</h2>
      <div class="itemlist">
        <Carlist :tableData="tableData"></Carlist>
        <div class="listbom">
          <span v-cloak>
            <i class="el-icon-back"></i>
            <span @click="goback">继续挑选</span>
          </span>
          <button @click="payfor" v-cloak>结算</button>
          <span v-cloak
            >应付金额 :<span id="totalpri" v-cloak v-html="price.toFixed(2)"
              >元</span
            ></span
          >
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import topnav from "@/views/home/topnav.vue";
import myfooter from "@/views/home/myfooter.vue";
//购物车页面
export default {
  name: "Car",
  components: {
    Carlist: () => import("./Settlement/Carlist.vue"),
    topnav,
    myfooter,
  },
  data() {
    return {
      tableData: [],
      goodsid: undefined,
      pageNum: undefined,
    };
  },
  mounted() {
    this.$axios
      .get("http://127.0.0.1:7001/getfromcar")
      // this.$axios.get("http://192.168.1.123:7001/getfromcar")
      .then((result) => {
        this.tableData = result.data;
      });
    this.goodsid = this.$route.query.goodsid;
    this.pageNum = this.$$route.query.pageNum;
    console.log(this.goodsid, this.pageNum);
  },
  methods: {
    //结算购物车
    payfor() {
      if (this.tableData.length == 0) {
        this.$message({
          message: "购物车为空，快去挑选几件商品吧！",
          type: "warning",
          center: true,
          duration: 1500,
        });
      } else {
        this.$router.push({
          name: "Settlement",
        });
      }
    },

    //继续挑选
    goback() {
      this.$router.push({
        path: "/Home",
      });
    },
  },
  computed: {
    //计算总价
    price: function () {
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
[v-cloak] {
  display: none;
}
.car {
  width: 80%;
  margin: 0 auto;
}

h2 {
  margin: 30px 0 10px 5px;
  font-weight: normal;
  color: #5a5555;
}
.back-hander {
  width: 90px;
  height: 35px;
  margin-left: 5%;
}
.itemlist {
  margin-bottom: 50px;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
  padding: 20px;
}

.listbom {
  border-top: 1px solid #ebeef5;
  border-bottom: 0;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
}

.listbom i {
  border: 1px solid #737373;
  font-size: 20px;
  margin-left: 30px;
  color: #737373;
  border-radius: 50%;
}

.listbom span {
  color: #737373;
}

.listbom > span:first-of-type {
  color: #737373;
  font-size: 15px;
  position: relative;
  display: inline-block;
  width: 150px;
  cursor: pointer;
}

.listbom > span:first-of-type span {
  position: absolute;
  top: -2px;
  left: 60px;
}

.listbom > span:first-of-type:hover span {
  color: red;
}

.listbom > span:first-of-type:hover i {
  color: red;
  border-color: red;
}

.listbom button {
  float: right;
  width: 150px;
  border: 0;
  background-color: #f42424;
  color: #fff;
  height: 50px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
}

.listbom > span:last-of-type {
  float: right;
  font-size: 14px;
}

#totalpri {
  height: 50px;
  padding: 0 20px 0 4px;
  font-size: 20px;
  color: #f42424;
}
</style>
