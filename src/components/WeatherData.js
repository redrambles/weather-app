import React, {useContext} from "react";

import Context from "../Context"; 

const WeatherData = ()=> {

    const {weather, city} = useContext(Context);
    const {temp, pressure, humidity} = weather;
    // console.log('yo', weather);
    // for (let data in weather){
    //     console.log(data, weather[data]);
    // }

    return (
    <div className="weather-data">
        <p className="weather__tagline">Weather forecast for <span className="weather-data__city">{city}</span></p>
        <div className="weather-data__box">
            <span className="weather-data__property">
            <p className="weather-data__title">Temperature</p>
            <p className="weather-data__value">{temp}˚C</p>
            </span>
            <span className="weather-data__property">
            <p className="weather-data__title">Humidity</p>
            <p className="weather-data__value">{humidity}</p>
            </span>
            <span className="weather-data__property">
            <p className="weather-data__title">Pressure</p>
            <p className="weather-data__value">{pressure}</p>
            </span>
        </div>
    </div>
    )
}

export default WeatherData;