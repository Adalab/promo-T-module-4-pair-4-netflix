CREATE DATABASE netflix;
USE netflix;

CREATE TABLE movies (
id INT NOT NULL AUTO_INCREMENT, 
title VARCHAR(45) NOT NULL,
genre VARCHAR(45) NOT NULL,
image TEXT NOT NULL,
category VARCHAR(45) NOT NULL,
`year` INT,
PRIMARY KEY (id));

CREATE TABLE users(
idUser INT NOT NULL AUTO_INCREMENT,
`user` VARCHAR(45) NOT NULL,
`password` VARCHAR(45) NOT NULL,
`name` VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
plan_details VARCHAR(45) NOT NULL,
PRIMARY KEY (idUser));

CREATE TABLE actors(
idActor INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(45) NOT NULL,
lastname VARCHAR (45) NOT NULL,
country VARCHAR(45) NOT NULL,
year_birthday INT,
PRIMARY KEY (idActor));

CREATE TABLE rel_movies_users(
id INT AUTO_INCREMENT NOT NULL,
idUser INT NOT NULL,
idMovie INT NOT NULL,
PRIMARY KEY (id));

//AÑADIR UNA PUNTUACION A UNA PELICULA//
UPDATE `freedb_freedbdatabase_netflix`.`rel_movies_users` SET `score` = '9' WHERE (`id` = '6');

//AÑADIR relacion pelis con actors//

INSERT INTO `freedb_freedbdatabase_netflix`.`rel_movies_actors` (`idActor`, `idMovie`) VALUES ('3', '1');
INSERT INTO `freedb_freedbdatabase_netflix`.`rel_movies_actors` (`idActor`, `idMovie`) VALUES ('2', '2');
INSERT INTO `freedb_freedbdatabase_netflix`.`rel_movies_actors` (`idActor`, `idMovie`) VALUES ('1', '3');
