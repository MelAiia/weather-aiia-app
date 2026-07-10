import "./Forecast.css";
import { WiDaySunny, WiRain, WiCloud, WiThunderstorm } from "react-icons/wi";

const forecast = [
  { day: "Sat", icon: <WiDaySunny />, max: 29, min: 18 },
  { day: "Sun", icon: <WiRain />, max: 22, min: 17 },
  { day: "Mon", icon: <WiCloud />, max: 25, min: 18 },
  { day: "Tue", icon: <WiThunderstorm />, max: 20, min: 16 },
  { day: "Wed", icon: <WiDaySunny />, max: 27, min: 19 },
];

function Forecast() {
  return (
    <section className="forecast">
      <h3 className="forecast-title">5-Day Forecast</h3>

      <div className="forecast-grid">
        {forecast.map((item) => (
          <div className="forecast-card" key={item.day}>
            <p className="forecast-day">{item.day}</p>

            <div className="forecast-icon">{item.icon}</div>

            <div className="forecast-temp">
              <span>{item.max}°</span>
              <small>{item.min}°</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Forecast;
