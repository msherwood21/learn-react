const http = require("http");
const EventEmitter = require("events");

let userEvent = undefined;
let testStatus = [];
const testEvent = new EventEmitter();

function init(doneEvent) {
  userEvent = doneEvent;

  testEvent.on("event", (index) => {
    testStatus[index] = true;

    let allDone = true;
    for (test in testStatus) {
      if (testStatus[test] === false) {
        allDone = false;
        break;
      }
    }

    if (allDone) {
      console.log("All tests complete!");
      userEvent.obj.emit(userEvent.name);
    }
  });
}

function verify(testProperties) {
  verifyPrivate({
    testId: testStatus.push(false) - 1,
    ...testProperties,
  });
}

function verifyPrivate({ testId, testDescription, httpMethod, path, expectedResponse }) {
  console.log("Testing " + testDescription);

  const request = http.request(
    { hostname: "localhost", path: path, port: 3000, method: httpMethod },
    (response) => {
      let value = "";

      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        value += chunk;
      });

      response.on("end", () => {
        if (value === expectedResponse) {
          console.log(`PASSED ${testDescription}`);
        } else {
          console.error(`FAILED ${testDescription}`);
          console.error(`\tEXPECTED: (${expectedResponse})`);
          console.error(`\tRECEIVED: (${value})`);
        }

        testEvent.emit("event", testId);
      });
    }
  );

  request.end();
}

module.exports = { init, verify };
