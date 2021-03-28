import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weathericon.css";

export default function Weathericon() {
  return (
    <div className="Weathericon">
      <ReactAnimatedWeather
        icon={"CLEAR_DAY"}
        color={"goldenrod"}
        size={90}
        animate={true}
      />
    </div>
  );
}
