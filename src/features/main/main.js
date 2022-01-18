
import { useDispatch, useSelector } from 'react-redux'
import './main.css'

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

    return (
    <div>
        <div className="main-head">
        <p>The current weather for </p>
        <h1>{state.main.weather.name}</h1>
        </div>

        <div className="main-body">
            <div className="temp-main">{convertTemp(wr.main.temp)}</div>
            
            <div className="temp-sub">
                <ul>Feels like {convertTemp(wr.main.feels_like)}</ul>
                <ul>Highs of {convertTemp(wr.main.temp_max)}</ul>
                <ul>Lows of {convertTemp(wr.main.temp_min)}</ul>
            </div>
            
            <div>
                <ul>{wr.weather[0].main}</ul>
                <ul>{wr.weather[0].description}</ul>
            </div>
        </div>
        <br></br>
        <div className="lower-body">
            <div>Humidity {wr.main.humidity}%</div>
            <div>wind speed {wr.wind.speed}m/s in direction {wr.wind.deg}°</div>
            <div>
                <ul>sunrise {convertUnixTime(wr.sys.sunrise)}</ul>
                <ul>sunset {convertUnixTime(wr.sys.sunset)}</ul>
            </div>
        </div>
    </div>)
}