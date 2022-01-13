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

router.get("/", (req, res, next) => {
  debug("Received GET /races");
  res.send(JSON.stringify(jsonResponse));
});

module.exports = router;
