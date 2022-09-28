# Host: localhost  (Version: 5.5.53)
# Date: 2022-08-20 18:28:24
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "banner"
#

DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(50) DEFAULT NULL,
  `url` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

#
# Data for table "banner"
#

/*!40000 ALTER TABLE `banner` DISABLE KEYS */;
INSERT INTO `banner` VALUES (1,'img/banner01.jpg','https://www.shop.philips.com.cn/pc/#/decorate?id=e'),(2,'img/banner02.jpg','https://www.shop.philips.com.cn/pc/#/decorate?id=4');
/*!40000 ALTER TABLE `banner` ENABLE KEYS */;

#
# Structure for table "comment_table"
#

DROP TABLE IF EXISTS `comment_table`;
CREATE TABLE `comment_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsId` varchar(10) NOT NULL,
  `vipName` varchar(10) NOT NULL,
  `commentTime` datetime NOT NULL,
  `content` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "comment_table"
#

/*!40000 ALTER TABLE `comment_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment_table` ENABLE KEYS */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `typeId` char(3) NOT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  `goodsTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`goodsId`),
  KEY `typeId` (`typeId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('001','飞利浦 Sonicare 9000 series充电式声波震动牙刷 HX','001',1099,999,'','img/001.jpg','有货','HX1887','img/002.png','img/003.jpg','01>','02>','','','','','','','','2022-08-12 19:52:06'),('002','飞利浦新致臻机皇电动牙刷HX2461','001',569,999,'','img/004.png','缺货','HX2461','img/006.png','img/005.jpg','01>','02>','','','','','','','','2022-08-12 19:52:47'),('003','飞利浦新品至臻机皇升级版声波震动牙刷HX2566','001',520,999,'','img/010.jpg','有货','PX2566','img/031.png','img/036.jpg','01>','02>','','','','','','','','2022-08-12 19:53:48'),('004','飞利浦sonicare 高级清洁牙膏 DIS780/02','001',1420,999,'','img/028.png','缺货','KX2448','img/034.png','img/99.png','01>','02>','','','','','','','','2022-08-12 19:54:55'),('005','飞利浦Line Friend 合作款电动牙刷Sally','001',399,999,'','img/5.jpg','有货','KX2448','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-12 19:55:27'),('006','飞利浦小胖丁电动牙刷HX3724/02','001',299,999,'','img/003.jpg','缺货','HX2491','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-12 19:55:56'),('007','飞利浦sonicare 蜂胶精华口喷 DIS782/02','001',459,999,'','img/1.jpg','有货','KX2448','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-12 19:56:34'),('008','飞利浦sonicare 益生菌漱口水 DIS781/02','001',469,999,'','img/2.jpg','缺货','PX2566','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-12 19:57:10'),('009','飞利浦电动牙刷SPA刷 成人声波震动牙刷 5种模式 HX2491','001',599,999,'','img/001.jpg','有货','HX2491','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:15:49'),('010','飞利浦电动牙刷SPA刷 成人声波震动牙刷 5种模式 HX2491 七夕礼盒装','001',599,999,'','img/002.png','缺货','PX2566','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:17:17'),('011','飞利浦Sonicare 9900 Prestige 采用 SenseIQ 技术的电动牙刷HX9997QBP七夕','001',2499,999,'','img/003.jpg','有货','KX2448','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:17:50'),('012','飞利浦DiamondClean 9000 智能化APP声波震动牙刷HX9912QBP七夕礼盒装','001',1649,999,'','img/004.png','缺货','HX2151','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:18:32'),('013','飞利浦至臻机皇升级版声波震动牙刷HX2451BP七夕礼盒装','001',479,999,'','img/005.jpg','有货','HZ2444','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:19:12'),('014','飞利浦电动牙刷全自动声波充电式成人男女情侣款杀菌HX2452波普风','001',549,999,'','img/006.png','缺货','HX2491','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:19:40'),('015','飞利浦 DiamondClean 9000 智能化APP声波震动牙刷 HX9912/79','001',1399,999,'','img/007.jpg','有货','HZ2444','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:21:08'),('016','飞利浦充电式声波震动牙刷 HX6877/27','001',799,999,'','img/008.png','缺货','HZ2444','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:22:19'),('017','飞利浦至臻机皇情人节礼盒HX2451','001',459,999,'','img/012.png','有货','HX2491','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:23:37'),('018','飞利浦 充电式声波震动牙刷HX6850/60','001',512,999,'','img/014.png','缺货','HZ2444','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-11 15:24:22'),('019','飞利浦智能化APP声波震动牙刷 HX','001',1649,999,'','img/035.png','有货','HX1887','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:05:46'),('020','飞利浦 Sonicare 9000 series充电式','001',1099,999,'','img/036.jpg','缺货','HX2491','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:06:23'),('021','飞利浦多效小羽刷HX2471','001',329,999,'','img/033.png','有货','HX2491','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:06:50'),('022','飞利浦新致臻机皇电动牙刷HX2461','001',459,999,'','img/031.png','缺货','HX1887','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:07:33'),('023','飞利浦Line Friend 合作款电动牙刷Sally','001',259,999,'','img/021.png','有货','HZ2444','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:25:50'),('024','飞利浦Sonicare声波震动牙刷HX6855/12','001',459,999,'','img/023.png','缺货','HX2491','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:26:23'),('025','飞利浦电动牙刷HX2421/04（柔雾粉）','001',226,999,'','img/018.jpg','有货','KX2448','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:26:58'),('026','飞利浦钻石亮白型声波震动牙刷粉色HX','001',1099,999,'','img/020.jpg','缺货','PX2566','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:27:32'),('027','飞利浦充电式声波震动牙刷 HX6856/12','001',599,999,'','img/022.png','有货','HX2491','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:28:09'),('028','飞利浦充电式声波震动牙刷 HX6806/02','001',389,999,'','img/017.png','缺货','HX2491','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:28:28'),('029','飞利浦充电式声波震动牙刷HX6721/33','001',599,999,'','img/017.png','有货','PX2566','img/2.jpg','img/4.jpg','01>','02>','','','','','','','','2022-08-13 10:28:49');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "goodstype"
#

DROP TABLE IF EXISTS `goodstype`;
CREATE TABLE `goodstype` (
  `typeid` char(3) NOT NULL,
  `goodstype` varchar(20) NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodstype"
#

/*!40000 ALTER TABLE `goodstype` DISABLE KEYS */;
INSERT INTO `goodstype` VALUES ('001','口腔护理'),('002','电动洁牙器'),('003','电动牙刷附件'),('004','口腔护理产品'),('005','男士理容'),('006','理发和面部造型器'),('007','刷头配件'),('008','身体护理'),('009','护发美肌'),('010','母婴护理'),('011','温奶器和消毒锅'),('012','喂养套装和辅食料理'),('013','奶瓶和奶嘴'),('014','电动新风口罩'),('015','替换滤芯');
/*!40000 ALTER TABLE `goodstype` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(20) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('sss123','001',8),('sss123','005',8),('sss123','003',8);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;

#
# Structure for table "vip"
#

DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `sex` char(2) DEFAULT '女',
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

/*!40000 ALTER TABLE `vip` DISABLE KEYS */;
INSERT INTO `vip` VALUES ('sss123','123456','女',NULL),('sss666','123456','女',NULL);
/*!40000 ALTER TABLE `vip` ENABLE KEYS */;
