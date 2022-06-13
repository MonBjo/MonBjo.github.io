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
      <Top title="Hello" subtitle="and welcome" />
      <p>start slipsum code</p>
      <p>
        Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
      </p>
      <p>end slipsum code</p>
    </article>
  );
}

export default Error;