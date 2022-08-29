// utils
let db = require("../../utils/shared/db");

function procedureCreatePost(req, res) {
  let sql = `
  INSERT INTO post
  VALUES (?, ?, ?, ?, ?, ?)
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
    [userId, postId, title, date, readTime, description],
    function (error) {
      if (error) {
        console.log(error);
        res.json({ message: "ERROR" });
      } else {
        res.json({ message: "OK" });
      }
    }
  );
}

module.exports = procedureCreatePost;
