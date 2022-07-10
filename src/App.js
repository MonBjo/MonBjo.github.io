import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './views/Home';
import Search from './views/Search';
import Error from './views/Error';

function App() {
  const [location, setLocation] = useState("Temperaturfilt guide");
  const [timespan, setTimespan] = useState("Är du också trött på att missa dagar ibland?");
  const [tempTime, setTempTime] = useState("");
  const [unit, setUnit] = useState("");

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/search" element={ <Search location={location} setLocation={setLocation} timespan={timespan} setTimespan={setTimespan} tempTime={tempTime} setTempTime={setTempTime} unit={unit} setUnit={setUnit} /> } />
        <Route path="/*" element={ <Error/> } />
      </Routes>
    </div>
  );
}

export default App;
