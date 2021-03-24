import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container-md">
      <div className="col-md-6">
        <h1>New York</h1>
        <h2>16, March. 2021</h2>
        <form>
          <div className="row">
            <div className="col-md-6">
              <input type="search" placeholder="Enter a city name"></input>
            </div>
            <div className="col-md-3">
              <input type="submit" value="Search"></input>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <ul calssName="info">
          <li>Tuesday</li>
          <li>13:00</li>
          <li>Wind speed</li>
          <li>Humidity</li>
        </ul>
      </div>
    </div>
  );
}
