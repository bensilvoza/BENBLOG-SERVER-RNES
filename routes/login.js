// libraries
const express = require("express");
const router = express.Router();

// controllers
let { login } = require("../controllers/login");

router.post("/login", login);

module.exports = router;
