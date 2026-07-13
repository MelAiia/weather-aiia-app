import "./App.css";

import { useEffect, useState } from "react";
import {
  getCurrentWeather,
  getCurrentWeatherByCoords,
} from "./services/weatherApi";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherSidebar from "./components/WeatherSidebar/WeatherSidebar";
import Forecast from "./components/Forecast/Forecast";
// import Footer from "./components/Footer/Footer";

function App() {
  const [city, setCity] = useState("Kyiv");
  const [query, setQuery] = useState("Kyiv");
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
    return (
      <div className="app">
        <Loader />
      </div>
    );
  }

  function handleCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getCurrentWeatherByCoords(
          position.coords.latitude,
          position.coords.longitude,
        )
          .then((data) => {
            setWeather(data);
            setCity(data.city);
            setQuery(data.city);
          })
          .catch(console.error);
      },
      (error) => {
        console.error(error);
      },
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

        <Forecast />

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
