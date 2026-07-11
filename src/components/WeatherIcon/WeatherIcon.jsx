import "./WeatherIcon.css";

import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayRain,
  WiNightAltRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";

function WeatherIcon({ code, size = 120 }) {
  const weatherIcons = {
    "01d": <WiDaySunny size={size} />,
    "01n": <WiNightClear size={size} />,

    "02d": <WiDayCloudy size={size} />,
    "02n": <WiNightAltCloudy size={size} />,

    "03d": <WiCloud size={size} />,
    "03n": <WiCloud size={size} />,

    "04d": <WiCloudy size={size} />,
    "04n": <WiCloudy size={size} />,

    "09d": <WiRain size={size} />,
    "09n": <WiRain size={size} />,

    "10d": <WiDayRain size={size} />,
    "10n": <WiNightAltRain size={size} />,

    "11d": <WiThunderstorm size={size} />,
    "11n": <WiThunderstorm size={size} />,

    "13d": <WiSnow size={size} />,
    "13n": <WiSnow size={size} />,

    "50d": <WiFog size={size} />,
    "50n": <WiFog size={size} />,
  };

  return (
    <div className="weather-icon">
      {weatherIcons[code] || <WiDaySunny size={size} />}
    </div>
  );
}

export default WeatherIcon;
