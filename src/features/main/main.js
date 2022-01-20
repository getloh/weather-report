
import { useDispatch, useSelector } from 'react-redux'
import './main.css'
import compass from '../../img/compass.png'

export const Main = () => {
    // const dispatch = useDispatch();
    const state = useSelector(state => state);
    const wr = state.main.weather;      // shorthand for weatherReport, the state containing json

    const convertTemp = (number) => {
        switch(state.input.unit){
            case "C": {
                return (number - 273.15).toFixed(2) + " °C"
            }
            case "F": {
                let x = (number - 273.15)* 9/5 + 32;
                return x.toFixed(2) + " °F"
            }
            case "K": {
                return number.toFixed(2) + " °K";
            }
            default: {
                console.log("Switch case not found?")
            }
        }
    }

    const convertUnixTime = (number) => {   
        const ms = number * 1000;
        const dateObject = new Date(ms);
        const hrDate = dateObject.toLocaleString();
        return hrDate.slice(-8);
    }

    const rotate = () => {                  // Controls the rotation of the compass
        const rotation = Number(wr.wind.deg) - 45
        // 
        setTimeout(function() {
            //your code to be executed after 1 second
            document.getElementById("compass").style.transform = `rotate(${rotation}deg)`
          }, 100);
    };

    return (
    <div>
        <div className="main-head">
        <p>The current weather for </p>
        <h1>{state.main.weather.name}</h1>
        </div>

        <div className="main-body">
            <div className="temp-main box">{convertTemp(wr.main.temp)}</div>
            
            <div className="temp-sub">
                <ul>Feels like {convertTemp(wr.main.feels_like)}</ul>
                <ul>Highs of {convertTemp(wr.main.temp_max)}</ul>
                <ul>Lows of {convertTemp(wr.main.temp_min)}</ul>
            </div>
            
            <div className="status">
                <ul>{wr.weather[0].main}</ul>
                <ul>{wr.weather[0].description}</ul>
            </div>
        </div>
        <br></br>
        <div className="lower-body">
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