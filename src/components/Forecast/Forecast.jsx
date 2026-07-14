import "./Forecast.css";
import ForecastCard from "./ForecastCard";

function Forecast({ forecast }) {
  return (
    <section className="forecast">
      <h3 className="forecast-title">5-Day Forecast</h3>

      <div className="forecast-grid">
        {forecast.map((day) => (
          <ForecastCard key={day.day} day={day} />
        ))}
      </div>
    </section>
  );
}

export default Forecast;
