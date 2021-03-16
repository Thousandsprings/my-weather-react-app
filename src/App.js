import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/chiharu-suzuki-915130201/"
            target="_blank"
            rel="noreferrer"
          >
            Chiharu Suzuki(linkedin)
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Thousandsprings/my-weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://upbeat-hypatia-5afe7e.netlify.app/" target="_">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
