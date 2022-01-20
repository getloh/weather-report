import { setQuery, setUnit} from "./inputSlice";
import { useDispatch, useSelector } from 'react-redux'
import {Weather} from '../../api/weatherapi.js'
import './input.css'
import search from '../../img/search.png'

export const Input = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const searchBar = document.getElementById("searchBox");

    
    const handleInput = (event) => {
        dispatch(setQuery(event.target.value))
    }

    const handleFetch = (event) => {
        // dispatch the fetch to API via thunk
        Weather.getWeather(state.input.query);
        document.getElementById("searchBox").style.animation = "slide 1s ease forwards";
    }

    const handleChangeUnit = (event) => {
      let unitChange = "C";
      if (state.input.unit === "C"){
        unitChange = "F";
      }
      else if (state.input.unit === "F"){
        unitChange = "K";
      }
      else if (state.input.unit === "K"){
        unitChange = "C";
      }

      dispatch(setUnit(unitChange))
    }

    return (
        <div>
          

          <div className="search-wrap" >
            <div className="search-box" id="searchBox" >
              <input className="search" placeholder="London, UK" onChange={handleInput} type='text' />
              <button className="button" onClick={handleFetch}><img className="searchimage" src={search}/></button>
              
            </div>
          </div>

          {state.main.fetched === true ? <div className="unit-buttons">
            <button className="btn" onClick={handleChangeUnit}>°{state.input.unit}</button>
          </div> : null}
          
        </div>
      );
}
    
