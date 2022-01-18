




import {createSlice} from '@reduxjs/toolkit';

// actions - basic functions which return type and payload

export const setWeather = (json) => {
    return {
        type: 'main/setWeather',
        payload: json
    }
}

// reducer - initialState

const initialState = {
    weather: {}
}

// reducer with switch, or toolkit createSlice with options

const options = {
    name: "main",
    initialState: initialState,
    reducers: {
        setWeather: (state, action) => {
            state.weather = action.payload
        },
    }
}

const mainSlice = createSlice(options)





// export default
export default mainSlice.reducer