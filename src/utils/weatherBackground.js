export function getBackgroundQuery(iconCode) {
  if (iconCode.startsWith("01")) {
    return "clear sky landscape";
  }

  if (iconCode.startsWith("02")) {
    return "few clouds landscape";
  }

  if (iconCode.startsWith("03") || iconCode.startsWith("04")) {
    return "cloudy landscape";
  }

  if (iconCode.startsWith("09") || iconCode.startsWith("10")) {
    return "rain landscape";
  }

  if (iconCode.startsWith("11")) {
    return "thunderstorm landscape";
  }

  if (iconCode.startsWith("13")) {
    return "snow mountains";
  }

  if (iconCode.startsWith("50")) {
    return "fog forest";
  }

  return "nature landscape";
}
