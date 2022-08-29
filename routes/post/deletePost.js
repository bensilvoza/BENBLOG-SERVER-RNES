// libraries
const express = require("express");
const router = express.Router();

// middleware
let verifyToken = require("../../middleware/verifyToken");

// controllers
let { deletePost } = require("../../controllers/post/deletePost");

router.get("/post/delete/:id", verifyToken, deletePost);

module.exports = router;
