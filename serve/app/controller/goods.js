'use strict';

const Controller = require('egg').Controller;

class GoodsController extends Controller {
	//获得所有商品信息
	async goods() {
		let data = await this.ctx.service.goods.goods()
		this.ctx.body = data
	}
	//获取商品详情
	async getgood() {
		const { ctx } = this;
		let mydata = await ctx.service.goods.getgood(ctx.query.goodsid)
		ctx.body = mydata;
	}


	//增加商品数量
	async addgoods() {
		let data = await this.ctx.service.goods.addgoods(this.ctx.query)
		this.ctx.body = data
	}

	//减少商品数量
	async subgoods() {
		let data = await this.ctx.service.goods.subgoods(this.ctx.query)
		this.ctx.body = data
	}
	// 删除商品
	async delgoods() {
		await this.ctx.service.goods.delgoods(this.ctx.query);
	}
	//修改商品价格
	async changeprice() {
		let data = await this.ctx.service.goods.changeprice(this.ctx.query)
		this.ctx.body = data
	}

	//增加商品
	async upgoods() {
		await this.ctx.service.goods.upgoods(this.ctx.request.body)
		console.log(this.ctx.request.body)
		this.ctx.body = "成功"
	}
	// 修改商品
	async updateGoods() {
		this.ctx.body = await this.ctx.service.goods.updateGoods(this.ctx.request.body)
	}
}

module.exports = GoodsController;
