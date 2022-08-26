// libraries
var express = require("express");

async function home(req, res) {
  var products = await Product.find({});
  res.json(products);
}

module.exports = {
  home,
};
