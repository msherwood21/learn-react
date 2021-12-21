import logo from "../logo.svg";
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>View Results</p>
        <div>
          <label>Race: {context.races[params.id].name} Grand Prix</label>
        </div>
        <div>
          <label>Number of Drivers: {context.races[params.id].drivers.length}</label>
        </div>
        <ResultsTable raceResults={context.races[params.id].drivers} />
      </header>
    </div>
  );
}

export default ViewResults;
