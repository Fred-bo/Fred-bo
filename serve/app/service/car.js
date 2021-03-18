const Service = require('egg').Service;
class CarService extends Service {
    //添加商品到购物车
    async addcar(id) {
        const sql = `select * from car where email="${this.ctx.session.email}" and goodsid = "${id}"`;
        // const sql1 = `select * from car where uid="1" and goodsid = "${id}"`;
        console.log(sql)
        const data = await this.app.mysql.query(sql);
        if (data[0]) {
            //购物车已有该商品则不会再添加到数据库
            return { code: 4001, info: "请勿重复添加" };
        } else {
            //购物车没有该商品则添加到数据库
            const sql2 = `insert into car(email,goodsid) values("${this.ctx.session.email}","${id}")`;
            // const sql2 = `insert into car(uid,goodsid) values("1" ,"${id}")`;
            console.log(sql2)
            const data2 = await this.app.mysql.query(sql2);
            return { code: 2000, info: "添加成功" };
        }
    }


    //获取用户购物车商品
    async getfromcar() {
        const sql = `select * from car inner join goods on car.goodsid=goods.id and car.email = "${this.ctx.session.email}"`
        // const sql = `select * from car inner join goods on car.goodsid=goods.id and car.email = "zyh@qq.com"`
        console.log(sql)
        const data = await this.app.mysql.query(sql);
        return data;
    }

    //删除购物车中指定id的商品
    async removegood(id) {
        const sql = `delete from car where goodsid = "${id}" and email="${this.ctx.session.email}" `
        const data = await this.app.mysql.query(sql);
        return data;
    }
    //获取信息
    async goodsp() {
        const sql = `select * from goods,car where goods.id=car.goodsid and car.email="${this.ctx.session.email}"`
        const data = this.app.mysql.query(sql);
        return data
    }
}
module.exports = CarService;
