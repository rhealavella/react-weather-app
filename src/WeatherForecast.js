import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let key = "e9ebt40ac8468b03ff07a7b93c22oc3b";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${key}&units=metric`;
  axios.get(url).then(handleResponse);
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
