import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './views/Home';
import Error from './views/Error';

function App() {
  const [location, setLocation] = useState("");
  const [timespan, setTimespan] = useState("");
  const [tempTime, setTempTime] = useState("");
  const [unit, setUnit] = useState("");

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Home location={location} setLocation={setLocation} timespan={timespan} setTimespan={setTimespan} tempTime={tempTime} setTempTime={setTempTime} unit={unit} setUnit={setUnit} /> } />
        <Route path="/*" element={ <Error/> } />
      </Routes>
    </div>
  );
}

export default App;
