const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export async function getWeatherPhoto(query) {
  const url = `https://api.pexels.com/v1/search?query=${query}&per_page=1&orientation=landscape`;

  const response = await fetch(url, {
    headers: {
      Authorization: API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Pexels API Error");
  }

  const data = await response.json();

  return (
    data.photos[0]?.src?.large2x ||
    "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg"
  );
}
