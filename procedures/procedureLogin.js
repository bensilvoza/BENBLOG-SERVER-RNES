// utils
let db = require("../utils/shared/db");

function procedureLogin() {
  let sql = "";
  db.query(sql, function (error) {
    if (error) return { message: "ERROR" };
    return { message: "OK" };
  });
}

module.exports = procedureLogin;
