const prodData = require("./racesProd");
const testData = require("./racesTest");

if (process.env.TEST !== undefined) {
  module.exports = { ...testData };
} else {
  module.exports = { ...prodData };
}
