import { createContext, useState } from "react";

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
const RaceResultsContext = createContext({
  races: [],
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

export default RaceResultsContext;
