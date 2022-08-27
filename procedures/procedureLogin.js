// libraries
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// utils
let db = require("../utils/shared/db");

function procedureLogin(req, res) {
  let sql = "SELECT * FROM user WHERE name = ?";
  let name = req.body.name;
  db.query(sql, name, async function (error, result) {
    if (error) {
      res.json({ message: "ERROR" });
      return;
    } else if (result.length == 0) {
      res.json({ message: "ERROR" });
      return;
    } else {
      let plainPassword = req.body.password;
      // hash is from db
      let hash = result[0]["password"];

      let user = result[0];
      delete user["password"];

      const match = await bcrypt.compare(plainPassword, hash);

      if (match) {
        // create authorization token
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        jwt.sign({ ID: result[0]["userId"] }, jwtSecretKey, (error, token) => {
          res.json({
            token: token,
            user: user,
          });
        });
      } else {
        // Incorrect credentials
        res.json({ message: "ERROR" });
      }
    }
  });

  return;
}

module.exports = procedureLogin;
