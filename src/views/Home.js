import './Home.css';
import Top from '../components/Top';
import apiKey from '../apiKey';
import Table from '../components/Table';
import Form from '../components/Form';

import placeholderData from '../placeholderData.json';

function Home(props) {
  const {location, setLocation, timespan, setTimespan, tempTime, setTempTime, unit, setUnit} = props;

  const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  // let location = "Arvika";
  // let timePeriod = "last7days"; // (timespan) can also be "last30days" and "yeartodate"
  // let unit = "metric"; // can also be us to recive farenheit insted of celcius
  const include = "&include=days%2Chours"

  async function getWeather() {
    const response = await fetch(`${baseURL}${location}/${timespan}?unitGroup=${unit}${include}&key=${apiKey}&contentType=json`);
    const data = await response.json();
    return data;
  }

  return (
    <article className="homePage">
      <Top title={placeholderData.address} subtitle={placeholderData.days.length + " dagar tillbaka"} />
      <Form setLocation={setLocation} setTimespan={setTimespan} setTempTime={setTempTime} setUnit={setUnit} />
      <Table hour={tempTime} />
    </article>
  );
}

export default Home;