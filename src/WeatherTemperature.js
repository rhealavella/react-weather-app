import React, { useState } from "react";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = "celsius";
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit = "fahrenheit";
  }
function convertCelsius(event);
event.preventDefault(props.celsius*9)/5+32;
setUnit="celsius"

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          ˚C |{" "}
          <a href="/" onClick={convertFahrenheit}>
            ˚F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit=(props.celsius*9)/5+22
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <a href="/" onClick={convertCelsius}>
            {" "}
            ˚C
          </a>
          | ˚F
        </span>
      </div>
    );
  }
}