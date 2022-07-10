import './Form.css';
import placeholderData from '../placeholderData.json';

function Form(props) {
  const { setLocation, setTimespan, setTempTime, setUnit, weatherData } = props;

  function getLocation(event) { 
    setLocation(event.target.value);
    console.log(event.target.value);
  }

  function getTimespan(event) { 
    setTimespan(event.target.value); 
    console.log(event.target.value);
  }

  function getTempTime(event) {
    setTempTime(event.target.value);
    console.log(event.target.value);
  }

  function getUnit(event) {
    setUnit(event.target.value);
    console.log(event.target.value);
  }


  const displayData = placeholderData.days[0].hours.map((hours, key) => {
    return (
      <option>{hours.datetime.slice(0, -3)}</option>
    )
  });

  function submitForm(event) {
    event.preventDefault();
    weatherData();
  }


  return (
    <form className="form">
      <section className="form__section">
        <lable className="form__title" for="location">Plats</lable>
        <input className="form__input" type="text" id="location" placeholder="Arvika" onChange={ getLocation } />
      </section>

      <section className="form__section">
        <lable className="form__title">Tidsspann</lable>
        <section className="form__radio">
          <input className="form__input" type="radio" name="timespan" id="week" value="last7days" onChange={ getTimespan } />
          <lable className="form__option" for="week">Vecka</lable>  
        </section>
        
        <section className="form__radio">
          <input className="form__input" type="radio" name="timespan" id="month" value="last30days" onChange={ getTimespan } />
          <lable className="form__option" for="month">Månad</lable>  
        </section>

        <section className="form__radio">
          <input className="form__input" type="radio" name="timespan" id="turnOfYear" value="yeartodate" onChange={ getTimespan } />
          <lable className="form__option" for="turnOfYear">Årsskiftet</lable>  
        </section>
      </section>

      <section className="form__section">
        <section className="form__radio">
          <input className="form__input" type="radio" name="unit" id="Celcius" value="metric" onChange={ getUnit } />
          <lable className="form__option" for="Celcius">Celcius</lable>  
        </section>
        
        <section className="form__radio">
          <input className="form__input" type="radio" name="unit" id="Farenheit" value="farenheit" onChange={ getUnit } />
          <lable className="form__option" for="Farenheit">Farenheit</lable>  
        </section>
      </section>

      <section className="form__section">
        <lable className="form__title" for="temp">Tid för tempratur</lable>
        <select onChange={ getTempTime } >
          <option value="tempmax">Dagens högsta</option>
          <option value="tempmin">Dagens lägsta</option>
          {displayData}
        </select>
      </section>
      <button className="button--style" onClick={submitForm}>Visa temperaturer!</button>
    </form>
  );
}

export default Form;