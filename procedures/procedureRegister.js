// utils
let db = require("../utils/shared/db");

function procedureRegister(req, res) {
  let sql = "SELECT * FROM user WHERE name = ?";
  let name = req.body.name;
  db.query(sql, name, async function (error, result) {
    if (error) {
      res.json({ message: "ERROR" });
      return;
    }

    if (result.length == 1) {
      // name already exist
      res.json({ message: "nameAlreadyExist" });
      return;
    } else {
      let sql = `
      INSERT INTO user
      VALUES (?, ?, ?, ?)
      `;

      let userId = req.body.userId;
      let name = req.body.name;
      let email = req.body.email;
      let password = req.body.password;

      db.query(sql, [userId, name, email, password], function (error) {
        if (error) {
          res.json({ message: "ERROR" });
        } else {
          res.json({ message: "OK" });
        }
      });
    }
  });
}

module.exports = procedureRegister;
