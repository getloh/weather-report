import {apikey} from "./apikey.js";
// The above is a simple file containing 'export const apikey = "X",
// with an apikey from https://openweathermap.org/

import { store } from "../app/store.js";
import {setWeather} from '../features/main/mainSlice.js'


const query = store.getState().input.query;
const remoteUrl = `api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}`

export const Weather = {
    getWeather(query) {
        console.log("trigger fetch")
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}`).then(response => {
            if(response.ok){
                console.log("response OK")
                console.log(response);
                return response.json()
            };
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            store.dispatch(setWeather(jsonResponse)); 
            console.log("response recieved")
            console.log(jsonResponse);
        });

    }
}