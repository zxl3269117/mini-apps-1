DROP DATABASE IF EXISTS transactions;

CREATE DATABASE transactions;

USE transactions;

CREATE TABLE IF NOT EXISTS buyers
(
  id INT NOT NULL ,
  name VARCHAR(20),
  email VARCHAR(20),
  password VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS addresses
(
  id INT NOT NULL AUTO_INCREMENT,
  line1 VARCHAR(20),
  line2 VARCHAR(20),
  city VARCHAR(20),
  state VARCHAR(20),
  zip VARCHAR(20),
  buyer_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (buyer_id)
      REFERENCES buyers(id)
);

CREATE TABLE IF NOT EXISTS cards
(
  id INT NOT NULL AUTO_INCREMENT,
  number VARCHAR(20),
  expiry VARCHAR(20),
  cvv VARCHAR(20),
  billing VARCHAR(20),
  buyer_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (buyer_id)
      REFERENCES buyers(id)
);