// procedures
let getPosts = require("../procedures/procedurePosts");

async function home(req, res) {
  let posts = getPosts();
  res.json(posts);
}

module.exports = {
  home,
};
