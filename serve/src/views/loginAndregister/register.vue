<template>
  <div class="box">
    <body id="poster">
      <el-form
        class="register-box"
        label-width="100px"
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            autocomplete="off"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="email">
          <el-input
            type="text"
            v-model="loginForm.email"
            autocomplete="off"
            placeholder="邮箱账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input
            type="password"
            v-model="loginForm.pwd"
            autocomplete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="loginForm.checkPass"
            autocomplete="off"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>

        <!-- 验证码 -->
        <el-form-item label="验证码" prop="verif">
          <el-input
            v-model="loginForm.verif"
            placeholder="请输入验证码"
          ></el-input>
        </el-form-item>

        <span class="verifmk" v-if="showVerif">你的验证码输出错误</span>
        <span class="Verif" v-html="svg" @click="changeVerif"></span>

        <el-form-item>
          <el-button type="primary" @click="send()">提交</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </body>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.loginForm.pwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkEmail = (rule, value, callback) => {
      //邮箱验证
      const mailReg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱格式"));
        }
      }, 100);
    };

    return {
      loginForm: {
        username: "",
        email: "",
        pwd: "",
        checkPass: "",
        verif: "",
      },
      svg: "",
      showVerif: false,

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在2 到 10 个字符", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱账号", trigger: "blur" },
          { validator: checkEmail, trigger: "blur", required: true },
          {
            min: 5,
            max: 18,
            message: "长度在 5 到 18 个字符",
            trigger: "blur",
          },
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 13,
            message: "长度在 6 到 13 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          { validator: validatePass2, trigger: "blur", required: true },
        ],
        verif: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          // { min: 6, max: 13, message: "长度在 6 到 13 个字符", trigger: "blur" }
        ],
      },
    };
  },

  mounted() {
    this.$axios.get("http://127.0.0.1:7001/verif").then((res) => {
      // console.log(res.data.data)
      this.svg = res.data.data;
    });
  },
  methods: {
    async send() {
      //获取用户交互的结果  发给后端
      var f = new FormData();
      // f.append("userimg",this.userimg)
      f.append("username", this.loginForm.username);
      f.append("email", this.loginForm.email);
      f.append("pwd", this.loginForm.pwd);
      f.append("verif", this.loginForm.verif);
      var res = await this.$axios.post("http://127.0.0.1:7001/register", f, {
        header: { "content-Type": "application/x-www-form-urlencoded" },
      });

      console.log(res);
      if (res.data.code == 4001) {
        this.showVerif = true;
      } else if (res.data.code == 4002) {
        alert("账号已存在");
      } else if (res.data.code == 5001) {
        alert("换个时间来注册");
      } else {
        this.$router.push(`/login`);
      }
    },

    changeVerif() {
      this.$axios
        .get("http://127.0.0.1:7001/verif", { params: { id: 234 } })
        .then((res) => {
          this.svg = res.data.data;
        });
    },
    resetForm(formName) {
      //表单信息重置
      this.$refs.loginForm.resetFields();
      // this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
#poster {
  background: url("../../img/login.jpg") no-repeat;
  /* background-position: center; */
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0;
  padding: 0;
}
.register-box {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 70px auto;
  width: 350px;
  padding: 35px 60px 15px 5px;
  background: #fff;
  border: 1px solid #eaeaea;
  /* box-shadow: 0 0 25px #cac6c6; */
}
.uoloadSty .el-upload--picture-card {
  width: 148px;
  height: 148px;
  line-height: 146px;
}

.Verif {
  display: inline-block;
  margin: 0px 100px 15px 98px;
}
.verifmk {
  /* display: inline-block;
     border: 1px dotted red; */
  margin: -31px 90px 15px 100px;
  display: inline-block;
  color: #f56c6c;
  /* opacity: 0.9; */
  font-size: 12px;
}
</style>