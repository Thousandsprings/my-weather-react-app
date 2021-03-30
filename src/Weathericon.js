import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weathericon.css";

export default function Weathericon(props) {
  let icon = props.icon;
  console.log(icon);
  return (
    <div className="Weathericon">
      <ReactAnimatedWeather
        icon={"CLOUDY"}
        color={"goldenrod"}
        size={90}
        animate={true}
      />
    </div>
  );
}
