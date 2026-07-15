import "./CurrentWeather.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

import { WiThermometer, WiStrongWind, WiHumidity } from "react-icons/wi";

function CurrentWeather({ weather }) {
  if (!weather) {
    return (
      <section className="current-weather">
        <p className="loading">Loading weather...</p>
      </section>
    );
  }

  return (
    <section className="current-weather">
      <div className="weather-header">
        <h1 className="city">
          {weather.city}, {weather.country}
        </h1>

        <p className="date">Friday • 10 July 2026</p>
      </div>

      <div className="weather-content">
        <div className="weather-left">
          <h2 className="temperature">{weather.temperature}°</h2>

          <p className="description">{weather.description}</p>

          <div className="weather-stats">
            <div className="stat-item">
              <WiThermometer className="stat-icon" />
              <span>Feels Like</span>
              <strong>{weather.feelsLike}°</strong>
            </div>

            <div className="stat-item">
              <WiStrongWind className="stat-icon" />
              <span>Wind</span>
              <strong>{weather.wind} km/h</strong>
            </div>

            <div className="stat-item">
              <WiHumidity className="stat-icon" />
              <span>Humidity</span>
              <strong>{weather.humidity}%</strong>
            </div>
          </div>
        </div>

        <div className="weather-right">
          <WeatherIcon code={weather.icon} size={180} />
        </div>
      </div>

      <div className="weather-footer">
        <p>Updated just now</p>
      </div>
    </section>
  );
}

export default CurrentWeather;
