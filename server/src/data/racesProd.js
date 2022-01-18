//-
//- Public API
//-

//- Determines if there are any objects with a matching name. Returns true or
//  false.
function isValidName(name) {
  return true;
}

//- Determines if the ID matches any data in the backing store. Returns true or
//  false.
function isValidId(id) {
  return false;
}

//- Determines if `data` matches the structure for a race object. Returns true
//  or false.
function isValidData(data) {
  return false;
}

//- Commits data to the backing store. Returns the ID for looking up the data
//  again.
//- NOTE: Test version of this module is not thread safe. Ok for learning
//    purposes, but don't depend on it.
function commitData(data) {
  return 0;
}

//- Returns all races. An array of objects or an empty array is returned.
function getAllData() {
  return [];
}

//- Returns the data associated with the ID from the backing store. Returns an
//  object populated with race data or an empty object if there's an error.
function getData(id) {
  return {};
}

module.exports = { commitData, getData, getAllData, isValidData, isValidId, isValidName };

//-
//- Private API
//-
