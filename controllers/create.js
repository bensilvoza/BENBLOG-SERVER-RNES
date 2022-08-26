// procedures
let procedureCreatePost = require("../procedures/procedureCreate");

async function createPost(req, res) {
  procedureCreatePost(req.body);
  res.json({ message: "OK" });
}

module.exports = {
  createPost,
};
