import propTypes from "prop-types";
import React from "react";

function ResultRow(props) {
  return (
    <tr key={props.key + "-result-row"}>
      <td key={props.key + "-result-driver"}>{props.driver}</td>
      <td key={props.key + "-result-car"}>{props.car}</td>
      <td key={props.key + "-result-time"}>{props.time}</td>
    </tr>
  );
}

ResultRow.propTypes = {
  key: propTypes.number,
  driver: propTypes.string,
  car: propTypes.string,
  time: propTypes.string,
};

export default ResultRow;
