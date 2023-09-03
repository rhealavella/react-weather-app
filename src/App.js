import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />
        <footer>
          This project was desgined and created by{" "}
          <a
            href="https://lighthearted-jalebi-377ddd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Rhea La Vella
          </a>{" "}
          and is{" "}
          <a href="https://github.com/rhealavella/react-weather-app">
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
