// procedures
let procedureDeletePost = require("../procedures/procedureDeletePost");

async function deletePost(req, res) {
  procedureDeletePost(req, res);
  return;
}

module.exports = {
  deletePost,
};
