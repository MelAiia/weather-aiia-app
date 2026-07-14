import "./App.css";

import { useEffect, useState } from "react";

import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherSidebar from "./components/WeatherSidebar/WeatherSidebar";
import Forecast from "./components/Forecast/Forecast";

import {
  getCurrentWeather,
  getCurrentWeatherByCoords,
  getForecast,
} from "./services/weatherApi";
// import Footer from "./components/Footer/Footer";

function App() {
  const [city, setCity] = useState("Kyiv");
  const [query, setQuery] = useState("Kyiv");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    getCurrentWeather(city)
      .then((data) => {
        setWeather(data);

        getForecast(city)
          .then((forecastData) => {
            setForecast(forecastData);
          })
          .catch(console.error);
      })
      .catch((error) => {
        console.error(error);
        setWeather(null);
        setForecast([]);
        setError("City not found");
      });
  }, [city]);

  async function handleCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await getCurrentWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude,
          );

          setWeather(data);
          setCity(data.city);
          setQuery(data.city);
        } catch (error) {
          console.error(error);
        }
      },
      (error) => {
        console.error(error);
      },
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="app">
        <Loader />
      </div>
    );
  }

  return (
    <div className="app theme-clear">
      <div className="weather-card">
        <Header />

        <SearchForm
          query={query}
          setQuery={setQuery}
          setCity={setCity}
          onCurrentLocation={handleCurrentLocation}
        />

        <main className="weather-layout">
          <section className="main-column">
            <CurrentWeather weather={weather} />
          </section>

          <aside className="side-column">
            <WeatherSidebar weather={weather} />
          </aside>
        </main>

        <Forecast forecast={forecast} />

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
