// libraries
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// routes
const home = require("./routes/home");
const create = require("./routes/create");
// const post = require("./routes/post");
// const deletePost = require("./routes/delete");

// use
let app = express();
app.use(express.json());
app.use(cors());

// utils
let db = require("./utils/shared/db");

// connect db
db.connect();

// app.use(home);
// app.use(post);
app.use(create);
// app.use(deletePost);

// port
app.listen(process.env.PORT || 5000, function () {
  console.log("server is now running");
  console.log(".");
  console.log(".");
  console.log(".");
});
