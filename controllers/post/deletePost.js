// procedures
let procedureDeletePost = require("../../procedures/post/procedureDeletePost");

async function deletePost(req, res) {
  procedureDeletePost(req, res);
  return;
}

module.exports = {
  deletePost,
};
