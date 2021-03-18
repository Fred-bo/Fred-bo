const Service = require('egg').Service;
class UserService extends Service {
  //提交订单
  async addtoorder(params) {
    // const sql = `select * from car where uid="${this.ctx.session.uid}"`;
	
      //将用户提交的信息和用户的商品信息存入订单数据库
      // const sql2 = `insert into orders(uid,address,phone,goodsid,relname,num,price,total,time) values ("1",
      //   "${params.address}","${params.phone}","${data[i].goodsid}","${params.name}","${params.price}","${params.total}","NOW()");`;
      // await this.app.mysql.query(sql2);
	 
      //清空用户购物车所有数据
      // const sql3 = `delete from car where uid="${this.ctx.session.uid}"`;
	  const sql = `select * from car where email="${this.ctx.session.email}"`;
	  const data = await this.app.mysql.query(sql);
	  console.log(sql,1)
	 
	  const sql2 = `insert into orders(email,address,phone,relname,goodsid,num,price,total,time) values ("${this.ctx.session.email}","${params.address}","${params.phone}","${params.name}","${params.goodsid}","${params.num}","${params.price}","${params.total}",NOW());`;
	  console.log(sql2,2)
	  await this.app.mysql.query(sql2);
	  const sql3 = `delete from car where email="${this.ctx.session.email}"`;
      this.app.mysql.query(sql3);
    
  }
}
module.exports = UserService;