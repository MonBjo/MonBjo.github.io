import './Search.css';
import Top from '../components/Top';
import apiKey from '../apiKey';
import Table from '../components/Table';
import Form from '../components/Form';
function Search(props) {
  const {location, setLocation, timespan, setTimespan, tempTime, setTempTime, unit, setUnit} = props;

  const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const include = "&include=days%2Chours"

  const weatherData = async function getWeather() {
    const response = await fetch(`${baseURL}${location}/${timespan}?unitGroup=${unit}${include}&key=${apiKey}&contentType=json`);
    console.log("response: ", response);
    const data = await response.json();
    console.log("url: ", `${baseURL}${location}/${timespan}?unitGroup=${unit}${include}&key=${apiKey}&contentType=json`);
    console.log("data: ", data);
    localStorage.setItem(data.address + data.days.at(0).datetime, data);
    return data;
  }

  return (
    <article className="searchPage">
      <Top title={location} subtitle={timespan} />
      <Form setLocation={setLocation} setTimespan={setTimespan} setTempTime={setTempTime} setUnit={setUnit} weatherData={weatherData} />
      <Table hour={tempTime} weatherData={weatherData} />
    </article>
  );
}

export default Search;