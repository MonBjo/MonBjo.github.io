import './Table.css';

function Table(props) {
  const { hour, weatherData } = props;

  // TODO: CHECK IF DATA ALREADY EXISTS IN LOCALSTORAGE
  // TODO: FETCH DATA FROM LOCALSTORAGE


  async function displayData() {
    console.log(weatherData);

    return await weatherData.days.map((day, key) => {
      if(hour === "tempmax" || hour === "tempmin") {
        return (
          <tr key={key}>
            <td>{day.datetime}</td>
            <td> --- </td>
            <td>{day.hour + "°"}</td>
          </tr>
        );
      } else {
        return (
          <tr key={key}>
            <td>{day.datetime}</td>
            <td>{day.hours.at(hour).datetime.slice(0, -3)}</td>
            <td>{day.hours.at(hour).temp + "°"}</td>
          </tr>
        );
      }
    });
  }

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