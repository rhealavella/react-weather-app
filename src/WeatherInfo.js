import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.time} />
        </li>
      </ul>
      <h2>{Math.round(props.data.temperature)}˚C</h2>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="clear"
          />
        </div>
        <div className="col-6">
          <ul className="text-capitalize">
            <li>{props.data.description}</li>
            <li>Feels Like:{Math.round(props.data.feel)}˚C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
