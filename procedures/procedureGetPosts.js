// utils
let db = require("../utils/shared/db");

function procedureGetPosts() {
  let sql = "";
  db.query(sql, function (error, result) {
    if (error) return error;
    return result;
  });
}

module.exports = procedureGetPosts;
