<template>
  <div>
    <div class="liuyan">
      <div class="title">
        <h2>留言板</h2>
      </div>
      <div id="board">
        <el-input
          class="msginput"
          type="textarea"
          v-model="word"
          placeholder="请输入留言内容..."
        />
        <input type="file" @change="filechange($event)" />
      </div>
      <button class="button" @click="send">提交</button>
      <!-- 评论列表 -->
      <msg v-for="msg in reverseData" :key="msg.id" :data="msg"></msg>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import msg from "@/components/msg.vue";

export default {
  name: "App",
  data() {
    return {
      id: "",
      word: "",
      time: "", //当前时间
      showModal: false, //点击弹出隐藏框
      file1: "",
      img: "",
      showimganniu: false,
      msgarr: [],
    };
  },

  components: {
    msg,
  },

  async created() {
    var re = await axios.post("http://127.0.0.1:7001/list");
    this.msgarr = re.data;
  },

  async updated() {
    var msgre = await axios.get("http://127.0.0.1:7001/getmsg");
    this.msgarr = msgre.data;
  },

  methods: {
    filechange(e) {
      this.file1 = e.target.files[0];
    },
    async send() {
      //获取时间
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

      //获取用户交互的结果  发给后端
      //1.这是传文件和字段的方式，一般用post
      // var f = new FormData();
      // f.append("word", this.word);
      //2.这是传get字段的方式  this.$axios.get(url, {params:{pwd:123,等等}})
      // .then((res)=>{
      // console.log(res.data)
      // })

      //3.这是post传输字段的方式  this.$axios.post(url, {pwd:123,等等})
      // .then((res)=>{
      // console.log(res.data)
      // })

      var f = new FormData();
      f.append("img", this.file1);
      f.append("word", this.word);
      f.append("time", this.gettime);
      if (this.word) {
        var res = await this.$axios.post("http://127.0.0.1:7001/msg", f, {
          header: { "content-Type": "application/x-www-form-urlencoded" },
        });
        this.$message({
          message: "提交成功",
          type: "success",
        });
        this.word = "";
        this.file1 = null;
      } else {
        this.$message({
          message: "留言内容不能为空",
          type: "warning",
        });
      }
      // this.$axios.post("http://192.168.3.128:7001/msg", {
      //   word: this.word,
      //   time: this.gettime,
      // });

      if (this.file1) {
        this.showModal = true;
      }
    },
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  computed: {
    // 计算属性把数组倒序
    reverseData() {
      return this.msgarr.reverse();
    },
  },
};
</script>

<style scoped>
.liuyan {
  width: 80%;
  min-height: 500px;
  margin: 30px auto;
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
}
#board {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.msginput {
  width: 60%;
  min-height: 80px;
  border-radius: 5px;
  margin: 20px 0 10px 0;
  box-sizing: border-box;
  border: 1px solid rgb(255, 255, 255);
}
::v-deep .el-textarea__inner {
  min-height: 70px !important;
}
.msginput:focus {
  outline: none;
  border: 2px solid rgba(6, 235, 243, 0.788);
}

.button {
  background-color: #8d70c6;
  border: none;
  outline: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
}
.button:hover {
  opacity: 0.7;
}
.button:focus {
  outline: none;
}
</style>

