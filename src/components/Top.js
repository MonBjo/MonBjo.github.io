import './Top.css';

function Top(props) {
  const { title, subtitle } = props;

  return (
    <header className="header">
      <h1 className="header__title">{ title }</h1>
      <p className="header__subtitle">{ subtitle }</p>
    </header>
  );
}

export default Top;