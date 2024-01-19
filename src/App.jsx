import React from 'react';
import Home from './screen/Home';
import Game from './screen/Game';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<Home />} />
      <Route path="/Game" element={<Game />} />
    </Routes>
  );
}

export default App;
