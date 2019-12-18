const mysql = require("mysql");
const faker = require("faker");
const Promise = require("bluebird");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sdcDatabase"
});

database.connect(console.log("connected to DB"));

const insertLine = line => {
  database.query(line);
};

// const fakeMaker = () => {
//   return insertLine(
//     `INSERT INTO
//   theTableForSDC(firstName, lastName, jobTitle, zipCode, country)
//   VALUES ("${faker.name.firstName()}", "${faker.name.lastName()}",  "${faker.name.jobTitle()}", ${faker.address.zipCode()}, "${faker.address.country()}");`
//   );
// };

const seedTheBeast = () => {
  for (let i = 0; i < 100000; i++) {
    insertLine(
      `INSERT INTO 
    theTableForSDC(firstName, lastName, jobTitle, zipCode, country) 
    VALUES ("${faker.name.firstName()}", "${faker.name.lastName()}",  "${faker.name.jobTitle()}", ${faker.address.zipCode()}, "${faker.address.country()}");`
    );
  }
  return 1;
};

seedTheBeast();

// setTimeout(() => {
//   seedTheBeast();
//   setTimeout(() => {
//     seedTheBeast();
//   }, 100);
// }, 100);
// setTimeout(() => {
//   seedTheBeast();
//   setTimeout(() => {
//     seedTheBeast();
//   }, 100);
// }, 100);
// setTimeout(() => {
//   seedTheBeast();
//   setTimeout(() => {
//     seedTheBeast();
//   }, 100);
// }, 100);
module.exports = { insertLine };
