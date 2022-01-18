const http = require("http");
const EventEmitter = require("events");
const logger = require("debug")("test:api");

const testData = {
  testStatus: [],
  testEvent: new EventEmitter(),
  host: "localhost",
  port: 3000,
};

function init(doneEvent) {
  testData.testEvent.on("event", (index) => {
    testData.testStatus[index] = true;

    let allDone = true;
    for (test in testData.testStatus) {
      if (testData.testStatus[test] === false) {
        allDone = false;
        break;
      }
    }

    if (allDone) {
      logger("All tests complete!");
      doneEvent.obj.emit(doneEvent.name);
    }
  });
}

function verify(httpMethod, testProperties) {
  if (httpMethod === null || httpMethod === undefined) {
    console.error(`ERROR: Bad method (${httpMethod}) passed to verify.`);
  } else {
    switch (httpMethod) {
      case "GET": {
        verifyGet({
          testId: testData.testStatus.push(false) - 1,
          ...testProperties,
        });
        break;
      }
      case "POST": {
        verifyPost({
          testId: testData.testStatus.push(false) - 1,
          ...testProperties,
        });
        break;
      }
      default: {
        console.error(`ERROR: Unknown method (${httpMethod}) passed to verify.`);
      }
    }
  }
}

function verifyPost({ testId, testDescription, path, data }) {
  logger("Post test: " + testDescription);

  const options = {
    hostname: testData.host,
    path: path,
    port: testData.port,
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };
  const request = http.request(options, (response) => {
    response.on("data", (chunk) => {
      process.stdout.write(`RESPONSE: ${chunk}`);
    });

    //- TEST AGAINST RETURN HEADER FOR SUCCESS
    //  - Success: 201 (resource is at refered URL so no return info)
    //  - Bad body: 415
    //  - Already exists: 409
    //  - Server logic error: 500
    //- NOTE: To determine POST responses check here:
    //    https://www.rfc-editor.org/rfc/rfc7231#page-4
    response.on("end", () => {
      if (response.statusCode === 201) {
        logger(`PASSED ${testDescription}`);
      } else {
        console.error(`FAILED ${testDescription}`);
        console.error(`\tRECEIVED: (${response.statusCode})`);
      }

      testData.testEvent.emit("event", testId);
    });
  });

  request.write(JSON.stringify(data));
  request.end();
}

function verifyGet({ testId, testDescription, path, expectedResponse }) {
  logger("Get test: " + testDescription);

  const request = http.request(
    { hostname: testData.host, path: path, port: testData.port, method: "GET" },
    (response) => {
      let value = "";

      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        value += chunk;
      });

      //- TEST AGAINST RETURN HEADER FOR SUCCESS
      //  - Success: 200
      //  - Does Not Exist: 404
      //- NOTE: To determine POST responses check here:
      //    https://www.rfc-editor.org/rfc/rfc7231#page-4
      response.on("end", () => {
        if (response.statusCode === 200 && value === expectedResponse) {
          logger(`PASSED ${testDescription}`);
        } else {
          console.error(`FAILED ${testDescription}`);
          console.error(`\tEXPECTED: (${expectedResponse})`);
          console.error(`\tRECEIVED: (${response.statusCode}) (${value})`);
        }

        testData.testEvent.emit("event", testId);
      });
    }
  );

  request.end();
}

module.exports = { init, verify };
