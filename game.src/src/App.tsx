import React from 'react';
import logo from './logo.svg';
import './App.css';

import CardGrid from './molecules/CardGrid';

const cards = Array.from(Array(51).keys());

function App() {
  return (
    <div className="App">
      <CardGrid data={cards} />
    </div>
  );
}

export default App;
