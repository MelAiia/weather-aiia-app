export function getWeatherTheme(iconCode) {
  const isNight = iconCode.endsWith("n");

  if (iconCode.startsWith("01")) {
    return isNight ? "night-clear" : "clear";
  }

  if (iconCode.startsWith("02")) {
    return isNight ? "night-clouds" : "clouds";
  }

  if (iconCode.startsWith("03") || iconCode.startsWith("04")) {
    return "clouds";
  }

  if (iconCode.startsWith("09") || iconCode.startsWith("10")) {
    return "rain";
  }

  if (iconCode.startsWith("11")) {
    return "storm";
  }

  if (iconCode.startsWith("13")) {
    return "snow";
  }

  if (iconCode.startsWith("50")) {
    return "fog";
  }

  return "clear";
}
