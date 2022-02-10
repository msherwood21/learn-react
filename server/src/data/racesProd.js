const debug = require("debug")("express:db");

//-
//- Public API
//-

//- Determines if there are any objects with a matching name. Returns true or
//  false.
function isValidName(name) {
  let result = true;

  return result;
}

//- Determines if the ID matches any data in the backing store. Returns true or
//  false.
function isValidId(id) {
  let result = false;

  return result;
}

//- Determines if `data` matches the structure for a race object. Returns true
//  or false.
function isValidData(data) {
  let result = false;

  return result;
}

//- Commits data to the backing store. Returns the ID for looking up the data
//  again.
//- NOTE: Test version of this module is not thread safe. Ok for learning
//    purposes, but don't depend on it.
function commitData(data) {
  let result = 0;

  return result;
}

//- Returns all races. An array of objects or an empty array is returned.
function getAllData() {
  let result = [];

  reactPool.query(`SELECT * FROM races`).then((res) => {
    res.rows.map((value) => console.log("-> " + value));
  });

  return result;
}

//- Returns the data associated with the ID from the backing store. Returns an
//  object populated with race data or an empty object if there's an error.
function getData(id) {
  let result = {};

  return result;
}

module.exports = { commitData, getData, getAllData, isValidData, isValidId, isValidName };

//-
//- Private API
//-

function checkDatabase() {
  postgresPool = new Pool({ database: "postgres" });

  postgresPool.query("SELECT datname FROM pg_database").then(
    (value) => {
      if (value.rows.find((value) => value.datname === "learn-react") === undefined) {
        postgresPool
          .query('CREATE DATABASE "learn-react"')
          .then(() => {
            debug("Database created");
            checkDbEvent.emit("event");
          })
          .catch((err) => {
            console.error("!! Failed to create the learn-react database");
            throw err;
          });
      } else {
        debug("Database already exists");
        checkDbEvent.emit("event");
      }
    },
    (err) => {
      console.error("!! Querying all databases failed");
      throw err;
    }
  );
}

function checkTable() {
  reactPool = new Pool();

  reactPool.connect().then(
    () => {
      reactPool.query(`SELECT EXISTS (SELECT FROM pg_tables WHERE tablename='races')`).then(
        (res) => {
          if (res.rows[0].exists) {
            debug("Table already exists");
          } else {
            reactPool.query(`CREATE TABLE races(id bigint, name text, drivers jsonb)`).then(
              () => {
                debug("Table created");
              },
              (err) => {
                console.error("!! Table creation failed");
                throw err;
              }
            );
          }
        },
        (err) => {
          console.error("!! Selecting the table failed");
          throw err;
        }
      );
    },
    (err) => {
      console.error("!! Connection to database failed");
      throw err;
    }
  );
}

//-
//- Module Setup
//-

const { Pool } = require("pg");
const EventEmitter = require("events");

const checkDbEvent = new EventEmitter();
let postgresPool = null;
let reactPool = null;

checkDbEvent.on("event", () => {
  debug("Closing the postgres pool");
  postgresPool.end();
  checkTable();
});

checkDatabase();
