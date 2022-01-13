const express = require("express");
const debug = require("debug")("express:app");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Received GET /race");
  debug("Received GET /race");
});

router.post("/", (req, res, next) => {
  res.send("Received POST /race");
  debug("Received POST /race");
});

module.exports = router;
