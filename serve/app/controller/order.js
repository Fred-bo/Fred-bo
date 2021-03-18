'use strict';

const Controller = require('egg').Controller;
class orderController extends Controller {
    //获取
    async order() {
      var data = await this.ctx.service.order.order();
      this.ctx.body = data
    }
    //删除订单
    async suborder() {
      await this.ctx.service.order.suborder(this.ctx.query);
    }

    //增加订单
    async addorder(){
        await this.ctx.service.order.addorder(this.ctx.query);
    }

    //用户订单
    async useorder(){
      const data= await this.ctx.service.order.useorder(this.ctx.query);
      this.ctx.body=data
    }
  }
  
  module.exports = orderController;