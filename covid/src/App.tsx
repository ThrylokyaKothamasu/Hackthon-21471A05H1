import React from 'react';
import './App.css';
import { Affected } from './Affected/Affected';
import { Vaccinated } from './Vaccinated/Vaccinated';
import { Neighbour } from './Neighbour/NeighCountry';
function App() {
  return (
    <div className="App">
      <Affected />
      <Vaccinated/>
      <Neighbour/>
    </div>
  );
}

export default App;