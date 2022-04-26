# Host: localhost  (Version 5.5.5-10.4.21-MariaDB)
# Date: 2022-04-25 23:02:05
# Generator: MySQL-Front 6.1  (Build 1.26)
# database name is loja

#
# Structure for table "cliente"
#

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE `cliente` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

#
# Data for table "cliente"
#

INSERT INTO `cliente` VALUES (1,'Joana','joana@email.com'),(2,'Rodrigo Guimaraes','rod@email.com'),(3,'Rachel','rachel@email.com'),(5,'Holanda','holanda@email.com'),(6,'Braga','braga@email.net'),(12,'Guimaraes','sawguima@email.net'),(13,'Giulia','giulia@email.net'),(14,'Jucycleide','jucy@email.com'),(15,'Giulia','giulia@email.net');
