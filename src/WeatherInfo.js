import React from "react";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";
import WeatehrTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  // console.log(props.data.date); show the date
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-md-6 justify-content-center Info">
          <h1>{props.data.city}</h1>

          <ul className="Firstinfo h3">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            {/* <li>Local Time</li> */}
            <WeatehrTemperature celsius={props.data.temperature} />
          </ul>

          <ul className="Extrainfo h6">
            <li>Wind: {props.data.windspeed}km/h</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>

        <div className="col-md-6">
          <div>
            <div className="CurrentWeatherIcon">
              <Weathericon icon={props.data.weatherIcon} size={90} />
            </div>
            <h3 className="text-capitalize">{props.data.weatherDescription}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
