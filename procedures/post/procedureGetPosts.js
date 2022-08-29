// utils
let db = require("../../utils/shared/db");

function procedureGetPosts(req, res) {
  let sql = "SELECT * FROM post";
  db.query(sql, function (error, result) {
    if (error) {
      res.json({ message: "ERROR" });
    } else {
      res.json({ message: "OK", result: result });
    }
  });

  return;
}

module.exports = procedureGetPosts;
