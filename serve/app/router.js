'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  //验证码
  router.get('/verif', controller.user.verif);
  //注册
  router.post('/register', controller.user.register);
  //登录
  router.post('/login', controller.user.login);



  //获取用户信息
  router.get('/user', controller.home.user)
  // //购物车添加
  // router.get('/addcar',controller.car.addcar)
  // //购物车删除
  // router.get('/subcar',controller.car.subcar)

  //用户个人信息
  router.get('/userp', controller.home.userp)
  //用户订单
  router.get('/useorder', controller.order.useorder)

  //获取订单
  router.get('/order', controller.order.order)
  //增加订单
  router.get('/addorder', controller.order.addorder)
  //删除订单
  router.get('/suborder', controller.order.suborder)

  //获得所有商品信息
  router.get('/goods', controller.goods.goods);
  //增加数量端口
  router.get('/addgoods', controller.goods.addgoods)
  //删除数量
  router.get('/subgoods', controller.goods.subgoods)
  //修改价格
  router.get('/changeprice', controller.goods.changeprice)
  //新增商品
  router.post('/upgoods', controller.goods.upgoods)
  // 修改商品
  router.post('/updateGoods', controller.goods.updateGoods)
  // 删除商品
  router.get('/delgoods', controller.goods.delgoods)
  //获取购物车信息
  router.get('/goodsp', controller.car.goodsp)
  router.get('/addcar', controller.car.addcar);
  //添加商品到购物车
  router.get("/getgood", controller.goods.getgood)
  //商品详情
  router.get("/getfromcar", controller.car.getfromcar)
  //获取用户购物车商品
  router.get("/removegood", controller.car.removegood) //删除购物车中指定id的商品
  //提交订单页面接口
  router.post('/addtoorder', controller.settlement.addtoorder); //提交订单

  router.post('/list', controller.home.list);
  router.post('/msg', controller.home.msg);
  router.get('/getmsg', controller.home.getmsg);
  router.post('/delmsg', controller.home.delmsg);
  router.post('/changemsg', controller.home.changemsg);
  router.post('/changeuser', controller.home.changeuser);//更改用户信息

}