// libraries
const express = require("express");
const cors = require("cors");

// routes
const home = require("./routes/home");
const login = require("./routes/login");
const register = require("./routes/register");
const createPost = require("./routes/createPost");
const deletePost = require("./routes/deletePost");

const app = express();
app.use(express.json());
app.use(cors());

// utils
let db = require("./utils/shared/db");

// connect db
db.connect();

app.use(home);
app.use(login);
app.use(register);
app.use(createPost);
app.use(deletePost);

// port
app.listen(process.env.PORT || 5000, function () {
  console.log("server is now running");
  console.log(".");
  console.log(".");
  console.log(".");
});
