const express = require("express");
const cors = require("cors");

const home = require("../routes/home");
const users = require("../routes/users");
const appconfig = require("../routes/appconfig");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json()); // req.body
  app.use(cors());
  app.use(express.urlencoded({ extended: true })); // to loges the reqest into terminal
  app.use(express.static("public")); // to server static content
  // routes setup
  app.use("/", home);
  app.use("/api/user", users);
  app.use("/api/config", appconfig);
  app.use(error);
};
