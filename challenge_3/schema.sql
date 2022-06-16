DROP DATABASE IF EXISTS transactions;

CREATE DATABASE transactions;

USE transactions;

CREATE TABLE IF NOT EXISTS records
(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  email VARCHAR(20),
  password VARCHAR(20),
  street1 VARCHAR(20),
  street2 VARCHAR(20),
  city VARCHAR(20),
  state VARCHAR(20),
  zip_code VARCHAR(20),
  card_number VARCHAR(20),
  exp_date VARCHAR(20),
  cvv VARCHAR(20),
  billing_zip VARCHAR(20),
  PRIMARY KEY (id)
);