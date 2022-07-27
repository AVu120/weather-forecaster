// Weather APIs go here.

import { WeatherForecast } from "types/weather";

export const getWeatherForecast = (
  lat: number,
  lon: number
): Promise<WeatherForecast> =>
  fetch(
    `https://${process.env.REACT_APP_GET_WEATHER_FORECAST_API_HOST}/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_GET_WEATHER_FORECAST_API_KEY}`
  ).then((r) => r.json());

export {};
