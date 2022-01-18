//-
//- Public API
//-

//- Determines if there are any objects with a matching name. Returns true or
//  false.
//- NOTE: Test version of this module is not thread safe. Ok for learning
//    purposes, but don't depend on it.
function isValidName(name) {
  let result = true;

  for (let key in raceData) {
    if (raceData[key].name === name) {
      result = false;
      break;
    }
  }

  return result;
}

//- Determines if the ID matches any data in the backing store. Returns true or
//  false.
//- NOTE: Test version of this module is not thread safe. Ok for learning
//    purposes, but don't depend on it.
function isValidId(id) {
  let result = false;

  if (raceData.hasOwnProperty(id)) {
    result = true;
  }

  return result;
}

//- Determines if `data` matches the structure for a race object. Returns true
//  or false.
function isValidData(data) {
  let result = true;

  if (!isValidObject(data)) {
    result = false;
  } else if (!data.hasOwnProperty("name") || !data.hasOwnProperty("drivers")) {
    result = false;
  } else if (typeof data.name !== "string") {
    result = false;
  } else if (!Array.isArray(data.drivers)) {
    result = false;
  } else if (data.drivers.length === 0 || !isValidObject(data.drivers[0])) {
    result = false;
  } else if (
    !data.drivers[0].hasOwnProperty("driver") ||
    !data.drivers[0].hasOwnProperty("car") ||
    !data.drivers[0].hasOwnProperty("time")
  ) {
    result = false;
  } else if (
    typeof data.drivers[0].driver !== "string" ||
    typeof data.drivers[0].car !== "string" ||
    typeof data.drivers[0].driver !== "string"
  ) {
    result = false;
  }

  return result;
}

//- Commits data to the backing store. Returns the ID for looking up the data
//  again.
//- NOTE: Test version of this module is not thread safe. Ok for learning
//    purposes, but don't depend on it.
function commitData(data) {
  //- Determine highest key value
  let upperKey = 0;

  for (let key in raceData) {
    const keyInt = parseInt(key);
    if (keyInt > upperKey) {
      upperKey = keyInt;
    }
  }

  //- Commit to object
  upperKey += 1;
  raceData[upperKey] = data;

  return upperKey;
}

//- Returns all races. An array of objects or an empty array is returned.
//- NOTE: Test version of this module is not thread safe. Ok for learning
//    purposes, but don't depend on it.
function getAllData() {
  let result = [];

  for (let key in raceData) {
    result.push(raceData[key]);
  }

  return result;
}

//- Returns the data associated with the ID from the backing store. Returns an
//  object populated with race data or an empty object if there's an error.
//- NOTE: Test version of this module is not thread safe. Ok for learning
//    purposes, but don't depend on it.
function getData(id) {
  let result = {};

  if (isValidId(id)) {
    result = raceData[id];
  }

  return result;
}

module.exports = { commitData, getData, getAllData, isValidData, isValidId, isValidName };

//-
//- Private API
//-
let raceData = {
  0: {
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
  1: {
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
};

//- Determines if `data` is actually a JSON object. Returns true or false.
function isValidObject(data) {
  let result = false;

  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    result = true;
  }

  return result;
}
