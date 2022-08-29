// procedures
let procedureGetPosts = require("../procedures/procedureGetPosts");

async function home(req, res) {
  procedureGetPosts(req, res);
  return;
}

module.exports = {
  home,
};
