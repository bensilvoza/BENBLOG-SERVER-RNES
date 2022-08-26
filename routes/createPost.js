// libraries
const express = require("express");
const router = express.Router();

// controllers
let { createPost } = require("../controllers/createPost");

router.post("/post/create", createPost);

module.exports = router;
