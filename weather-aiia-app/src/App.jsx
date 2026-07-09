import "./App.css";

import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import CurrentWeather from "./components/CurrentWeather";
import WeatherSidebar from "./components/WeatherSidebar";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";

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

        <Footer />
      </div>
    </div>
  );
}

export default App;
