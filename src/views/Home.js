import './Home.css';
import Top from '../components/Top';
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const {location, timespan} = props;
  const navigate = useNavigate();

  function navSearch() {
    navigate('/Search');
  }
  function navHistory() {
    navigate('/History');
  }

  return (
    <article className="homePage">
      <Top title={location} subtitle={timespan} />

      <nav className="homePage__nav">
        <button className="homePage__button button--style" onClick={ navSearch } >Gör en sökning</button>
        <button className="homePage__button button--style" onClick={ navHistory } >Se sparade sökningar</button>
      </nav>
      
      <article className="homePage__info">
        <h3>Hejsan!</h3>
        <p>En temperaturfilt är en filt som skapas genom att man gör ett varv eller en ruta varje dag under ett helt år. Varvet eller rutans färg bestäms för varje garnsort utifrån dagens utomhustemperatur. </p>
        <p>Den färdiga filten som vanligtvis sträcker sig över ett helt år visar hur temperaturen fördelat sig över året.</p>
        <p>Jag som har skapat denna sidan heter Monica och läser till frontend utvecklare, detta är mitt sommarprojekt, 2022. Enjoy!</p>
      </article>
    </article>
  );
}

export default Home;