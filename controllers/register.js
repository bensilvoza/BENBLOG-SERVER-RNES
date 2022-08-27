// libraries
const bcrypt = require("bcrypt");

// procedures
let procedureRegister = require("../procedures/procedureRegister");

async function register(req, res) {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, async function (error, hash) {
    if (error) {
      res.json({ message: "ERROR" });
    }

    // store hash in database
    req.body.password = hash;
    procedureRegister(req, res);
    return;
  });
}

module.exports = {
  register,
};
