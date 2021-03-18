<template>
  <div class="box">
    <body id="poster">
      <el-form
        class="login-box"
        label-position="left"
        label-width="0px"
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
      >
        <h3 class="login-title">欢迎登录</h3>
        <!-- 报错提示 -->
        <el-alert
          class="mk"
          title="账户名与密码不匹配,请重新输入"
          type="error"
          show-icon
          v-if="shows"
        >
        </el-alert>
        <el-form-item prop="email">
          <el-input
            type="text"
            v-model="loginForm.email"
            auto-complete="off"
            placeholder="邮箱账号"
          ></el-input>
        </el-form-item>

        <el-form-item prop="pwd">
          <el-input
            type="password"
            v-model="loginForm.pwd"
            auto-complete="off"
            placeholder="密码"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login('loginForm')">登录</el-button>
          <el-button type="primary" @click="onRegit('registerForm')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </body>
  </div>
</template>
<script>
import Vue from "vue";
import { Message } from "element-ui";
Vue.prototype.$message = Message;
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        email: "",
        pwd: "",
      },
      shows: false,
      rules: {
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
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
            min: 5,
            max: 13,
            message: "长度在 5 到 13 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("http://127.0.0.1:7001/login", {
              email: this.loginForm.email,
              pwd: this.loginForm.pwd,
            })

            .then((res) => {
              if (res.data.code == 2002) {
                localStorage.setItem("email", this.loginForm.email);
                Message({
                  message: `欢迎您！${localStorage.getItem("email")}`,
                  type: "success",
                  duration: 1500,
                });
                if (this.loginForm.email == "admin@163.com") {
                  this.$router.push("/manage");
                } else {
                  this.$router.push("/Home");
                }

                console.log(localStorage.getItem("email"));
              } else if (res.data.code == 4003) {
                // alert("输入信息有误");
                this.shows = true;
              }
            });
        }
      });
    },

    onRegit() {
      this.$router.push("/register");
    },
  },
};
</script>
<style scoped>
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
.login-box {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 200px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  opacity: 0.7;
  border: 1px solid #eaeaea;
  /* box-shadow: 0 0 25px #cac6c6; */
}
::v-deep .el-input__inner {
  color: #000;
}
.login-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #000;
}
.box {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-button {
  background-color: #cc9966;
  border: none;
}
.el-button:hover {
  opacity: 0.8;
  /* color: #007acc; */
}
</style>
