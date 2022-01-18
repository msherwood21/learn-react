const createError = require("http-errors");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const debug = require("debug")("express:app");

const racesRouter = require("./routes/races");
const raceRouter = require("./routes/race");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/races", racesRouter);
app.use("/race", raceRouter);

// Handle CORS requests globally
app.options(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.send();
});

//- Global failures result in a 404
app.use(function (req, res, next) {
  next(createError(404));
});

//- Server errors result in a 500
app.use(function (err, req, res, next) {
  debug("Received an error!");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.sendStatus(err.status || 500);
});

module.exports = app;
