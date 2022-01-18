




import {createSlice} from '@reduxjs/toolkit';

// actions - basic functions which return type and payload

export const setWeather = (json) => {
    return {
        type: 'main/setWeather',
        payload: json
    }
};

export const setFetched = (bool) => {
    return {
        type: 'main/setFetched',
        payload: bool
    }
};



// reducer - initialState

const initialState = {
    weather: {},
    fetched: false,

    
}

// reducer with switch, or toolkit createSlice with options

const options = {
    name: "main",
    initialState: initialState,
    reducers: {
        setWeather: (state, action) => {
            state.weather = action.payload
        },
        setFetched: (state, action) => {
            state.fetched = action.payload
        },
        
    }
}

const mainSlice = createSlice(options)





// export default
export default mainSlice.reducer