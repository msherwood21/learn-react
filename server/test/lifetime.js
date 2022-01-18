const { fork } = require("child_process");
const EventEmitter = require("events");
const logger = require("debug")("test:lifetime");

function init() {
  //- Start node child process that runs main app
  logger("Starting the node server...");
  const childProc = fork("src/index.js");
  logger("Done!");

  //- Specify shutdown behavior
  const shutdownEvent = new EventEmitter();
  shutdownEvent.on("event", () => {
    process.exit();
  });

  process.on("exit", (code) => {
    logger(`Exiting with code: ${code}`);
    childProc.kill();
  });

  //- Wait for the server to come up
  logger("Waiting for the server to come up...");
  const stop = new Date().getTime() + 1000;
  while (new Date().getTime() < stop);
  logger("Done!");

  return { event: shutdownEvent, name: "event" };
}

module.exports = { init };
