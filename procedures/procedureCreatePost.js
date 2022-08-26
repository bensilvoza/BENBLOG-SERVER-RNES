// utils
let db = require("../utils/shared/db");

function procedureCreatePost() {
  let sql = "";
  db.query(sql, function (error, result) {
    if (error) return error;
    return result;
  });
}

module.exports = procedureCreatePost;
