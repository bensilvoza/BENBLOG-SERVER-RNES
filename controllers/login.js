// procedures
let procedureLogin = require("../procedures/procedureLogin");

async function login(req, res) {
  procedureLogin(req, res);
  return;
}

module.exports = {
  login,
};
