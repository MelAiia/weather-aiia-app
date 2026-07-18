import "./Forecast.css";
import ForecastCard from "./ForecastCard";
import { MdOutlineCalendarToday } from "react-icons/md";

function Forecast({ forecast }) {
  return (
    <section className="forecast">
      <h3 className="forecast-title">
        <MdOutlineCalendarToday />
        <span>5-Day Forecast</span>
      </h3>

      <div className="forecast-grid">
        {forecast.map((day) => (
          <ForecastCard key={day.day} day={day} />
        ))}
      </div>
    </section>
  );
}

export default Forecast;
