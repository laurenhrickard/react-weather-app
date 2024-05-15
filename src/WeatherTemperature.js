import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      {" "}
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">
        <strong> °C</strong>
      </span>
    </div>
  );
}
