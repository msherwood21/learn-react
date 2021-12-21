import "../App.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ResultsTable from "../components/results/ResultsTable";
import RaceResultsContext from "../store/RaceResultsContext";

function ViewResults() {
  const context = useContext(RaceResultsContext);
  const params = useParams();

  return (
    <div className="App">
      <header className="App-header">
        <p>View Results</p>
      </header>
      <main>
        <div>
          <h1>{context.races[params.id].name} Grand Prix</h1>
        </div>
        <div>
          <h2>Number of Drivers: {context.races[params.id].drivers.length}</h2>
        </div>
        <ResultsTable raceResults={context.races[params.id].drivers} />
      </main>
    </div>
  );
}

export default ViewResults;
