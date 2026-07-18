import "./ForecastCard.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

function ForecastCard({ day }) {
  return (
    <div className="forecast-card">
      <p className="forecast-day">{day.day.toUpperCase()}</p>

      <WeatherIcon code={day.code} size={74} />

      <div className="forecast-temp">
        <span>{day.max}°</span>

        <small>{day.min}°</small>
      </div>
    </div>
  );
}

export default ForecastCard;
