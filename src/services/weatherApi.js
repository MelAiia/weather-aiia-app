const API_KEY = "b8b67cb3f8cf5acd33fb9252b6fc489f";

export async function getCurrentWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,

    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),

    description: data.weather[0].description,
    icon: data.weather[0].icon,

    humidity: data.main.humidity,
    wind: Math.round(data.wind.speed),

    visibility: Math.round(data.visibility / 1000),

    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
}

export async function getCurrentWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,

    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),

    description: data.weather[0].description,
    icon: data.weather[0].icon,

    humidity: data.main.humidity,
    wind: Math.round(data.wind.speed),

    visibility: Math.round(data.visibility / 1000),

    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  };
}
