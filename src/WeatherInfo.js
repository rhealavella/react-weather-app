import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.time} />
        </li>
      </ul>
      <WeatherTemperature celsius={props.data.temperature} />
      <div className="row">
        <div className="col-6">
          <img src={props.data.icon} alt={props.data.description} />
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
