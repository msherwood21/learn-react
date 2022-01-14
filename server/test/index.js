const api = require("./api");
const { fork } = require("child_process");
const EventEmitter = require("events");

//- Start node child process that runs main app
console.log("Starting the node server...");
const childProc = fork("src/index.js");
console.log("Done!");

//- Specify shutdown behavior
const shutdownEvent = new EventEmitter();
shutdownEvent.on("event", () => {
  process.exit();
});

process.on("exit", (code) => {
  console.log(`Exiting with code: ${code}`);
  childProc.kill();
});

//- Wait for the server to come up
console.log("Waiting for the server to come up...");
const stop = new Date().getTime() + 5000;
while (new Date().getTime() < stop);
console.log("Done!");

//- Initialize the API module
api.init({ obj: shutdownEvent, name: "event" });

//- Send requests to the server and verify return behavior
api.verify({
  testDescription: "GET /races",
  httpMethod: "GET",
  path: "/races",
  expectedResponse: `[{"name":"Formula 1 Gulf Air Bahrain Grand Prix","drivers":[{"driver":"Lewis Hamilton","car":"Mercedes","time":"1:32:03.897"},{"driver":"Max Verstappen","car":"Red Bull Racing Honda","time":"+0.745s"},{"driver":"Valtteri Bottas","car":"Mercedes","time":"+37.383s"}]},{"name":"Formula 1 Pirelli Gran Premio Del Made In Italy E Dell'Emilia Romagna","drivers":[{"driver":"Max Verstappen","car":"Red Bull Racing Honda","time":"2:02:34.598"},{"driver":"Lewis Hamilton","car":"Mercedes","time":"+22.000s"},{"driver":"Lando Norris","car":"McLaren Mercedes","time":"+23.702s"}]}]`,
});
api.verify({
  testDescription: "GET /race/0",
  httpMethod: "GET",
  path: "/race/0",
  expectedResponse: `{"name":"Formula 1 Gulf Air Bahrain Grand Prix","drivers":[{"driver":"Lewis Hamilton","car":"Mercedes","time":"1:32:03.897"},{"driver":"Max Verstappen","car":"Red Bull Racing Honda","time":"+0.745s"},{"driver":"Valtteri Bottas","car":"Mercedes","time":"+37.383s"}]}`,
});
api.verify({
  testDescription: "POST /race",
  httpMethod: "POST",
  path: "/race",
  expectedResponse: "Received POST /race",
});
