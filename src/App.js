import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was desgined and created by Rhea La Vella and is{" "}
          <a href="https://github.com/rhealavella/react-weather-app">
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
