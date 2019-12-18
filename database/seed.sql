DROP DATABASE IF EXISTS sdcDatabase;
CREATE DATABASE IF NOT EXISTS sdcDatabase;

USE sdcDatabase;


CREATE TABLE IF NOT EXISTS theTableForSDC(
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  jobTitle TEXT,
  zipCode INT,
  country TEXT
);

