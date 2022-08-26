// procedures
let procedureCreatePost = require("../procedures/procedureCreatePost");

async function createPost(req, res) {
  let post = req.body;
  let response = procedureCreatePost(post);
  console.log(response);
  res.json({ message: "OK" });
}

module.exports = {
  createPost,
};
