// Weather APIs go here.

import { WeatherForecast } from "types/weather";

export const getWeatherForecast = (
  lat: number,
  lon: number
): Promise<WeatherForecast> =>
  fetch(
    process.env.NODE_ENV === "development"
      ? `http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`
      : `/api/weather?lat=${lat}&lon=${lon}`
  ).then((r) => r.json());

export {};
