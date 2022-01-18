import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {Input} from './features/input/input.js';
import {Main} from './features/main/main.js';
import {useSelector} from 'react-redux'

function App() {
  const state = useSelector(state => state)

  return (
    <div className="App">
      <Input/>
      
      {state.main.fetched === true ? <Main/> : null}
    </div>
  );
}

export default App;
