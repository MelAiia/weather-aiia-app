import "./App.css";

import { useEffect, useState } from "react";
import { getCurrentWeather } from "../../services/weatherApi";

import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherSidebar from "./components/WeatherSidebar/WeatherSidebar";
import Forecast from "./components/Forecast/Forecast";
// import Footer from "./components/Footer/Footer";

function App() {
  const [city, setCity] = useState("Kyiv");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentWeather(city)
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [city]);

  if (!weather) {
    return <div className="app">Loading weather...</div>;
  }

  return (
    <div className="app theme-clear">
      <div className="weather-card">
        <Header />

        <SearchForm />

        <main className="weather-layout">
          <section className="main-column">
            <CurrentWeather weather={weather} />
          </section>

          <aside className="side-column">
            <WeatherSidebar weather={weather} />
          </aside>
        </main>

        <Forecast />

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
