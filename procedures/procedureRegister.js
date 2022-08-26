// utils
let db = require("../utils/shared/db");

function procedureRegister() {
  let sql = "";
  db.query(sql, function (error) {
    if (error) return error;
    return { message: "OK" };
  });
}

module.exports = procedureRegister;
