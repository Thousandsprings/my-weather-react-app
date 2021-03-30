import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      weatherIcon: response.data.weather[0].main,
      weatherDescription: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = `ac021ab78099db15d109c8b194975aa6`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="Top" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city name"
            className="Search"
            onChange={handleCityChange}
          ></input>

          <button type="submit" className="btn">
            Search
          </button>
          <button type="submit" className="btn">
            Current Location
          </button>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
