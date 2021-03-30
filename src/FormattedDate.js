import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  return (
    <div>
      {day} {hour}:{minutes}
    </div>
  );
}