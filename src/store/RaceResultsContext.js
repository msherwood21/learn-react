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

const DummyData = [
    {
      name: "Bahrain",
      drivers: [
        {
          driver: "Lance Stroll",
          car: "Aston Martin",
          time: "1:37:42.092",
        },
        {
          driver: "Nicholas Latifi",
          car: "Williams",
          time: "1:38:14.820",
        },
      ],
    },
  ];

export function RaceResultsContextProvider(props) {
  const [raceResults, setRaceResults] = useState(DummyData);

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
