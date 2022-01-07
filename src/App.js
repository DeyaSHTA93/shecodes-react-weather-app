import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://sharp-yonath-39a7e2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Deya Shrestha
          </a>{" "}
          and is{" "}
          <a
            href="httfooters://github.com/DeyaSHTA93/shecodes-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
