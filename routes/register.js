// libraries
const express = require("express");
const router = express.Router();

// controllers
let { register } = require("../controllers/register");

router.get("/register", register);

module.exports = router;
