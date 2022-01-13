const express = require("express");
const debug = require("debug")("express:app");
const router = express.Router();

router.get("/", (req, res, next) => {
  // res.render('index', { title: 'Express' });
  res.send("Received GET /races");
  debug("Received GET /races");
});

module.exports = router;
