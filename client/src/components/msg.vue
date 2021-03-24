<template>
  <!-- 留言栏 更删查改 -->
  <div class="msg">
    <div class="msgname">
      <div class="msgk">
        <div class="content"><span>留言内容：</span> {{ data.word }}</div>
        <div class="img" v-if="data.img">
          <viewer>
            <img
              width="200px"
              height="200px"
              :src="`http://127.0.0.1:7001/public/himg/${data.img}`"
            />
          </viewer>
        </div>
        <div class="time">
          <span>留言时间：</span>
          <span>{{ data.time }}</span>
        </div>
      </div>
    </div>
    <!-- 按钮框 -->
    <div class="butk">
      <button class="button2" @click="tan">修改</button>
      <button class="button3" @click="del(data.id)">删除</button>
    </div>
    <!-- 隐藏修改框 -->
    <div class="changek" v-if="show">
      <el-input
        class="msginput"
        type="textarea"
        v-model="word2"
        placeholder="请输入留言内容..."
      />
      <button class="button4" @click="send(data.word, data.time, data.id)">
        确定修改
      </button>
      <button class="button4" @click="quxiao()">取消</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["data"],
  data() {
    return {
      id: "",
      word: "",
      word2: "",
      time: "", //当前时间
      time2: "", //修改当前时间
      show: false, //修改蒙版
      file1: "",
      img: "",
    };
  },
  async created() {
    var re = await this.$axios.post("http://127.0.0.1:7001/list");
    this.msgarr = re.data;
  },

  async updated() {
    var msgre = await this.$axios.get("http://127.0.0.1:7001/getmsg");
    this.msgarr = msgre.data;
  },
  methods: {
    // 删除的方法
    del(e) {
      this.$axios.post("http://127.0.0.1:7001/delmsg", { id: e });
    },

    // 点击显示隐藏修改框
    tan() {
      this.show = !this.show;
    },

    quxiao() {
      this.show = false;
      this.word2 = "";
    },

    // 发送数据给后端
    send(e, t, i) {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      this.gettime = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;

      this.$axios.post("http://127.0.0.1:7001/changemsg", {
        word: e,
        word2: this.word2,
        time: t,
        time2: this.gettime,
        id: i,
      });
      this.show = !this.show;
      this.word2 = "";
    },
  },
};
</script>

<style>
.msg {
  position: relative;
  width: 100%;
  /* height: 300px; */
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  background: linear-gradient(360deg, #ffdbdb 0%, #fef9f9 100%);
  box-shadow: 0px 2px 4px 0px #dbbdbd;
  border-radius: 4px;
  font-size: 16px;
}
.time {
  font-size: 14px;
  color: #777575;
}
.changek {
  position: absolute;
  top: 20px;
  right: 100px;
  width: 50%;
  height: 150px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 20px;
}

.changek .button4 {
  margin-top: 20px;
  margin-right: 20px;
  /* background-color: #8d70c6; */
  color: #8d70c6;
  border: 1px solid #8d70c6;
}
.butk {
  margin-top: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

button {
  border: none;
  outline: none;
  color: white;
  text-align: center;
  padding: 5px 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
}
button:hover {
  opacity: 0.7;
}
button:focus {
  outline: none;
}
.button2 {
  /* background-color: #409eff; */
  color: #409eff;
  border: 1px solid #409eff;
}
.button3 {
  /* background-color: #ff000f; */
  color: #ff000f;
  border: 1px solid #ff000f;
}
.img1 {
  width: 150px;
  height: 150px;
}
.img {
  margin: 10px;
}
</style>
