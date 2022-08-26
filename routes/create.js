// libraries
const express = require("express");
const mysql = require("mysql");
const router = express.Router();

// controllers
let { create } = require("../controllers/create");

// utils
let db = require("../utils/shared/db");

router.get("/posts/create", async function (req, res) {
  // sql
  // let response = procedureCreate(param1, param2, param3, param4)

  let sql =
    "create table jj (userId text(10), name text(255), email text(255), password text(255))";

  db.query(sql, function (error) {
    if (error) return error;
    res.send("Working");
  });
});

module.exports = router;
