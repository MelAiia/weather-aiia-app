import "./CurrentWeather.css";
import { WiDayRain } from "react-icons/wi";

function CurrentWeather() {
  return (
    <section className="current-weather">
      <div className="weather-header">
        <h1 className="city">Kyiv, Ukraine</h1>

        <p className="date">Friday • 10 July 2026</p>

        <p className="description">Light Rain</p>
      </div>

      <div className="weather-body">
        <div className="temperature-block">
          <h2 className="temperature">23°</h2>

          <p className="feels-like">
            Feels like <strong>21°</strong>
          </p>
        </div>

        <div className="weather-icon">
          <WiDayRain />
        </div>
      </div>

      <div className="weather-footer">
        <p>Updated 2 minutes ago</p>
      </div>
    </section>
  );
}

export default CurrentWeather;
