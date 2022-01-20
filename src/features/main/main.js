
import { useDispatch, useSelector } from 'react-redux'
import './main.css'
import compass from '../../img/compass.png'
import {imgSun, imgCloud, imgRain, imgSnow, imgStorm} from '../../img/weathertypes/weathertypes'


export const Main = () => {
    // const dispatch = useDispatch();
    const state = useSelector(state => state);
    const wr = state.main.weather;      // shorthand for weatherReport, the state containing json

    const convertTemp = (number) => {
        switch(state.input.unit){
            case "C": {
                return (number - 273.15).toFixed(2) + " °C"            }
            case "F": {
                let x = (number - 273.15)* 9/5 + 32;
                return x.toFixed(2) + " °F"            }
            case "K": {
                return number.toFixed(2) + " °K";            }
            default: {
                console.log("Switch case not found?")            }
    }}

    const convertUnixTime = (number) => {   // Controls the conversion of time for sunrise/sunset
        const ms = number * 1000;
        const dateObject = new Date(ms);
        const hrDate = dateObject.toLocaleString();
        return hrDate.slice(-8);
    }

    const rotate = () => {                  // Controls the rotation of the compass
        const rotation = Number(wr.wind.deg) - 45
        // Delay required otherwise it can't find the element
        setTimeout(function() {
            document.getElementById("compass").style.transform = `rotate(${rotation}deg)`
          }, 100);
    };

    const weatherTypeImage = (status) => {
        switch(status){
            case 'Clear': {return imgSun}
            case 'Clouds': {return imgCloud}
            case 'Snow': {return imgSnow}
            default: {return null}
        }
    }

    return (
    <div>
        <div className="main-head container">
        <p>The current weather for </p>
        <h1>{state.main.weather.name}</h1>
        </div>

        <div className="main-body container">
            <div className="temp-main box">{convertTemp(wr.main.temp)}</div>
            
            <div className="temp-sub">
                <ul>Feels like {convertTemp(wr.main.feels_like)}</ul>
                <ul>Highs of {convertTemp(wr.main.temp_max)}</ul>
                <ul>Lows of {convertTemp(wr.main.temp_min)}</ul>
            </div>
            
            <div className="status">
                <div className="weather-status">
                    <img src={weatherTypeImage(wr.weather[0].main)} alt="weather"></img>
                </div>
                <div className="weather-text">
                    <ul>{wr.weather[0].main}</ul>
                    <ul>{wr.weather[0].description}</ul>
                </div>
                
                
            </div>
        </div>
        <br></br>
        <div className="lower-body container">
            <div className="humidity box">Humidity {wr.main.humidity}%</div>
            <div className="wind">
                <div className="wind-left">wind speed {wr.wind.speed}m/s <br></br>in direction {wr.wind.deg}°</div>
                <div className="wind-right"> <img className="compass" id="compass" onLoad={rotate()} src={compass}/> </div>    
            </div>
            <div className="suntime box">
                <ul>sunrise {convertUnixTime(wr.sys.sunrise)}</ul>
                <ul>sunset {convertUnixTime(wr.sys.sunset)}</ul>
            </div>
        </div>
    </div>)
}