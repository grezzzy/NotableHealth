DROP DATABASE IF EXISTS notable;
CREATE DATABASE notable;
\c notable;

CREATE TABLE IF NOT EXISTS doctors (
  user_id int GENERATED ALWAYS AS IDENTITY,
  first_name varchar(20) NOT NULL,
  last_name varchar(30) NOT NULL
);

CREATE TABLE IF NOT EXISTS appointments (

);
