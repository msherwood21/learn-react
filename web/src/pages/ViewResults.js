import "../App.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultsTable from "../components/results/ResultsTable";

function ViewResults() {
  const params = useParams();
  const [race, setRace] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/race/" + params.id);
        const json = await response.json();

        setRace(json);
      } catch (err) {
        if (err instanceof SyntaxError) {
          console.warn(`Server does not have information for race (${params.id})`);
        } else {
          console.warn(`fetch error: ${err}`);
        }
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div className="App">
      <main>
        <h1>View Results</h1>
        {Object.keys(race).length === 0 && <p>Oops! I don't have information for this race.</p>}
        {Object.keys(race).length !== 0 && (
          <div>
            <div>
              <h1>{race.name}</h1>
              <h2>Number of Drivers: {race.drivers.length}</h2>
            </div>
            <ResultsTable rowType={true} raceResults={race.drivers} />
          </div>
        )}
      </main>
    </div>
  );
}

export default ViewResults;
