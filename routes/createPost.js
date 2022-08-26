// libraries
const express = require("express");
const router = express.Router();

// controllers
let { create } = require("../controllers/create");

router.get("/post/create", create);

module.exports = router;
