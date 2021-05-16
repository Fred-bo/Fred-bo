'use strict';
const Controller = require('egg').Controller;
const fs = require("fs")
const path = require("path")
class UserController extends Controller {
  async userinfo() {
    console.log(this.ctx.session.email, 6666666)
    var result = await this.ctx.service.user.userinfo()
    this.ctx.body = result
  }
  async login() {
    var result = await this.ctx.service.user.login(this.ctx.request.body)
    if (result[0]) {
      //验证通过,用户输入正确,通知浏览器做cookie缓存HQYJ:乱码xxx
      this.ctx.session.email = this.ctx.request.body.email
      this.ctx.body = {
        code: 2002,
        info: result[0]
      }
    } else {
      this.ctx.body = {
        code: 4003,
        info: "密码或账号错误"
      }
    }

  }
  async register() {
    // const { ctx } = this;
    // console.log(this.ctx.session.verif)
    // console.log(this.ctx.request.query,this.ctx.request.files,this.ctx.request.body)
    //处理前端发送过来的数据
    if (this.ctx.request.body) {
      //   var filename1=path.basename(this.ctx.request.body)
      //   var oldpath=`${this.ctx.request.files[0].filepath}`
      //  var newpath=`${__dirname}/../public/upload/${filename1}`
      // //  fs.renameSync(oldpath,newpath)
      // fs.copyFileSync(oldpath,newpath);
      // fs.unlinkSync(oldpath)
      //  var imgurl=`http://192.168.3.130:7001/public/upload/${filename1}`
      //  this.ctx.request.body.userimg=imgurl
      //把处理之后的数据传给service的工具函数  让它去处理  把处理的结果发给前端
      this.ctx.body = await this.ctx.service.user.register(this.ctx.request.body)
    }



  }
  async verif() {
    var data = await this.ctx.service.user.verif()
    this.ctx.body = data
  }
}
module.exports = UserController;