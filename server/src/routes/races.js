const data = require("../data/races");
const debug = require("debug")("express:app");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  debug("Received GET /races");
  res.send(JSON.stringify(data.getAllData()));
});

module.exports = router;
