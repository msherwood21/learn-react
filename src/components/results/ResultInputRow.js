import propTypes from "prop-types";
import React from "react";

function ResultInputRow(props) {
  return (
    <tr key={props.key + "-result-input-row"}>
      <td key={props.key + "-result-input-driver-td"}>
        <input
          key={props.key + "-result-input-driver-input"}
          type="text"
          placeholder="Driver name"
          onChange={props.onDriverNameChange}
          value={props.driver}
        />
      </td>
      <td key={props.key + "-result-input-car-td"}>
        <input
          key={props.key + "-result-input-car-input"}
          type="text"
          placeholder="Driver car"
          onChange={props.onCarChange}
          value={props.car}
        />
      </td>
      <td key={props.key + "-result-input-time-td"}>
        <input
          key={props.key + "-result-input-time-input"}
          type="text"
          placeholder="Total race time"
          onChange={props.onTimeChange}
          value={props.time}
        />
      </td>
    </tr>
  );
}

ResultInputRow.propTypes = {
  key: propTypes.number,
  driver: propTypes.string,
  car: propTypes.string,
  time: propTypes.string,
  onDriverNameChange: propTypes.func,
  onCarChange: propTypes.func,
  onTimeChange: propTypes.func,
};

export default ResultInputRow;
