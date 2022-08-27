// procedures
let procedureCreatePost = require("../procedures/procedureCreatePost");

async function createPost(req, res) {
  procedureCreatePost(req, res);
  return;
}

module.exports = {
  createPost,
};
