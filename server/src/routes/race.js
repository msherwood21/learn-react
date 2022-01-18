const data = require("../data/races");
const debug = require("debug")("express:app");
const express = require("express");
const router = express.Router();

router.get("/:raceId", (req, res) => {
  debug(`Received GET /race/${req.params.raceId}`);

  //- NOTE: Refactor this to use error codes instead of returning body text.
  if (data.isValidId(req.params.raceId)) {
    res.send(JSON.stringify(data.getData(req.params.raceId)));
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  debug(`Received POST /race`);

  if (!data.isValidData(req.body)) {
    res.sendStatus(415);
  } else if (!data.isValidName(req.body.name)) {
    res.sendStatus(409);
  }
  //- Verify race was added successfully -> 500
  //  NOTE: This can't be tested unless the DB interface is mocked
  else {
    const id = data.commitData(req.body);

    res.status(201);
    res.set("Referer", `/race/${id}`);
    res.send();
  }
});

module.exports = router;
