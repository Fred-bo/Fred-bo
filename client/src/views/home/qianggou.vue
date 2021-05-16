<template>
  <div>
    <topnav></topnav>
    <div class="timebar">
      <div class="w">
        <img src="../../img/banner.jpg" alt="" class="banner" />
      </div>
      <div v-for="item in arr" :key="item.id" class="time w">
        <ul>
          <li>{{ item.time }}</li>
          <li>{{ item.state }}</li>
        </ul>
      </div>
      <div class="miaosha w">
        <div class="timebox">
          <span>限时抢购<span>剁手秒杀！</span></span>
          <span>距离本场结束还有 </span>

          <ul class="time-container middle">
            <li class="float-left time" v-if="hours == 0 ? false : true">
              {{ hours }}
            </li>
            <li class="float-left point" v-if="hours == 0 ? false : true">:</li>
            <li class="float-left time">{{ mins }}</li>
            <li class="float-left point">:</li>
            <li class="float-left time">{{ seconds }}</li>
            <li class="float-left point">:</li>
            <li class="float-left time">{{ mseconds }}</li>
          </ul>
        </div>
        <div
          class="goods"
          v-for="item in arr2"
          :key="item.id"
          v-if="item.oldprice - item.price > 5"
          @click="choose(item.id)"
        >
          <img :src="item.img" />
          <div>
            <span class="desc1">{{ item.desc }}</span>
            <span class="price">￥{{ item.price }}</span>
            <span class="price2">￥{{ item.oldprice }}</span>
            <div class="kucun-icon">
              <p class="kucun">库存：{{ item.kucun }}</p>
              <div class="icon">立即抢购</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import topnav from "@/views/home/topnav.vue";
import myfooter from "@/views/home/myfooter.vue";
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      mseconds: "",
      mins: "",
      seconds: "",
      arr: [
        {
          id: 1,
          time: "09:00场",
          state: "已结束",
        },
        {
          id: 2,
          time: "10:00场",
          state: "已结束",
        },
        {
          id: 3,
          time: "11:00场",
          state: "已结束",
        },
        {
          id: 4,
          time: "12:00场",
          state: "已结束",
        },
        {
          id: 5,
          time: "13:00场",
          state: "已结束",
        },
        {
          id: 6,
          time: "16:00场",
          state: "即将开始",
        },
        {
          id: 7,
          time: "19:00场",
          state: "未开始",
        },
        {
          id: 8,
          time: "22:00场",
          state: "未开始",
        },
        {
          id: 9,
          time: "00:00场",
          state: "未开始",
        },
      ],
      arr2: [],
    };
  },
  components: {
    topnav,
    myfooter,
  },
  methods: {
    choose(goodsid) {
      this.$router
        .push({
          path: "/Details",
          query: {
            goodsid: goodsid,
            pageNum: 1,
          },
        })
        .catch((err) => {});
    },
    count1() {
      let _this = this;
      let end = new Date("2021-05-17 16:00:00");
      setInterval(function() {
        let start = new Date();
        let time = end - start; //时间差，是一个毫秒值
        // _this.hours = Math.ceil((time / 1000 / 60 / 60) % 24);
        _this.hours = Math.floor(time / 1000 / 60 / 60);
        _this.mins = Math.floor((time / 1000 / 60) % 60);
        _this.seconds = Math.floor((time / 1000) % 60);
        _this.mseconds = Math.floor((time / 100) % 10);

        _this.mseconds = `${
          _this.mseconds < 100 ? "0" + _this.mseconds : _this.mseconds
        } `;
        _this.mins = `${_this.mins < 10 ? "0" + _this.mins : _this.mins} `;
        _this.seconds = `${
          _this.seconds < 10 ? "0" + _this.seconds : _this.seconds
        } `;
      }, 100);
    },
  },
  mounted() {
    this.count1();
  },
  async created() {
    var re = await axios.get("http://127.0.0.1:7001/goods");

    this.arr2 = re.data;
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.w {
  margin: 0 auto;
  width: 1235px;
}

.timebar {
  width: 100%;
}

.timetext {
  width: 100%;
  font-size: 26px;
  line-height: 80px;
  color: #fff;
  background-color: rgb(63, 180, 212);
  display: flex;
  justify-content: center;
  align-items: center;
}

.time ul {
  float: left;
  padding: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000;
}

.time ul li:first-of-type {
  font-size: 26px;
  font-weight: 700;
  color: #fb3434;
}

.time ul li:nth-of-type(2) {
  padding-top: 15px;
}

.miaosha {
  background: #ffffff;
  height: 2050px;
  margin-top: 140px;
}

.miaosha span:nth-of-type(1) {
  /* margin-top: -10px; */
  display: inline-block;
  padding: 20px;
  font-size: 22px;
}
.miaosha div:last-of-type {
  margin-bottom: 40px;
}

.line {
  border-top: 1px solid #fff;
}

.goods {
  padding: 25px 5px 10px 10px;
  width: 600px;
  height: 240px;
  float: left;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  box-sizing: border-box;
  margin: 2px;
  background: #fffbfb;
  border-radius: 4px;
}
.goods:hover {
  background: linear-gradient(360deg, #ffdbdb 0%, #fef9f9 100%);
  box-shadow: 0px 2px 4px 0px #dbbdbd;
  border-radius: 4px;
}
.goods img {
  border-radius: 10px;
  width: 180px;
  height: 180px;
  margin-left: 20px;
  cursor: pointer;
}

.price {
  margin-left: 18px;
  font-weight: 700;
  font-size: 22px;
  color: red;
}

.price2 {
  margin-left: 5px;
  text-decoration: line-through;
  color: #999;
  margin-left: 10px;
  font-size: 14px;
}

.kucun-icon {
  display: flex;
  flex-direction: row;
}

.kucun {
  padding: 20px;
  font-size: 16px;
}

.icon {
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin-left: 120px;
  margin-top: 20px;
  border-radius: 40px;
  border: 1px solid red;
  color: red;
  display: flex;
  justify-content: center;
}
.icon:hover {
  cursor: pointer;
}

.time-container {
  display: inline-block;
  margin-left: 10px;
}

.float-left {
  float: left;
}

.time-container .time {
  width: 46px;
  height: 46px;
  background-color: #605751;
  color: #fff;
  text-align: center;
  line-height: 46px;
}

.point {
  padding: 0 5px;
  height: 46px;
  line-height: 46px;
}

.timebox {
  display: flex;
  align-items: center;
}
</style>
