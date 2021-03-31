import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <li className="WeatherTemperature">
        <span>{props.celsius}</span>
        <strong>℃</strong>|
        <a href="/" onClick={showFahrenheit} className="h5">
          ℉
        </a>
      </li>
    );
  } else {
    return (
      <li className="WeatherTemperature">
        <span>{convertToFahrenheit()}</span>
        <a href="/" onClick={showCelsius} className="h5">
          ℃
        </a>
        |<strong>℉</strong>
      </li>
    );
  }
}
