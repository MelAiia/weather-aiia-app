const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

function transformCurrentWeather(data) {
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

    precipitation: data.rain?.["1h"] ?? data.rain?.["3h"] ?? 0,

    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,

    lat: data.coord.lat,
    lon: data.coord.lon,
  };
}

function transformForecast(data) {
  return data.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .map((item) => ({
      day: new Date(item.dt * 1000).toLocaleDateString("en-US", {
        weekday: "short",
      }),

      max: Math.round(item.main.temp_max),

      min: Math.round(item.main.temp_min),

      code: item.weather[0].icon,
    }));
}

export async function getCurrentWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();

  return transformCurrentWeather(data);
}

export async function getCurrentWeatherByCoords(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();

  return transformCurrentWeather(data);
}

export async function getForecast(city) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Forecast API Error: ${response.status}`);
  }

  const data = await response.json();

  return transformForecast(data);
}

export async function getAirQuality(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Air Quality API Error");
  }

  const data = await response.json();

  return data.list[0].main.aqi;
}

export async function getUvIndex(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}` +
    `&longitude=${lon}` +
    `&current=uv_index`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("UV API Error");
  }

  const data = await response.json();

  return data.current.uv_index;
}
