import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    // console.log(response.data);  object
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      windspeed: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      weatherIcon: response.data.weather[0].icon,
      weatherDescription: response.data.weather[0].description,
      coord: response.data.coord,
    });
  }

  function search() {
    let apiKey = `ac021ab78099db15d109c8b194975aa6`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleLocationSubmit(event) {
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
        <form className="Top" onSubmit={handleLocationSubmit}>
          <input
            type="search"
            placeholder="Enter a city name"
            className="Search"
            onChange={handleCityChange}
          ></input>
          <button type="submit" className="btn">
            Search
          </button>

          {/* <button
            type="submit"
            className="btn"
            onSubmit={handleCurrentLocationSubmit}
          >
            Current Location
          </button>{" "}
           */}
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
