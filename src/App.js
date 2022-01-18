import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Input} from './features/input/input.js';
import {Main} from './features/main/main.js';

function App() {
  return (
    <div className="App">
      <Input/>
      <Main/>
    </div>
  );
}

export default App;
