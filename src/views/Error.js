import './Error.css';
import { useNavigate } from 'react-router-dom';
import Top from '../components/Top';

function Error() {
  const navigate = useNavigate();

  function navHome() {
    navigate('/');
  }

  return (
    <article className="errorPage">
      <Top title="404" subtitle="What are you looking for?" />
      <img src="https://i.imgur.com/VsX07cZ.gif" alt="le gif" />
      <button onClick={ navHome } className="button button--error" >Go home</button>
    </article>
  );
}

export default Error;