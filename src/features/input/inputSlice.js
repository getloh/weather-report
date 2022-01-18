import {createSlice} from '@reduxjs/toolkit';

// actions - basic functions which return type and payload

export const setQuery = (string) => {
    return {
        type: "input/setQuery",
        payload: string
    }
}

export const setUnit = (unit) => {
    return {
        type: 'input/setUnit',
        payload: unit
    }
}

// reducer - initialState

const initialState = {
    query: 'London, UK',
    unit: "C"
}

// reducer with switch, or toolkit createSlice with options

const options = {
    name: "input",
    initialState: initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        setUnit: (state, action) => {
            state.unit = action.payload
        }
    }
}

const inputSlice = createSlice(options)

// export default
export default inputSlice.reducer