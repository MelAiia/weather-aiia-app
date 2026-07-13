import "./CurrentWeather.css";

import WeatherIcon from "../WeatherIcon/WeatherIcon";

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

        <p className="description">{weather.description}</p>
      </div>

      <div className="weather-body">
        <div className="temperature-block">
          <h2 className="temperature">{weather.temperature}°</h2>

          <p className="feels-like">
            Feels like <strong>{weather.feelsLike}°</strong>
          </p>
        </div>

        <WeatherIcon code={weather.icon} size={150} />
      </div>

      <div className="weather-footer">
        <p>Updated 2 minutes ago</p>
      </div>
    </section>
  );
}

export default CurrentWeather;
