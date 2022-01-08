import "../App.css";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RaceResultsContext } from "../store/RaceResultsContext";
import ResultsTable from "../components/results/ResultsTable";

function CreateResults() {
  const raceResults = useContext(RaceResultsContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [drivers, setDrivers] = useState([]);

  const submitHandler = () => {
    raceResults.addRace({ name, drivers });
    navigate("/");
  };

  const resultHandler = (index, key, event) => {
    const previousDrivers = drivers.slice(0, index);
    const updatedResult = { ...drivers[index], [key]: event.target.value };
    const nextDrivers = drivers.slice(index + 1);
    setDrivers([...previousDrivers, updatedResult, ...nextDrivers]);
  };

  const driverCountHandler = ({ target: { value: driverCount } }) => {
    const diff = driverCount - drivers.length;
    if (diff === 0) return;
    if (diff < 0) return setDrivers(drivers.slice(0, driverCount));

    const newDriver = { driver: "", car: "", time: "" };
    const newRows = new Array(diff).fill(newDriver);
    setDrivers([...drivers, ...newRows]);
  };

  return (
    <div className="App">
      <main>
        <h1>Create Results</h1>
        <div>
          <label>Race Name: </label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Number of drivers: </label>
          <input type="number" min="0" onInput={driverCountHandler} />
        </div>
        <div>
          <p>
            Enter the driver standings. Order is determined by entry position.
          </p>
          <ResultsTable
            rowType={false}
            raceResults={drivers}
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
