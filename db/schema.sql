DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create Burger Table 
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers(
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(35) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);