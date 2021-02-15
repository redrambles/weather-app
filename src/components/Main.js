import React, {useState} from 'react'; 

import axios from "axios";

import Context from "../Context";
import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import DateTime from "./DateTime";
import Tagline from "./Tagline";
import Footer from "./Footer";
import Error from "./Error";



const Main = () => {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState(); //comes to 'const weather = useState[0]', 'const setWeather = useState[1]' (array destructuring). 'weather' is state - 'setWeather' is function used to modify state.
    const [error, setError] = useState();

    const makeApiCall = async (event) => {
        event.preventDefault();
        const location = event.target.elements.city.value;
        if (!location) return setError("Please enter the name of a city."), setWeather(null);
        const API_KEY = process.env.REACT_APP_API_KEY;
        // console.log("yo", API_KEY)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;
        const request = axios.get(url);
        const response = await request;
        setWeather(response.data.main); //sets the value of the component weather state to what we get back from the api call
        setCity(response.data.name);
        setError(null);
    }

    weather && console.log(weather);
    city && console.log(city);

    return (
        <main className="main"> 
            <Header />  
            <Content>
                <Tagline />
                <DateTime />
                <Context.Provider value={{
                    apiCall: makeApiCall,
                    weather: weather,
                    city: city
                }}>
                    <WeatherSearch />
                    { weather && <WeatherData /> }
                    {error && <Error error={error}/>}
                </Context.Provider>
                <Footer />
            </Content>
        </main>
    )
};

export default Main;