import "./WeatherSidebar.css";

import { WiDaySunny, WiSunrise, WiSunset, WiRain } from "react-icons/wi";

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

        <strong className="info-value">05:12</strong>

        <span className="info-description">Morning begins</span>
      </div>

      <div className="info-card">
        <WiSunset className="info-icon" />

        <span className="info-label">Sunset</span>

        <strong className="info-value">20:49</strong>

        <span className="info-description">Golden hour</span>
      </div>

      <div className="info-card">
        <WiRain className="info-icon" />

        <span className="info-label">Precipitation</span>

        <strong className="info-value">20%</strong>

        <span className="info-description">Light rain expected</span>
      </div>
    </aside>
  );
}

export default WeatherSidebar;
