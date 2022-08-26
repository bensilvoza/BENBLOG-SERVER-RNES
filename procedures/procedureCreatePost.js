// utils
let db = require("../utils/shared/db");
let date = require("../utils/createPost/date");

function procedureCreatePost(post) {
  console.log(date);
  let sql = `
  INSERT INTO post
  VALUES (${post["userId"]}, ${post["postId"]}, ${post["title"]}, ${date}, ${post["readTime"]}, ${post["description"]})`;

  let output;
  db.query(sql, function (error, result) {
    if (error) {
      console.log(error);
      output = "ERROR";
      return;
    }
    console.log("OK");
    output = "OK";
    return;
  });

  return { message: output };
}

module.exports = procedureCreatePost;
