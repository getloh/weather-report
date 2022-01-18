import { setQuery } from "./inputSlice";
import { useDispatch, useSelector } from 'react-redux'
import {Weather} from '../../api/weatherapi.js'

export const Input = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.input);
    
    const handleInput = (event) => {
        dispatch(setQuery(event.target.value))
    }

    const handleFetch = (event) => {
        // dispatch the fetch to API via thunk
        Weather.getWeather(state.query)
    }

  //   search(searchTerm) {
  //     Spotify.search(searchTerm).then(searchResults => {
  //     this.setState({searchResults: searchResults})
  //   })
  // }

    return (
        <div>
          
          <input className="input-field" placeholder="London, UK" onChange={handleInput} type='text' />
          <button className="button" onClick={handleFetch}>Grab the weather!</button>
        </div>
      );
}
    
