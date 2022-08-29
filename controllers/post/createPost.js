// procedures
let procedureCreatePost = require("../../procedures/post/procedureCreatePost");

async function createPost(req, res) {
  procedureCreatePost(req, res);
  return;
}

module.exports = {
  createPost,
};
