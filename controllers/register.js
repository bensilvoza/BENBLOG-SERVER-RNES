// procedures
let procedureRegister = require("../procedures/procedureRegister");

async function register(req, res) {
  procedureRegister(req.body);
  res.json({ message: "OK" });
}

module.exports = {
  register,
};
