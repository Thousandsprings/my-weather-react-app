import React from "react";
import Weathericon from "./Weathericon";

import "./WeatherForecast.css";

export default function WeatehrForecast() {
  return (
    <div className="WeatherForecast">
      <div className="Forecast-day">Thu</div>
      <Weathericon icon="01n" size={32} />
      <span className="WeatherForecast-max-temp">19</span>/
      <span className="WeatherForecast-min-temp">10</span>
    </div>
  );
}
