import "./CurrentWeather.css";
import { WiDayRain } from "react-icons/wi";

function CurrentWeather() {
  return (
    <section className="current-weather">
      <div className="weather-top">
        <h1 className="city">Kyiv, Ukraine</h1>

        <p className="date">Friday • 10 July 2026</p>

        <p className="description">Light Rain</p>
      </div>

      <div className="weather-icon">
        <WiDayRain />
      </div>

      <div className="weather-bottom">
        <h2 className="temperature">23°</h2>

        <p className="feels-like">
          Feels like <strong>21°</strong>
        </p>
      </div>
    </section>
  );
}

export default CurrentWeather;
