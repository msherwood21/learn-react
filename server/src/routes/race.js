const express = require("express");
const debug = require("debug")("express:app");
const router = express.Router();

router.get("/", (req, res, next) => {
  debug("Received GET /race");
  res.send("Received GET /race");
});

router.post("/", (req, res, next) => {
  debug("Received POST /race");
  res.send("Received POST /race");
});

module.exports = router;
