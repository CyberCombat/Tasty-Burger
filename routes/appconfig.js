const express = require("express");
const router = express.Router();
const config = require("config");

router.get("/", (req, res) => {
  const configData = { baseUrl: config.get("baseUrl") };
  res.send(configData);
});

module.exports = router;
