// utils
let db = require("../utils/shared/db");

function procedureDeletePost(req, res) {
  let postId = req.params.id;

  let sql = "DELETE FROM post WHERE postId = ? ";
  db.query(sql, postId, function (error) {
    if (error) res.json({ message: "ERROR" });
    else res.json({ message: "OK" });
    return;
  });
}

module.exports = procedureDeletePost;
