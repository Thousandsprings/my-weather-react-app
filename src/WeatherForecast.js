import React from "react";
import Weathericon from "./Weathericon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatehrForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = `ac021ab78099db15d109c8b194975aa6`;
  let lon = props.coord.lon;
  let lat = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="Forecast-day">Thu</div>
      <Weathericon icon="01n" size={32} />
      <span className="WeatherForecast-max-temp">19</span>/
      <span className="WeatherForecast-min-temp">10</span>
    </div>
  );
}
