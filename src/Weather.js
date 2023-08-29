import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      feel: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Thu Aug 23 9:00 PM</li>
        </ul>
        <h2>{Math.round(weatherData.temperature)}˚C</h2>
        <div className="row">
          <div className="col-6">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="clear"
            />
          </div>
          <div className="col-6">
            <ul className="text-capitalize">
              <li>{weatherData.description}</li>
              <li>Feels Like:{Math.round(weatherData.feel)}˚C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const key = "e9ebt40ac8468b03ff07a7b93c22oc3b";
    let query = "vancouver";
    let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}&units=metric`;
    axios.get(url).then(handleResponse);
    return "Loading...";
  }
}
