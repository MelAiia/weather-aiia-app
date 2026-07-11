import "./ForecastCard.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";

function ForecastCard({ day }) {
  return (
    <div className="forecast-card">
      <p className="forecast-day">{day.day}</p>

      <WeatherIcon code={day.code} size={60} />

      <div className="forecast-temp">
        <span>{day.max}°</span>

        <small>{day.min}°</small>
      </div>
    </div>
  );
}

export default ForecastCard;
