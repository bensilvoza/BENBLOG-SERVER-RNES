// libraries
const express = require("express");
const router = express.Router();

// controllers
let { login } = require("../controllers/login");

router.get("/login", login);

module.exports = router;
