'use strict';

const Service = require('egg').Service;

class goodsService extends Service {
  async goods() {
    const sql = `select *from goods`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  //获取商品详情
  async getgood(id) {
    const sql = `select * from goods where id = "${id}";`
    const data = await this.app.mysql.query(sql);
    return data;
  }

  //添加商品
  async addgoods(e) {
    const sql = `update goods set kucun=kucun+1 where id=${e.id} `
    await this.app.mysql.query(sql);
  }

  //减少商品
  async subgoods(e) {
    const sql = `update goods set kucun=kucun-1 where id=${e.id}`
    await this.app.mysql.query(sql);
  }
  // 删除商品
  async delgoods(e) {
    console.log(e + 'dfhrtyertyr')
    const sql = `delete from goods where id=${e.id}`;
    await this.app.mysql.query(sql);
  }
  //修改价格
  async changeprice(e) {
    const sql = `update goods set price=${e.value} where id=${e.id}`
    await this.app.mysql.query(sql);
  }
  //增加商品
  async upgoods(e) {
    const sql1 = `select * from goods where id=${e.id}`
    const data = await this.app.mysql.query(sql1);
    if (data[0]) {
      const sql2 = `update goods set kucun=kucun+${e.number} where id=${e.id}`
      await this.app.mysql.query(sql2)
    } else {
      const sql = `insert into goods values(${e.id},"${e.name}",${e.price},"${e.ImageUrl}","${e.type}",${e.hot},"${e.desc}",${e.number},"")`
      await this.app.mysql.query(sql);
      console.log(sql)
      return { 4001: '添加成功' }
    }
  }
  // 修改商品
  // 更改留言
  async updateGoods(cmsg) {
    console.log(cmsg)
    const sql = `update goods set title ='${cmsg.title}',price ='${cmsg.price}',type ='${cmsg.type}',hot ='${cmsg.hot}',kucun ='${cmsg.kucun}'
	    where id='${cmsg.id}'`
    const data = await this.app.mysql.query(sql);
    return data;
  }
}

module.exports = goodsService;