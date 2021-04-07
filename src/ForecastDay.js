import React from "react";
import Weathericon from "./Weathericon";

import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let max = Math.round(props.data.temp.max);
    return `${max}℃`;
  }

  function minTemperature() {
    let min = Math.round(props.data.temp.min);
    return `${min}℃`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    console.log(day);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="ForecastDay">
      <div className="Forecast-day">{day()}</div>
      <Weathericon icon={props.data.weather[0].icon} size={32} />
      <span className="WeatherForecast-max-temp">{maxTemperature()}</span>/
      <span className="WeatherForecast-min-temp">{minTemperature()}</span>
    </div>
  );
}
