import "./ForecastCard.css";

function ForecastCard({ day }) {
  return (
    <div className="forecast-card">
      <p className="forecast-day">{day.day}</p>

      <div className="forecast-icon">{day.icon}</div>

      <div className="forecast-temp">
        <span>{day.max}°</span>

        <small>{day.min}°</small>
      </div>
    </div>
  );
}

export default ForecastCard;
