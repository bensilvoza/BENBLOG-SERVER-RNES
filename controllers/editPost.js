// procedures
let procedureEditPost = require("../procedures/procedureEditPost");

async function editPost(req, res) {
  procedureEditPost(req, res);
  return;
}

module.exports = {
  editPost,
};
