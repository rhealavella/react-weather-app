import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-date">Thu</div>
          <img
            className="WeatherForecast-icon"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          />
          <div className="Weatherforecast-temps">
            <span className="WeatherForecast-max">26˚</span>
            <span className="WeatherForecast-min">16˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
