import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  return (
    <div>
      <h2>Hi, the location latitude is {props.lat} </h2>
    </div>
  );
};

export default SeasonDisplay;
