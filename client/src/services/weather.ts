// Weather APIs go here.

import { WeatherForecast } from "types/weather";

export const getWeatherForecast = (
  lat: number,
  lon: number
): Promise<WeatherForecast> =>
  fetch(
    process.env.NODE_ENV === "development"
      ? `http://localhost:5000/api/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_GET_WEATHER_FORECAST_API_KEY}`
      : `/api/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_GET_WEATHER_FORECAST_API_KEY}`
  ).then((r) => r.json());

export {};
