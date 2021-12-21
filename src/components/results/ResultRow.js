function ResultRow(props) {
  return (
    <tr>
      <td>{props.driver}</td>
      <td>{props.car}</td>
      <td>{props.time}</td>
    </tr>
  );
}

export default ResultRow;
