CREATE DATABASE record_company;
USE record_company;
CREATE TABLE band (
id INT NOT NULL AUTO_INCREMENT ,
name VARCHAR (255) NOT NULL,
PRIMARY KEY (id)

);
CREATE TABLE User (
idUser INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
user VARCHAR(45) NOT NULL, 
password VARCHAR(45) NOT NULL,
name VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
plan_details VARCHAR(45) NOT NULL);

CREATE TABLE actors(
idactor INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
name VARCHAR(45) NOT NULL,
lastname VARCHAR(45) NOT NULL,
country varchar(45) NOT NULL,
year_birthday INT);