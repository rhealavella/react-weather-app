import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const key = "e9ebt40ac8468b03ff07a7b93c22oc3b";
  let query = "vancouver";
  let url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}&units=metric`;
  axios.get(url).then(handleResponse);

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
      <h1>Vancouver</h1>
      <ul>
        <li>Thu Aug 23 9:00 PM</li>
      </ul>
      <h2>6˚C</h2>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            alt="clear"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Clear</li>
            <li>Precipitation: 60%</li>
            <li>Humidity: 30%</li>
            <li>Wind: 5km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
