import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>16, March. 2021</h1>
      <h2>
        <input type="search" placeholder="Enter a city name"></input>
        <input type="submit" value="Search"></input>
      </h2>
      <h3>New York</h3>
      <ul calssName="info">
        <li>Tuesday</li>
        <li>13:00</li>
        <li>Wind speed</li>
        <li>Humidity</li>
      </ul>
    </div>
  );
}
