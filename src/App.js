import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Lauren Rickard and is{" "}
          <a
            href="https://github.com/laurenhrickard/react-weather-app"
            target="_blank"
          >
            {" "}
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
