import "./WeatherSidebar.css";
import { WiHumidity, WiStrongWind, WiDaySunny } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";

function WeatherSidebar() {
  return (
    <aside className="weather-sidebar">
      <div className="info-card">
        <WiHumidity />
        <span>Humidity</span>
        <strong>74%</strong>
      </div>

      <div className="info-card">
        <WiStrongWind />
        <span>Wind</span>
        <strong>12 km/h</strong>
      </div>

      <div className="info-card">
        <MdVisibility />
        <span>Visibility</span>
        <strong>10 km</strong>
      </div>

      <div className="info-card">
        <WiDaySunny />
        <span>UV Index</span>
        <strong>5</strong>
      </div>
    </aside>
  );
}

export default WeatherSidebar;
