-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` DEFAULT CHARACTER SET utf8 ;
USE `zara` ;

-- -----------------------------------------------------
-- Table `zara`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(95) NOT NULL,
  `adresses` VARCHAR(95) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zara`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`product` (
  `idproduct` INT NOT NULL AUTO_INCREMENT,
  `name_product` VARCHAR(45) NOT NULL,
  `description_product` VARCHAR(125) NOT NULL,
  `inStock` TINYINT NOT NULL,
  `images_product` VARCHAR(125) NOT NULL,
  `size` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `composition` VARCHAR(125) NOT NULL,
  `model` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`idproduct`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zara`.`order`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`order` (
  `idorder` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `users_idusers` INT NOT NULL,
  `product_idproduct` INT NOT NULL,
  PRIMARY KEY (`idorder`, `users_idusers`, `product_idproduct`),
  INDEX `fk_order_users_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_order_product1_idx` (`product_idproduct` ASC) VISIBLE,
  CONSTRAINT `fk_order_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `zara`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_product1`
    FOREIGN KEY (`product_idproduct`)
    REFERENCES `zara`.`product` (`idproduct`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `zara`.`help`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`help` (
  `MY ZARA ACCOUNT` VARCHAR(100) NOT NULL,
  `ITEMS AND SIZES` VARCHAR(100) NOT NULL,
  `SHIPPING` VARCHAR(100) NOT NULL,
  `PAYMENT AND INVOICES` VARCHAR(100) NOT NULL,
  `MY PURCHASES` VARCHAR(45) NOT NULL,
  `ZARA EXPERIENCIES` VARCHAR(45) NOT NULL,
  `EXCHANGES, RETURNS AND REFUNDS` VARCHAR(45) NOT NULL)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
