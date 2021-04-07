import React, { useState } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatehrForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return <ForecastDay data={forecast[0]} />;
  } else {
    let apiKey = `ac021ab78099db15d109c8b194975aa6`;
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
