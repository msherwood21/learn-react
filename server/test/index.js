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
  expectedResponse: "Received GET /races",
});
api.verify({
  testDescription: "GET /race",
  httpMethod: "GET",
  path: "/race",
  expectedResponse: "Received GET /race",
});
api.verify({
  testDescription: "POST /race",
  httpMethod: "POST",
  path: "/race",
  expectedResponse: "Received POST /race",
});
