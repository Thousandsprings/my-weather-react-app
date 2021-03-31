import React from "react";
import FormattedDate from "./FormattedDate";
import Weathericon from "./Weathericon";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-md-6 justify-content-center Info">
        <h1>{props.data.city}</h1>
        <h3>
          <ul className="Firstinfo">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>Local Time</li>
            <li>
              <span>{props.data.temperature}</span>
              <a href="/">℃</a>/<a href="/">℉</a>
            </li>
          </ul>
        </h3>
        <h6>
          <ul className="Extrainfo">
            <li>Wind: {props.data.windspeed}km/h</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </h6>
      </div>

      <div className="col-md-6">
        <Weathericon icon={props.data.weatherIcon} />
        <h3 className="text-capitalize">{props.data.weatherDescription}</h3>
      </div>
    </div>
  );
}
