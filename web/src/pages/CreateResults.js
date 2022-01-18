import "../App.css";
import createResultsStyle from "./CreateResults.module.css";
import propTypes from "prop-types";
import React from "react";
import ResultsTable from "../components/results/ResultsTable";

class CreateResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.initialResults.name,
      driverCount: props.driverCount,
      drivers: props.initialResults.drivers,
      committed: props.committed,
    };
  }

  submitHandler = () => {
    try {
      const header = new Headers({ "Content-Type": "application/json" });
      const json = JSON.stringify({ name: this.state.name, drivers: this.state.drivers });

      fetch("http://localhost:3001/race", { method: "POST", headers: header, body: json });

      this.setState({ name: "", driverCount: 0, drivers: [], committed: true });
      setTimeout(() => {
        this.setState({ committed: false });
      }, 5000);
    } catch (err) {
      console.log(`fetch error: ${err}`);
    }
  };

  resultHandler = (index, key, event) => {
    const previousDrivers = this.state.drivers.slice(0, index);
    const updatedResult = { ...this.state.drivers[index], [key]: event.target.value };
    const nextDrivers = this.state.drivers.slice(index + 1);

    this.setState({
      drivers: [...previousDrivers, updatedResult, ...nextDrivers],
    });
  };

  driverCountHandler = ({ target: { value: driverCount } }) => {
    const diff = driverCount - this.state.drivers.length;
    if (diff === 0) return;
    if (diff < 0)
      return this.setState({
        driverCount: driverCount,
        drivers: this.state.drivers.slice(0, driverCount),
      });

    const newDriver = { driver: "", car: "", time: "" };
    const newRows = new Array(diff).fill(newDriver);

    this.setState({ drivers: [...this.state.drivers, ...newRows] }, () => {
      this.setState({ driverCount: driverCount });
    });
  };

  render() {
    return (
      <div className="App">
        <main>
          <h1>Create Results</h1>
          {this.state.committed && (
            <h2 className={createResultsStyle.submitted}>Results committed!</h2>
          )}
          <div>
            <label>Race Name: </label>
            <input
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div>
            <label>Number of drivers: </label>
            <input
              type="number"
              min="0"
              value={this.state.driverCount}
              onInput={this.driverCountHandler}
            />
          </div>
          <div>
            <p>Enter the driver standings. Order is determined by entry position.</p>
            <ResultsTable
              rowType={false}
              raceResults={this.state.drivers}
              onDriverNameChange={this.resultHandler}
              onCarChange={this.resultHandler}
              onTimeChange={this.resultHandler}
            />
          </div>
          <div>
            <button onClick={this.submitHandler}>Create Result</button>
          </div>
        </main>
      </div>
    );
  }
}

CreateResults.propTypes = {
  initialResults: propTypes.object.isRequired,
};

CreateResults.defaultProps = {
  initialResults: {
    name: "",
    drivers: [],
  },
  driverCount: 0,
  committed: false,
};

export default CreateResults;
