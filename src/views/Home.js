import './Home.css';
import { useNavigate } from 'react-router-dom';
import Top from '../components/Top';

function Home(props) {
  const {location, timespan} = props;
  const navigate = useNavigate();

  function navSearch() {
    navigate('/Search');
  }
  function navHistory() {
    navigate('/History');
  }

  function displayTop() {
    if(location === undefined || timespan === undefined) {
      return ( <Top title="Hi" subtitle="Hello there!" /> );
    }
    else {
      return ( <Top title={location} subtitle={timespan} /> );
    }
  }

  return (
    <article className="homePage">
      { displayTop() }
      <nav className="homePage__nav">
        <button className="homePage__button" onClick={ navSearch } >Make a search</button>
        <button className="homePage__button" onClick={ navHistory } >See saved searches</button>
      </nav>
    </article>
  );
}

export default Home;