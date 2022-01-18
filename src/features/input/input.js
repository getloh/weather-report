import { setQuery, setUnit} from "./inputSlice";
import { useDispatch, useSelector } from 'react-redux'
import {Weather} from '../../api/weatherapi.js'

export const Input = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    
    const handleInput = (event) => {
        dispatch(setQuery(event.target.value))
    }

    const handleFetch = (event) => {
        // dispatch the fetch to API via thunk
        Weather.getWeather(state.input.query)
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
          {state.main.fetched === true ? <div className="unit-buttons">
            <button onClick={handleChangeUnit}>°{state.input.unit}</button>
          </div> : null}

          <div>
          <input className="input-field" placeholder="London, UK" onChange={handleInput} type='text' />
          <button className="button" onClick={handleFetch}>Grab the weather!</button>
          </div>
        </div>
      );
}
    
