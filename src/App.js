import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Error from './views/Error';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/*" element={ <Error/> } />
      </Routes>
    </div>
  );
}

export default App;
