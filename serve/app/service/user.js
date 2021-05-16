const Service = require('egg').Service;
const svgCaptcha = require('svg-captcha');
class UserService extends Service {
  async userinfo() {
    var sql = `select * from user where username="${this.ctx.session.email}"`
    var re = await this.app.mysql.query(sql)
    return re
  }
  async verif() {
    //生成验证码 返回给调用者
    const data = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      background: '#cc9966'
    });
    // console.log("生成的验证码对象",data)
    // //把生成的验证码里面的文字缓存起来(保存到后端的内存变量中的)
    this.ctx.session.verif = data.text;
    return data;
  }


  async login(loginUserInfo) {
    // console.log(loginUserInfo)
    var sql = `select * from user where email="${loginUserInfo.email}" and pwd="${loginUserInfo.pwd}"`
    var result = await this.app.mysql.query(sql)
    // console.log(result)

    return result
  }
  // async login(loginUserInfo) {
  //   console.log(loginUserInfo,1111)
  //   var sql=`select * from reg where username="${loginUserInfo.username}" and password="${loginUserInfo.password}"`
  //       var result=await this.app.mysql.query(sql) 
  //       console.log(result)
  //       if(!result[0]){
  //         return { code: 4001, info: '该账号尚未注册' };
  //       }else {
  //         //数据库中有该用户才去验证密码是否正确
  //         const sql2 = `select * from reg where username="${loginUserInfo.username}" and password="${loginUserInfo.password}"`;
  //         const data2 = await this.app.mysql.query(sql2);
  //         if (!data2[0]) {
  //             //密码错误
  //             return { code: 4002, info: '密码输入错误' };
  //         } else {
  //             //密码正确,缓存用户邮箱和密码,将用户名和头像发给前端
  //             this.ctx.session.username = loginUserInfo.username;
  //             this.ctx.session.password = loginUserInfo.password;
  //             const sql3 = `select username from reg where username="${loginUserInfo.username}"`
  //             const data3 = await this.app.mysql.query(sql3);
  //             return { code: 2000, info: data3 };
  //         }
  //     }     
  // }


  async register(userinfo) {
    // 前端传的所有数据: email  pwd img verif
    //1.先取出verif跟上一次的比较==>
    //2.去数据库中查找email  如果有==>
    //3.存入数据库email  pwd img
    console.log(userinfo.verif, this.ctx.session.verif) //注册按钮提交时 提交的数据
    // console.log(this.ctx.session)//上一次的缓存验证码
    if (userinfo.verif.toUpperCase() != this.ctx.session.verif.toUpperCase()) {
      console.log(1)
      return {
        code: 4001,
        info: "验证码错误"
      }
    } else {
      var sql = `select *from user where email="${userinfo.email}"`
      var results = await this.app.mysql.query(sql)
      // console.log(re)
      if (results[0]) {
        return {
          code: 4002,
          info: "邮箱已经注册过"
        }
      } else {
        var sql = `insert into user (username,email,pwd) values ("${userinfo.username}","${userinfo.email}","${userinfo.pwd}")`
        var results1 = await this.app.mysql.query(sql)
        if (results1)
          console.log(results1.affectedRows)
        if (results1.affectedRows > 0) {
          return {
            code: 2001,
            info: "注册成功"
          }
        } else {
          return {
            code: 5001,
            info: "注册失败,后端bug"
          }
        }

      }

    }

  }

}
module.exports = UserService;