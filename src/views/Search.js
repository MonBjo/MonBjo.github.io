import './Search.css';
import Top from '../components/Top';
import apiKey from '../apiKey';
import Form from '../components/Form';

import { useNavigate } from 'react-router-dom';
// import { dispatch } from 'react-redux';
// import { saveWeatherData } from '../actions/weatherAction';

function Search(props) {
  const {location, setLocation, timespan, setTimespan, tempTime, setTempTime, unit, setUnit} = props;
  const navigate = useNavigate();

  const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const include = "&include=days%2Chours"

  const weatherData = async function getWeather() {
    const response = await fetch(`${baseURL}${location}/${timespan}?unitGroup=${unit}${include}&key=${apiKey}&contentType=json`);
    console.log("response: ", response);
    const data = await response.json();
    
    // debug data \\
    console.log("url: ", `${baseURL}${location}/${timespan}?unitGroup=${unit}${include}&key=${apiKey}&contentType=json`);
    console.log("data: ", data);
    // localStorage.setItem(data.address + data.days.at(0).datetime, data);
    
    // dispatch(saveWeatherData());

    return data;
  }

  function navHome() {
    navigate('/');
  }
  return (
    <article className="searchPage">
      <Top title={location} subtitle={timespan} />
      <button className="searchPage__button button--style" onClick={navHome}> Tillbaka </button>
      <Form setLocation={setLocation} setTimespan={setTimespan} setTempTime={setTempTime} setUnit={setUnit} weatherData={weatherData} />
    </article>
  );
}

export default Search;