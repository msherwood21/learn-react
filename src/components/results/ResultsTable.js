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
      <tbody></tbody>
      {props.raceResults.map((result) => (
        <tr>
          <td>{result.driver}</td>
          <td>{result.car}</td>
          <td>{result.time}</td>
        </tr>
      ))}
    </table>
  );
}

export default ResultsTable;
