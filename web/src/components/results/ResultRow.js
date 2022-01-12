import propTypes from "prop-types";
import React from "react";

function ResultRow(props) {
  return (
    <tr>
      <td>{props.driver}</td>
      <td>{props.car}</td>
      <td>{props.time}</td>
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
