import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import PokeGame from './PokeGame';

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <div className='col'>
          <h1>Pokedex</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <PokeGame />
        </div>
      </div>
    </div>
  );
}

export default App;
