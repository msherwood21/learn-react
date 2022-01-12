import propTypes from "prop-types";
import React from "react";

function ResultInputRow(props) {
  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Driver name"
          onChange={props.onDriverNameChange}
          value={props.driver}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Driver car"
          onChange={props.onCarChange}
          value={props.car}
        />
      </td>
      <td>
        <input
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
