'use strict';

const Service = require('egg').Service;

class goodsService extends Service {
	//注册
	async register() {
		// const sql = `if not`
		const data = await this.app.mysql.query(sql);
		return data;
	}

	//登录
	async login() {
		const sql = `select *from goods`
		const data = await this.app.mysql.query(sql);
		return data;
	}

	//用户信息
	async user() {
		const sql = `select * from user`
		const data = await this.app.mysql.query(sql);
		return data
	}

	//私人用户信息
	async userp() {
		const sql = `select * from user where email ="${this.ctx.session.email}"`
		const data = await this.app.mysql.query(sql);
		return data
	}

	// 打开展示留言列表
	async list() {
		const sql = `select * from msg`
		const data = await this.app.mysql.query(sql);
		return data;
	}

	// 插入留言
	async msg(msg) {
		var sql = `insert into msg (word,time,img) values ("${msg.word}","${msg.time}","${msg.img}")`
		var results1 = await this.app.mysql.query(sql)
		return results1;
	}

	// 获取留言
	async getmsg() {
		const sql = `select * from msg`
		const data = await this.app.mysql.query(sql);
		return data;
	}

	// 更改留言
	async changemsg(cmsg) {
		const sql = `update msg set word ='${cmsg.word2}',time ='${cmsg.time2}'
	    where id='${cmsg.id}'`
		const data = await this.app.mysql.query(sql);
		return data;
	}

	// 删除留言
	async delmsg(cmsg) {
		const sql = `delete from msg where id=${cmsg.id};`
		const data = await this.app.mysql.query(sql);
		return data;
	}

	//更改用户信息
	async changeuser(e) {
		const {
			ctx
		} = this;
		let sql = `update user set username='${e.username}',headpic='${e.headpic}',email='${e.email}',address='${e.address}',phone='${e.phone}',signature='${e.signature}' where uid=${e.uid}`;
		let result1 = await ctx.app.mysql.query(sql);
		return result1;
		// if (e.username && e.headpic == '') {
		// 	let sql = `update user set username='${e.username}' where uid=${e.uid}`;
		// 	let result1 = await ctx.app.mysql.query(sql);
		// 	return result1;
		// } else if (e.username == '' && e.headpic) {
		// 	let sql = `update user set headpic='${e.headpic}' where uid=${e.uid}`;
		// 	let result1 = await ctx.app.mysql.query(sql);
		// 	return result1;
		// } else if (e.username && e.headpic) {
		// 	let sql = `update user set headpic='${e.headpic}',username='${e.username}' where uid=${e.uid}`;
		// 	let result1 = await ctx.app.mysql.query(sql);
		// 	return result1;
		// } else
		// if (e.username || e.headpic || e.email || e.address || e.phone || e.signature) {
		// 	let sql = `update user set headpic='${e.headpic}',username='${e.username}',email='${e.email}',address='${e.address}',phone='${e.phone}',signature='${e.signature}' where uid=${e.uid}`;
		// 	let result1 = await ctx.app.mysql.query(sql);
		// 	return result1;
		// }
	}

}

module.exports = goodsService;
