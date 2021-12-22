import "../App.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RaceResultsContext } from "../store/RaceResultsContext";
import ResultsTable from "../components/results/ResultsTable";

function CreateResults() {
  const context = useContext(RaceResultsContext);
  const navigate = useNavigate();
  const [state, setState] = useState({ name: "", drivers: [] });

  function submitHandler() {
    context.addRace(state);
    navigate("/");
  }

  function nameHandler(event) {
    setState({ name: event.target.value, drivers: state.drivers });
  }

  function resultHandler(index, key, event) {
    let updatedResult = state.drivers[index];
    updatedResult[key] = event.target.value;

    const previousDrivers = state.drivers.slice(0, index);
    const nextDrivers = state.drivers.slice(index + 1);

    setState({ name: state.name, drivers: [...previousDrivers, updatedResult, ...nextDrivers] });
  }

  function driverCountHandler(event) {
    if (event.target.value > state.drivers.length) {
      const diff = event.target.value - state.drivers.length;
      let newRows = [];

      for (let i = 0; i < diff; i++) {
        newRows.push({
          driver: "",
          car: "",
          time: "",
        });
      }

      setState(() => {
        return { name: state.name, drivers: state.drivers.concat(newRows) };
      });
    } else {
      if (event.target.value < state.drivers.length) {
        setState({ name: state.name, drivers: state.drivers.slice(0, event.target.value) });
      }
    }
  }

  return (
    <div className="App">
      <main>
        <h1>Create Results</h1>
        <div>
          <label>Race Name: </label>
          <input type="text" required onChange={nameHandler} />
        </div>
        <div>
          <label>Number of drivers: </label>
          <input type="number" required min="0" onInput={driverCountHandler} />
        </div>
        <div>
          <p>Enter the driver standings. Order is determined by entry position.</p>
          <ResultsTable
            rowType={false}
            raceResults={state.drivers}
            onDriverNameChange={resultHandler}
            onCarChange={resultHandler}
            onTimeChange={resultHandler}
          />
        </div>
        <div>
          <button onClick={submitHandler}>Create Result</button>
        </div>
      </main>
    </div>
  );
}

export default CreateResults;
