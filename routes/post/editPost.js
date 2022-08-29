// libraries
const express = require("express");
const router = express.Router();

// middleware
let verifyToken = require("../../middleware/verifyToken");

// controllers
let { editPost } = require("../../controllers/post/editPost");

router.post("/post/edit/:id", verifyToken, editPost);

module.exports = router;
