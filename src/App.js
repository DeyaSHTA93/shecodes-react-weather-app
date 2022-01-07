import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <button className="btn btn-primary">Hello</button>
        <footer>
          This project was coded by{" "}
          <a href="https://sharp-yonath-39a7e2.netlify.app/" target="_blank">
            Deya Shrestha
          </a>{" "}
          and is{" "}
          <a
            href="httfooters://github.com/DeyaSHTA93/shecodes-react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
