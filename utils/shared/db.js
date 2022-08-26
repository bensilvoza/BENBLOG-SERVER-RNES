const mysql = require("mysql");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "benblogres",
});

module.exports = db;
