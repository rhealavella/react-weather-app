import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
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
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
            alt="clear"
          />
          6˚C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 60%</li>
            <li>Humidity: 30%</li>
            <li>Wind: 5km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
