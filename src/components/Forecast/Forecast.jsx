import "./Forecast.css";
import ForecastCard from "./ForecastCard";

const forecast = [
  { day: "Sat", code: "01d", max: 29, min: 18 },
  { day: "Sun", code: "10d", max: 22, min: 17 },
  { day: "Mon", code: "03d", max: 25, min: 18 },
  { day: "Tue", code: "11d", max: 20, min: 16 },
  { day: "Wed", code: "01d", max: 27, min: 19 },
];

function Forecast() {
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
