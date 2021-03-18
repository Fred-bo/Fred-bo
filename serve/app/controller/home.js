'use strict';


const Controller = require('egg').Controller;
const fs = require("fs")
const path = require("path")

class HomeController extends Controller {
	async index() {
		const {
			ctx
		} = this;
		ctx.body = 'hi, egg';
	}

	//注册
	async register() {
		var data = await this.ctx.service.home.register(this.ctx.request.body);
		if (data == "") {
			this.ctx.body = {
				code: 4004,
				info: "用户名或密码错误"
			}
		} else {
			this.ctx.body = {
				code: 2000,
				info: "登录成功"
			}
		}
	}
	//登录
	async login() {
		var data = await this.ctx.service.home.login(this.ctx.request.body);
		if (data == "") {
			this.ctx.body = {
				code: 4004,
				info: "用户名或密码错误"
			}
		} else {
			this.ctx.body = {
				code: 2000,
				info: "登录成功"
			}
		}
	}

	//用户
	async user() {
		const data = await this.ctx.service.home.user()
		this.ctx.body = data
	}

	//用户
	async userp() {
		const data = await this.ctx.service.home.userp(this.ctx.query)
		this.ctx.body = data
	}

	async list() {
		this.ctx.body = await this.ctx.service.home.list()
	}

	async getmsg() {
		this.ctx.body = await this.ctx.service.home.getmsg()
	}

	async delmsg() {
		this.ctx.body = await this.ctx.service.home.delmsg(this.ctx.request.body)
	}

	async changemsg() {
		this.ctx.body = await this.ctx.service.home.changemsg(this.ctx.request.body)
	}

	async msg() {
		const {
			ctx
		} = this;
		console.log(this.ctx.request.query, this.ctx.request.files, this.ctx.request.body)
		//处理前端发送过来的数据

		// this.ctx.body =   await this.ctx.service.home.msg(this.ctx.request.body)
		if (this.ctx.request.files[0]) { //判断有没有文件 没有直接发送
			var filename1 = path.basename(this.ctx.request.files[0].filepath)
			var oldpath = `${this.ctx.request.files[0].filepath}`
			var newpath = `${path.dirname(__dirname)}/public/img/${filename1}`
			// fs.renameSync(oldpath,newpath) 这个方法只能在根转移比如c盘 转c盘另外的文件夹

			fs.copyFile(`${oldpath}`, `${newpath}`, (err) => {
				if (err) {
					console.log(err);
				} else {
					console.log('已经复制并移动');
					fs.unlinkSync(`${oldpath}`);
				}
			})
			this.ctx.request.body.img = `${filename1}`
			//把处理之后的数据传给service的工具函数  让它去处理  把处理的结果发给前端
			this.ctx.body = await this.ctx.service.home.msg(this.ctx.request.body)
		} else {
			this.ctx.body = await this.ctx.service.home.msg(this.ctx.request.body)
		}
	}

	//更改用户信息
	async changeuser() {
		const {
			ctx
		} = this;
		let data1 = this.ctx.request.body
		let file1 = ctx.request.files;
		ctx.body = await ctx.service.home.changeuser(this.ctx.request.body);
		if (this.ctx.request.files[0]) { //判断有没有文件 没有直接发送
			var filename1 = path.basename(this.ctx.request.files[0].filepath)
			var oldpath = `${this.ctx.request.files[0].filepath}`
			var newpath = `${path.dirname(__dirname)}/public/userimg/${filename1}`
			// fs.renameSync(oldpath, newpath) //这个方法只能在根转移比如c盘 转c盘另外的文件夹
			// fs.unlinkSync(oldpath);
			fs.copyFile(`${oldpath}`, `${newpath}`, (err) => {
				if (err) {
					console.log(err);
				} else {
					console.log('已经复制并移动');
					fs.unlinkSync(`${oldpath}`);
				}
			})

			this.ctx.request.body.headpic = `http://127.0.0.1:7001/public/userimg/${filename1}`
			// ctx.request.body.headpic = this.ctx.request.body.img;
			//把处理之后的数据传给service的工具函数  让它去处理  把处理的结果发给前端
			this.ctx.body = await this.ctx.service.home.changeuser(this.ctx.request.body)
		}

	}
}

module.exports = HomeController;
