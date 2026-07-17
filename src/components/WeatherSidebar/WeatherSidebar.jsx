import "./WeatherSidebar.css";

import { WiDaySunny, WiSunrise, WiSunset, WiRain } from "react-icons/wi";
import { MdAir } from "react-icons/md";

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

function getAirQuality(aqi) {
  switch (aqi) {
    case 1:
      return {
        text: "Excellent",
        color: "#38d39f",
      };

    case 2:
      return {
        text: "Good",
        color: "#8ddf5a",
      };

    case 3:
      return {
        text: "Moderate",
        color: "#ffd166",
      };

    case 4:
      return {
        text: "Poor",
        color: "#ff8c42",
      };

    case 5:
      return {
        text: "Very Poor",
        color: "#ff4d6d",
      };

    default:
      return {
        text: "--",
        color: "#ffffff",
      };
  }
}

function WeatherSidebar({ weather, airQuality }) {
  const air = getAirQuality(airQuality);
  return (
    <aside className="weather-sidebar">
      <div className="info-card">
        <MdAir className="info-icon" style={{ color: air.color }} />

        <span className="info-label">Air Quality</span>

        <strong className="info-value">{air.text}</strong>

        <div className="air-progress">
          <div
            className="air-progress-fill"
            style={{
              width: `${airQuality * 20}%`,
              background: air.color,
            }}
          />
        </div>

        <span className="info-description" style={{ color: air.color }}>
          AQI • {airQuality} / 5
        </span>

        <div className="air-bar">
          <div
            className="air-bar-fill"
            style={{
              width: `${airQuality * 20}%`,
              background: air.color,
            }}
          ></div>
        </div>

        <span className="info-description" style={{ color: air.color }}>
          AQI {airQuality}
        </span>
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
