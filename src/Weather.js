import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="Top">
          <input
            type="search"
            placeholder="Enter a city name"
            className="Search"
          ></input>

          <button type="submit" className="btn">
            Search
          </button>
          <button type="submit" className="btn">
            Current Location
          </button>
        </form>
        <div className="row">
          <div className="col-md-6 justify-content-center Info">
            <h1>{weatherData.city}</h1>
            <h3>
              <ul className="Firstinfo">
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li>Current Time</li>
                <li>Local Time</li>
                <li>
                  <span>{weatherData.temperature}</span>
                  <a href="/">℃</a>/<a href="/">℉</a>
                </li>
              </ul>
            </h3>
          </div>

          <div className="col-md-6">
            <ul className="Extrainfo">
              <li>{weatherData.windspeed}km/h</li>
              <li>{weatherData.humidity}%</li>
            </ul>
            <Weathericon icon={weatherData.weatherIcon} />
            <h3 className="text-capitalize">
              {weatherData.weatherDescription}
            </h3>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `ac021ab78099db15d109c8b194975aa6`;
    let city = `${props.defaultCity}`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
