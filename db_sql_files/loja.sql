# Host: localhost  (Version 5.5.5-10.4.21-MariaDB)
# Date: 2022-05-01 22:07:59
# Generator: MySQL-Front 6.1  (Build 1.26)
#database name: 'loja'

#
# Structure for table "cliente"
#

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `tel` varchar(20) DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

#
# Data for table "cliente"
#

INSERT INTO `cliente` VALUES (1,'Joana','joana@email.com','9292929292'),(2,'Rodrigo Guimaraes','rod@email.com','0123891083'),(3,'Rachel','rachel@email.com','8192310923'),(5,'Holanda','holanda@email.com','8371982732'),(6,'Braga','braga@email.net','7368162632'),(12,'Guimaraes','sawguima@email.net','7298726172'),(13,'Giulia','giulia@email.net','3761826632'),(14,'Jucycleide','jucy@email.com','1827391232'),(15,'Giulia','giulia@email.net','9719823234');

#
# Structure for table "role"
#

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(25) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "role"
#

INSERT INTO `role` VALUES (1,'admin'),(2,'user');

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `password` varchar(180) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `roleId` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`Id`),
  KEY `role_idx` (`roleId`),
  CONSTRAINT `role` FOREIGN KEY (`roleId`) REFERENCES `role` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

#
# Data for table "user"
#

INSERT INTO `user` VALUES (2,'admin','1234',1),(3,'user','1234',2);
