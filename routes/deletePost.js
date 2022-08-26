// libraries
const express = require("express");
const router = express.Router();

// controllers
let { deletePost } = require("../controllers/deletePost");

router.get("/post/delete/:id", deletePost);

module.exports = router;
