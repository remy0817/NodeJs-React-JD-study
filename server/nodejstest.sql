/*
Navicat MySQL Data Transfer

Source Server         : 10.30.0.11
Source Server Version : 50612
Source Host           : 10.30.0.11:3306
Source Database       : nodejstest

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2018-12-04 11:00:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(64) NOT NULL,
  `username` varchar(64) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `cellphone` varchar(16) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `createtime` timestamp NULL DEFAULT NULL,
  `updatetime` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `version` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('5395cb80-f6cb-11e8-ba6a-770cc9ca0229', 'wincy', '123456', '18113130002', '18113130002@qq.com', '2018-12-03 15:16:17', '2018-12-03 19:36:55', '10');
INSERT INTO `users` VALUES ('92617f90-f6ca-11e8-aa53-89997c73e8b5', 'remy', '123456', '18113130001', '18113130001@qq.com', '2018-12-03 15:09:04', '2018-12-03 15:12:03', '1');
