import "./WeatherSidebar.css";

import { WiDaySunny, WiSunrise, WiSunset, WiRain } from "react-icons/wi";

function formatTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getPrecipitationDescription(value) {
  if (value === 0) return "No rain";

  if (value < 1) return "Very light rain";

  if (value < 3) return "Light rain";

  if (value < 8) return "Moderate rain";

  return "Heavy rain";
}

function WeatherSidebar({ weather }) {
  return (
    <aside className="weather-sidebar">
      <div className="info-card">
        <WiDaySunny className="info-icon" />

        <span className="info-label">UV Index</span>

        <strong className="info-value">5</strong>

        <span className="info-description">Moderate</span>
      </div>

      <div className="info-card">
        <WiSunrise className="info-icon" />

        <span className="info-label">Sunrise</span>

        <strong className="info-value">{formatTime(weather.sunrise)}</strong>

        <span className="info-description">First Light</span>
      </div>

      <div className="info-card">
        <WiSunset className="info-icon" />

        <span className="info-label">Sunset</span>

        <strong className="info-value">{formatTime(weather.sunset)}</strong>

        <span className="info-description">Golden hour</span>
      </div>

      <div className="info-card">
        <WiRain className="info-icon" />

        <span className="info-label">Precipitation</span>

        <strong className="info-value"> {weather.precipitation} mm </strong>

        <span className="info-description">
          {getPrecipitationDescription(weather.precipitation)}
        </span>
      </div>
    </aside>
  );
}

export default WeatherSidebar;
