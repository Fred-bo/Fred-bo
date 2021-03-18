'use strict';

const Service = require('egg').Service;

class orderService extends Service {
    //获取
    async order() {
        const sql=`select *from orders`
        const data = await this.app.mysql.query(sql);
        return data;
      }
    //删除
    async suborder(e) {
        // console.log(e)
        const sql = `delete from orders where id=${e.id}`;
        await this.app.mysql.query(sql);
        // return data;
    }

    //增加
    async addorder(e){
        const sql = `insert into orders values(${e.id},${e.email},${e.address},${e.phone},${e.goodsid},${e.number},${e.total},"" `;
        await this.app.mysql.query(sql);
       
    }

    //用户订单
    async useorder(e){
        const sql =`select*from orders where email ="${this.ctx.session.email}"`;
        const data =await this.app.mysql.query(sql);
        return data
    }

}

module.exports = orderService;