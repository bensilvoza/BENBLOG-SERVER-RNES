// utils
let db = require("../utils/shared/db");

function procedureDeletePost() {
  let sql = "";
  db.query(sql, function (error) {
    if (error) return error;
    return { message: "OK" };
  });
}

module.exports = procedureDeletePost;
