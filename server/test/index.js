const api = require("./api");
const lifetime = require("./lifetime");

//- Initialize the test environment
const { event, name } = lifetime.init();

//- Initialize the API module
api.init({ obj: event, name: name });

//- Send requests to the server and verify return behavior
api.verify("GET", {
  testDescription: "GET /races",
  path: "/races",
  expectedResponse: `[{"name":"Formula 1 Gulf Air Bahrain Grand Prix","drivers":[{"driver":"Lewis Hamilton","car":"Mercedes","time":"1:32:03.897"},{"driver":"Max Verstappen","car":"Red Bull Racing Honda","time":"+0.745s"},{"driver":"Valtteri Bottas","car":"Mercedes","time":"+37.383s"}]},{"name":"Formula 1 Pirelli Gran Premio Del Made In Italy E Dell'Emilia Romagna","drivers":[{"driver":"Max Verstappen","car":"Red Bull Racing Honda","time":"2:02:34.598"},{"driver":"Lewis Hamilton","car":"Mercedes","time":"+22.000s"},{"driver":"Lando Norris","car":"McLaren Mercedes","time":"+23.702s"}]}]`,
});
api.verify("GET", {
  testDescription: "GET /race/0",
  path: "/race/0",
  expectedResponse: `{"name":"Formula 1 Gulf Air Bahrain Grand Prix","drivers":[{"driver":"Lewis Hamilton","car":"Mercedes","time":"1:32:03.897"},{"driver":"Max Verstappen","car":"Red Bull Racing Honda","time":"+0.745s"},{"driver":"Valtteri Bottas","car":"Mercedes","time":"+37.383s"}]}`,
});
api.verify("POST", {
  testDescription: "POST /race",
  path: "/race",
  data: {
    name: "Formula 1 Heineken Grande Premio de Portugal",
    drivers: [
      { driver: "Lewis Hamilton", car: "Mercedes", time: "1:34:31.421" },
      { driver: "Max Verstappen", car: "Red Bull Racing Honda", time: "+29.148s" },
      { driver: "Valtteri Bottas", car: "Mercedes", time: "+33.530s" },
    ],
  },
});
