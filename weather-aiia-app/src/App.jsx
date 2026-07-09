import "./App.css";

import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherSidebar from "./components/WeatherSidebar/WeatherSidebar";
import Forecast from "./components/Forecast/Forecast";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="weather-card">
        <Header />
        <SearchForm />

        <div className="weather-content">
          <CurrentWeather />
          <WeatherSidebar />
        </div>

        <Forecast />

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
