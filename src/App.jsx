import "./App.css";

import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherSidebar from "./components/WeatherSidebar/WeatherSidebar";
import Forecast from "./components/Forecast/Forecast";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app theme-clear">
      <div className="weather-card">
        <Header />

        <SearchForm />

        <main className="weather-layout">
          <section className="main-column">
            <CurrentWeather />
          </section>

          <aside className="side-column">
            <WeatherSidebar />
          </aside>
        </main>

        <Forecast />

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
