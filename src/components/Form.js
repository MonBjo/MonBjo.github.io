import './Form.css';
import { useState } from 'react';

function Form() {
  const [location, setLocation] = useState("");
  const [timespan, setTimespan] = useState("");
  const [tempTime, setTempTime] = useState("");

  function getLocation(event) { 
    setLocation(event.target.value);
    console.log(event.target);
  }

  function getTimespan(event) { 
    setTimespan(event.target.value); 
    console.log(event.target);
  }

  function getTempTime(event) {
    setTempTime(event.target.value);
    console.log(event.target);
  }

  return (
    <form className="form">
      <section className="form--section">
        <lable className="form--title" for="location">Plats</lable>
        <input 
          className="form--input"
          type="text"
          id="location"
          placeholder="Arvika"
          value={ location }
          onChange={ getLocation }
        />
      </section>

      <section className="form--section">
        <lable className="form--title">Tidsspann</lable>
        <section className="form--radio">
          <input 
            className="form--input"
            type="radio"
            name="timespan"
            id="week"
            value={ timespan }
            onChange={ getTimespan }
          />
          <lable className="form--option" for="week">Vecka</lable>  
        </section>
        
        <section className="form--radio">
          <input 
            className="form--input"
            type="radio"
            name="timespan"
            id="month"
            value={ timespan }
            onChange={ getTimespan }
          />
          <lable className="form--option" for="month">Månad</lable>  
        </section>

        <section className="form--radio">
          <input 
            className="form--input"
            type="radio"
            name="timespan"
            id="turnOfYear"
            value={ timespan }
            onChange={ getTimespan }
          />
          <lable className="form--option" for="turnOfYear">Årsskiftet</lable>  
        </section>
      </section>

      <section className="form--section">
        <lable className="form--title" for="temp">Tid för tempratur</lable>
        
        <section className="form--radio">
          <input 
            className="form--input"
            type="radio"
            name="temp"
            id="tempHour"
            value={ tempTime }
            onChange={ getTempTime }
          />
          <input 
            className="form--input"
            type="number"
            id="tempHour"
            name="temp"
            placeholder="13"
            value={ tempTime }
            onChange={ getTempTime }
          />
        </section>

        <section className="form--radioButton">
          <input 
            className="form--input"
            type="radio"
            name="temp"
            id="highestTemp"
            value={ tempTime }
            onChange={ getTempTime }
          />
          <lable className="form--option" for="highestTemp">Dagens högsta tempratur</lable>  
        </section>

        <section className="form--radioButton">
          <input 
            className="form--input"
            type="radio"
            name="temp"
            id="lowestTemp"
            value={ tempTime }
            onChange={ getTempTime }
          />
          <lable className="form--option" for="lowestTemp">Dagens lägsta tempratur</lable>
        </section>
      </section>
    </form>
  );
}

export default Form;