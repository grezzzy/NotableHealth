DROP DATABASE IF EXISTS notable;
CREATE DATABASE notable;
\c notable;

CREATE TABLE IF NOT EXISTS users (
  user_id int GENERATED ALWAYS AS IDENTITY,
  first_name varchar(20) NOT NULL,
  last_name varchar(30) NOT NULL,
  username varchar(20) NOT NULL UNIQUE,
  email varchar(50) NOT NULL UNIQUE
);