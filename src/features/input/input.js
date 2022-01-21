import { setQuery, setUnit} from "./inputSlice";
import { useDispatch, useSelector } from 'react-redux'
import {Weather} from '../../api/weatherapi.js'
import './input.css'
import search from '../../img/search.png'

export const Input = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    
    const handleInput = (event) => {                // handles input for the search box and sets state.input.query
        dispatch(setQuery(event.target.value))
    }

    const handleFetch = () => {
        Weather.getWeather(state.input.query);      // accesses API
        document.getElementById("searchBox").style.animation = "slide 1s ease forwards";  // Adds CSS property linking it to animation
    }

    const handleChangeUnit = (event) => {           // Dispatches and sets state.input.unit
      let unitChange = "C";
      if (state.input.unit === "C"){
        unitChange = "F";      }
      else if (state.input.unit === "F"){
        unitChange = "K";       }
      else if (state.input.unit === "K"){
        unitChange = "C";      }
      dispatch(setUnit(unitChange))
    }

    const handleKeypress = e => {                   // Allows for using 'enter' on keyboard instead of mouseclick on button
    if (e.keyCode === 13) {
      handleFetch();
    }
  };

    return (
        <div>
          

          <div className="search-wrap" >
            <div className="search-box" id="searchBox" >
              <input className="search" placeholder="London, UK" onChange={handleInput} onKeyUp={handleKeypress} type='text' />
              <button className="button" onClick={handleFetch}><img className="searchimage" src={search}/></button>
              
            </div>
          </div>
          {state.main.fetched === true ? <div className="unit-buttons">
            <button className="btn" onClick={handleChangeUnit}>°{state.input.unit}</button>
          </div> : null}
          
        </div>
      );
}
    
