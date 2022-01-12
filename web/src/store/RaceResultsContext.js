import React, { createContext, useState } from "react";
import propTypes from "prop-types";

/*
 * Array layout:
 *  {
 *    name,
 *    [
 *      { driver name, car, time },
 *      ...
 *    ]
 *  }
 */
export const RaceResultsContext = createContext({
  races: [],
  // eslint-disable-next-line no-unused-vars
  addRace: (raceResult) => {},
});

export function RaceResultsContextProvider(props) {
  const [raceResults, setRaceResults] = useState([]);

  function addRaceHandler(raceResult) {
    setRaceResults((raceResults) => raceResults.concat(raceResult));
  }

  const raceContext = {
    races: raceResults,
    addRace: addRaceHandler,
  };

  return (
    <RaceResultsContext.Provider value={raceContext}>{props.children}</RaceResultsContext.Provider>
  );
}

RaceResultsContextProvider.propTypes = {
  children: propTypes.node,
};

export default RaceResultsContext;
