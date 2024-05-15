import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon
            code="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            size={36}
            mb-4
          />{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
