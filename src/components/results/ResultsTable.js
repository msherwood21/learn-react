import ResultRow from "./ResultRow";

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
        {props.raceResults.map((result) => (
          <ResultRow driver={result.driver} car={result.car} time={result.time} />
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;
