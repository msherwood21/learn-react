const express = require("express");
const debug = require("debug")("express:app");
const router = express.Router();

const jsonResponse = [
  {
    name: "Formula 1 Gulf Air Bahrain Grand Prix",
    drivers: [
      {
        driver: "Lewis Hamilton",
        car: "Mercedes",
        time: "1:32:03.897",
      },
      {
        driver: "Max Verstappen",
        car: "Red Bull Racing Honda",
        time: "+0.745s",
      },
      {
        driver: "Valtteri Bottas",
        car: "Mercedes",
        time: "+37.383s",
      },
    ],
  },
  {
    name: "Formula 1 Pirelli Gran Premio Del Made In Italy E Dell'Emilia Romagna",
    drivers: [
      {
        driver: "Max Verstappen",
        car: "Red Bull Racing Honda",
        time: "2:02:34.598",
      },
      {
        driver: "Lewis Hamilton",
        car: "Mercedes",
        time: "+22.000s",
      },
      {
        driver: "Lando Norris",
        car: "McLaren Mercedes",
        time: "+23.702s",
      },
    ],
  },
];

router.get("/:raceId", (req, res, next) => {
  const id = parseInt(req.params.raceId, 10);
  debug("Received GET /race/" + req.params.raceId);

  if (id === 0 || id === 1) {
    res.send(JSON.stringify(jsonResponse[id]));
  } else {
    res.send(`Error! ID (${req.params.raceId}) is invalid.`);
  }
});

router.post("/", (req, res, next) => {
  debug("Received POST /race");
  res.send("Received POST /race");
});

module.exports = router;
