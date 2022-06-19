import placeholderData from '../placeholderData.json';
import './Table.css';

function Table(props) {
  console.log(placeholderData);
  const { hour } = props;
  const displayData = placeholderData.days.map((day, key) => {
    return (
      <tr key={key}>
        <td>{day.datetime}</td>
        <td>{day.hours.at(hour).datetime.slice(0, -3)}</td>
        <td>{day.hours.at(hour).temp + "°"}</td>
      </tr>
    )
  });

  return (
    <table>
        <tr>
          <th>Datum</th>
          <th>Tid</th>
          <th>Tempratur</th>
        </tr>
        {displayData}
    </table>
  );
}

export default Table;