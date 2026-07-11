const API_KEY = "b8b67cb3f8cf5acd33fb9252b6fc489f";

export async function getCurrentWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return await response.json();
}
