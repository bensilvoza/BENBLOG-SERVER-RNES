// procedures
let procedureDeletePost = require("../procedures/procedureDeletePost");

async function deletePost(req, res) {
  procedureDeletePost();
  res.json({ message: "OK" });
}

module.exports = {
  deletePost,
};
