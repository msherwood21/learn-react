import propTypes from "prop-types";
import React from "react";
import ResultRow from "./ResultRow";
import ResultInputRow from "./ResultInputRow";

function ResultsTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Driver</th>
          <th>Car</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.rowType &&
          props.raceResults.map((result, index) => (
            <ResultRow key={index} driver={result.driver} car={result.car} time={result.time} />
          ))}
        {!props.rowType &&
          props.raceResults.map((result, index) => (
            <ResultInputRow
              key={index}
              driver={result.driver}
              car={result.car}
              time={result.time}
              onDriverNameChange={(event) => props.onDriverNameChange(index, "driver", event)}
              onCarChange={(event) => props.onCarChange(index, "car", event)}
              onTimeChange={(event) => props.onTimeChange(index, "time", event)}
            />
          ))}
      </tbody>
    </table>
  );
}

ResultsTable.propTypes = {
  rowType: propTypes.bool,
  raceResults: propTypes.arrayOf(propTypes.object),
  onDriverNameChange: propTypes.func,
  onCarChange: propTypes.func,
  onTimeChange: propTypes.func,
};

export default ResultsTable;
