-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.1.73-community - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 yunstore 的数据库结构
CREATE DATABASE IF NOT EXISTS `yunstore` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `yunstore`;

-- 导出  表 yunstore.car 结构
CREATE TABLE IF NOT EXISTS `car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `goodsid` int(11) NOT NULL,
  `num` int(10) NOT NULL DEFAULT '1',
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=94 DEFAULT CHARSET=utf8 COMMENT='购物车表';

-- 正在导出表  yunstore.car 的数据：0 rows
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

-- 导出  表 yunstore.goods 结构
CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `img` varchar(256) NOT NULL,
  `type` varchar(50) DEFAULT '02',
  `hot` varchar(50) DEFAULT '0',
  `desc` varchar(256) DEFAULT NULL,
  `kucun` varchar(50) DEFAULT '256',
  `oldprice` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=79 DEFAULT CHARSET=utf8 COMMENT='商品表';

-- 正在导出表  yunstore.goods 的数据：33 rows
/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` (`id`, `title`, `price`, `img`, `type`, `hot`, `desc`, `kucun`, `oldprice`) VALUES
	(1, '肉松饼早餐面包', '6', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/3300766192/O1CN01552mrW1vbz3tu8VkH_!!0-item_pic.jpg_360x360Q90.jpg', '01', '0', '肉松饼早餐面包整箱绿豆饼干糕点网红小零食小吃休闲食品夜宵充饥', '100', '10'),
	(2, '百草味-中秋坚果大礼包', '98', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/628189716/O1CN01ZHzDM32LdyncNMolk_!!0-item_pic.jpg_580x580Q90.jpg_.webp', '01', '0', '【百草味-中秋坚果大礼包1442g/8款】每日干果零食混合礼盒送礼品', '200', '299'),
	(49, '安乡杨矮子酱板鸭', '44', 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/4118066308/TB1iGbMaxTpK1RjSZFMXXbG_VXa_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '1', '安乡杨矮子酱板鸭湖南常德特产正宗酱板鸭香辣/特辣鸭肉零食小吃', '50', '65'),
	(48, '初旭官方店 温州初旭酱鸭舌头原味480g', '150', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/1026273644/O1CN01nlp0kd1cmzt4V3QbZ_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '0', '初旭官方店 温州初旭酱鸭舌头原味480g 鸭肉小吃零食初旭鸭舌', '20', '180'),
	(50, '天天好日子素毛肚', '39.9', 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/2206725954710/O1CN018X51GZ1kfE5drS87y_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '1', '天天好日子素毛肚8090后怀旧零食童年小素食低脂麻辣小吃55g', '1000', '50'),
	(51, '米酥酥小糯米锅巴', '20.9', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2206490720345/O1CN014XpJ421EQ3GAgLhzs_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '0', '米酥酥小糯米锅巴安徽特产手工净重5斤老式散装网红脆零食小包装', '500', '29.9'),
	(52, '乐事薯片超大包70g*10袋', '37.9', 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/1014978183/O1CN01GLywxZ2AJrdAndAk7_!!1014978183.jpg_360x360Q90.jpg_.webp', '01', '1', '乐事薯片超大包70g*10袋 一整箱散装零食品礼包原切香芋片新口味', '1000', '39.9'),
	(53, '旺旺烧米饼办公休闲零食饼干', '39.9', 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/1588913126/O1CN01cpp8E31YxkizY906K_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '0', '旺旺烧米饼办公休闲零食饼干经典酱烧味烧米饼54g*4', '20', '45'),
	(54, '韩国九日甜辣炒年糕条原装进口小吃膨化零食', '20.9', 'https://img.alicdn.com/imgextra/i3/23394873/O1CN01AzrI1S1lrseAqCJLi_!!0-saturn_solar.jpg_180x180.jpg', '01', '1', '韩国九日甜辣炒年糕条原装进口小吃膨化零食', '200', '24.9'),
	(55, '大学开学大一新生住宿住校大学生寝室宿舍好物', '25', 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/3242164590/O1CN01EbgZgK1jmGYRj60sq_!!3242164590-0-lubanu-s.jpg_360x360Q90.jpg_.webp', '02', '1', '大学开学大一新生住宿住校大学生寝室宿舍好物女必备神器生活用品', '452', '29.9'),
	(56, '创意家居用品生活用品', '39', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2241872165/O1CN01ypzOcD1Rrc2GR0945_!!2241872165.jpg_360x360Q90.jpg_.webp', '02', '1', '生日礼物男生学生女生闺蜜实用创意家居用品生活用品中秋节小礼品', '488', '40.9'),
	(57, '创意家居用品', '25', 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/873732769/O1CN011WKFACsxkxVc1C5_!!873732769.jpg_360x360Q90.jpg_.webp', '02', '0', '寝室神器上铺黑科技创意大学生宿舍必用品生活懒人实用办公多功能', '25', '29.9'),
	(58, '创意家居用品', '28.5', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/3501376239/O1CN01maWxfb1vxVfUbl9cY_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '02', '1', '开学住校生学生宿舍必备女生用品初中寝室高中生活小百货大学神器', '200', '29.9'),
	(59, '宿舍好物', '14.9', 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1986841764/O1CN01sCtMtr1OtxCpnibZS_!!1986841764.jpg_360x360Q90.jpg_.webp', '02', '1', '大学生住宿舍好物生活日用家居用品用具小百货女生神器住校寝室', '135', '19.9'),
	(60, '宿舍好物', '8.9', 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/267817308/O1CN01CPck5D23r73RMj5LD_!!267817308.jpg_360x360Q90.jpg_.webp', '02', '0', '高中大学生住校宿舍开学女生好物神器家居生活用品用具小东西百货', '258', '9.9'),
	(61, '宿舍好物', '25.89', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2201413119233/O1CN01qqRoor2I4lU0sxJWj_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '02', '0', '创意抖音同款懒人家庭小货居家生活日用品实用充电迷电子秤', '578', '29.9'),
	(62, '家居实用', '16.5', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/835499728/O1CN012LjTOXz3HmeAp3D_!!835499728.jpg_360x360Q90.jpg_.webp', '02', '0', '创意懒人家居家实用生活日用品韩国卫生间宿舍收纳小百货商品神器', '5689', '19.9'),
	(63, '家居实用', '7.9', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/1660857504/O1CN01fnSjX925IsgcWRjyF_!!1660857504.jpg_360x360Q90.jpg_.webp', '02', '1', '家居日用品生活小百货家用大全大学生男女住校生宿舍寝室神器衣架', '1235', '9.9'),
	(64, '抖音同款家居用品生活日用品创意小百货', '23.5', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2354003763/TB23VWnoZyYBuNkSnfoXXcWgVXa_!!2354003763.jpg_360x360Q90.jpg_.webp', '02', '0', '抖音同款家居用品生活日用品创意小百货家用小物件实用小工具套装', '65', '25'),
	(65, '零食网红豆干大辣片', '24.9', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/725677994/O1CN01EhhBeI28vIm7PMao7_!!2-item_pic.png_360x360Q90.jpg_.webp', '01', '1', '卫龙辣条大面筋65g*10袋辣味零食网红豆干大辣片办公室分享小零食', '156', '29.9'),
	(66, '网红零食', '18.9', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/3397885276/O1CN01uadUuo1oqSGet9anV_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '0', '思乡山手撕大辣片湖南麻辣网红零食辣条小吃儿时怀旧豆皮特产豆干', '748', '19.9'),
	(67, '盼盼家庭号薯片虾条超大包', '9.9', 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2081314055/O1CN013CZrrz1fpEfSic4LH_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '1', '盼盼家庭号薯片虾条超大包整箱休闲食品充饥夜宵零食小吃的大礼包', '75', '11.9'),
	(68, '阿婆家薯片大包网红小吃零食大礼包', '11.9', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2825967342/O1CN01WLmHNU246gXPEksrG_!!2825967342-0-lubanu-s.jpg_360x360Q90.jpg_.webp', '01', '1', '阿婆家薯片大包网红小吃零食大礼包超大整箱散装混装吃货休闲食品', '112', '15.9'),
	(69, '娃哈哈AD钙奶24瓶哇哈哈儿童风味酸奶早餐牛奶', '22.6', 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/1777552687/O1CN01WfbJuV1Vigo25ZzAd_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '0', '娃哈哈AD钙奶24瓶哇哈哈儿童风味酸奶早餐牛奶整箱饮料散装批发', '658', '29.9'),
	(70, '碳酸饮料可乐迷你瓶装', '18.5', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/925431633/O1CN01mYoBWA1NvxO5AtSW2_!!925431633-0-lubanu-s.jpg_360x360Q90.jpg_.webp', '01', '1', '百事可乐300mlPET*12瓶碳酸饮料可乐迷你瓶装可乐汽水整箱包邮', '268', '20'),
	(71, '江中猴姑咸味苏打饼干', '85', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/2012793042/O1CN01Xx5Pp31YLHSGnONZs_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '0', '江中猴姑咸味苏打饼干15天装零食养胃猴头菇梳打30包', '256', '99'),
	(72, '冰皮蛋糕麻薯糯米糍早餐面包', '27.8', 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2206419077273/O1CN01FByrmy23b59ZrVpwJ_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '1', '冰皮蛋糕麻薯糯米糍早餐面包好吃的零食懒人糕点网红零食', '256', '39.9'),
	(73, '纯蛋糕原味早餐速食面包', '29.9', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/3160935493/O1CN012ErEFD1qRqCJVzwNW_!!3160935493-0-lubanu-s.jpg_360x360Q90.jpg_.webp', '01', '0', '纯蛋糕原味早餐速食面包整箱营养学生充饥夜宵抗饿懒人零食品糕点', '256', '29.9'),
	(74, '达利园软面包法式小面包', '35.8', 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/3355350118/O1CN01WmahqS1Ck5MKrBX0J_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '01', '0', '达利园软面包法式小面包整箱早餐零食小吃休闲食品充饥夜宵蛋糕点', '256', '40.9'),
	(75, '维达棉韧立体美压花抽纸M码3层100抽', '5.9', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/725677994/O1CN01ZW3Py628vIlydUggk_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '02', '1', '维达棉韧立体美压花抽纸M码3层100抽单包中幅纸巾体验价/非零售价', '256', '20.9'),
	(76, '60包抽纸家用实惠装整箱卫生纸巾面巾餐巾纸', '49.9', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2930255252/O1CN01UDD47E1ofSkIEyKqp_!!0-item_pic.jpg_360x360Q90.jpg_.webp', '02', '0', '60包抽纸家用实惠装整箱卫生纸巾面巾餐巾纸抽婴儿原木抽纸巾漫花', '256', '59.9'),
	(77, '迷你日系保温杯', '20.9', 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/122757186/O1CN01qzEWPv22xEkef2Sjh_!!0-saturn_solar.jpg_360x360Q90.jpg_.webp', '02', '0', '迷你日系保温杯女便携小学生简约可爱水杯子', '256', '30.9'),
	(78, '棉拖鞋秋冬女居家用保暖毛绒防滑', '29.9', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2121402114/O1CN01IyyxoK1RUFtzxhlqf_!!2121402114-0-lubanu-s.jpg_360x360Q90.jpg_.webp', '02', '0', '棉拖鞋秋冬女居家用保暖毛绒防滑冬天室内厚底撞色毛拖鞋男士冬季', '256', '39.9');
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

-- 导出  表 yunstore.msg 结构
CREATE TABLE IF NOT EXISTS `msg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word` varchar(50) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  `img` text,
  `goodsid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- 正在导出表  yunstore.msg 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `msg` DISABLE KEYS */;
INSERT INTO `msg` (`id`, `word`, `time`, `img`, `goodsid`) VALUES
	(2, '看你起来还不错', '2020-9-25 16:16:12', 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/3300766192/O1CN01552mrW1vbz3tu8VkH_!!0-item_pic.jpg_360x360Q90.jpg', NULL);
/*!40000 ALTER TABLE `msg` ENABLE KEYS */;

-- 导出  表 yunstore.orders 结构
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsid` int(11) DEFAULT NULL,
  `num` int(10) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `relname` varchar(50) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 COMMENT='订单表';

-- 正在导出表  yunstore.orders 的数据：13 rows
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`id`, `goodsid`, `num`, `price`, `address`, `phone`, `relname`, `total`, `time`, `email`) VALUES
	(1, 55, 1, 25, '成都', '10086', '小明', 25, '2020-09-25 17:01:30', 'last@qq.com'),
	(2, 72, 2, 28, '成都', '10086', '小明', 56, '2020-09-25 17:01:30', 'last@qq.com'),
	(3, 68, 2, 12, '成都', '10086', '小明', 24, '2020-09-25 17:01:30', 'last@qq.com');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- 导出  表 yunstore.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `pwd` varchar(50) NOT NULL,
  `headpic` varchar(256) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `signature` varchar(50) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=utf8 COMMENT='用户信息表';

-- 正在导出表  yunstore.user 的数据：6 rows
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`uid`, `username`, `email`, `pwd`, `headpic`, `phone`, `address`, `signature`, `time`) VALUES
	(1, 'admin', 'admin@163.com', 'admin', 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg', '10086', '成都', 'none', NULL),
	(2, 'last', 'last@qq.com', '123456', NULL, NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
