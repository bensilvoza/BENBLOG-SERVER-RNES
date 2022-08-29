// libraries
const express = require("express");
const router = express.Router();

// middleware
let verifyToken = require("../../middleware/verifyToken");

// controllers
let { createPost } = require("../../controllers/post/createPost");

router.post("/post/create", verifyToken, createPost);

module.exports = router;
