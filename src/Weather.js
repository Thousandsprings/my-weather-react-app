import React from "react";
import Weathericon from "./Weathericon";

import "./Weather.css";

export default function Weather() {
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
          <h1>New York</h1>
          <h3>
            <ul className="Firstinfo">
              <li>16, March. 2021</li>
              <li>Current Time</li>
              <li>Local Time</li>
              <li>
                <span>Temperature</span>
                <a href="/">℃</a>/<a href="/">℉</a>
              </li>
            </ul>
          </h3>
        </div>

        <div className="col-md-6">
          <ul className="Extrainfo">
            <li>Wind speed</li>
            <li>Humidity</li>
          </ul>
          <Weathericon />
        </div>
      </div>
    </div>
  );
}
