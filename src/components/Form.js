import './Form.css';
import { useState } from 'react';
import placeholderData from '../placeholderData.json';

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


  const displayData = placeholderData.days[0].hours.map((hours, key) => {
    return (
      <option>Kl {hours.datetime.slice(0, -3)}</option>
    )
  });


  return (
    <form className="form">
      <section className="form__section">
        <lable className="form__title" for="location">Plats</lable>
        <input className="form__input" type="text" id="location" placeholder="Arvika" value={ location } onChange={ getLocation } />
      </section>

      <section className="form__section">
        <lable className="form__title">Tidsspann</lable>
        <section className="form__radio">
          <input className="form__input" type="radio" name="timespan" id="week" value={ timespan } onChange={ getTimespan } />
          <lable className="form__option" for="week">Vecka</lable>  
        </section>
        
        <section className="form__radio">
          <input className="form__input" type="radio" name="timespan" id="month" value={ timespan } onChange={ getTimespan } />
          <lable className="form__option" for="month">Månad</lable>  
        </section>

        <section className="form__radio">
          <input className="form__input" type="radio" name="timespan" id="turnOfYear" value={ timespan } onChange={ getTimespan } />
          <lable className="form__option" for="turnOfYear">Årsskiftet</lable>  
        </section>
      </section>

      <section className="form__section">
        <lable className="form__title" for="temp">Tid för tempratur</lable>
        <select value={ tempTime } onChange={ getTempTime } >
          <option value="tempmax">Dagens högsta</option>
          <option value="tempmin">Dagens lägsta</option>
          {displayData}
        </select>
      </section>
    </form>
  );
}

export default Form;