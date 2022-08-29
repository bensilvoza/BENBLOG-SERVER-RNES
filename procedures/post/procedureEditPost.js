// utils
let db = require("../../utils/shared/db");

function procedureEditPost(req, res) {
  let sql = `
  UPDATE post
  SET userId = ?, postId = ?, title = ?, dateCreated = ?, readTime = ?, description = ? 
  WHERE postId = ?
  `;

  let post = req.body;
  let userId = post.userId;
  let postId = post.postId;
  let title = post.title;
  let date = post.dateCreated;
  let readTime = post.readTime;
  let description = post.description;

  db.query(
    sql,
    [userId, postId, title, date, readTime, description, postId],
    function (error) {
      if (error) {
        res.json({ message: "ERROR" });
      } else {
        res.json({ message: "OK" });
      }
    }
  );

  return;
}

module.exports = procedureEditPost;
