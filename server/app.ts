import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const port = process.env.PORT;

// Enable only in local dev, i.e., comment out in production.
app.use(cors());

const getCitiesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.GET_CITIES_API_KEY || "",
  },
};

app.get("/api/cities", async (req: Request, res: Response) => {
  const response = await fetch(
    `https://spott.p.rapidapi.com/places/autocomplete?limit=50&type=CITY`,
    getCitiesOptions
  );
  if (!response.ok)
    return res.status(500).json({
      error: response.text || response.statusText || "Failed to fetch cities.",
    });

  const cities = await response.json();
  res.send(cities);
});

app.get("/api/weather", async (req: Request, res: Response) => {
  const { lat, lon } = req.query;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.GET_WEATHER_FORECAST_API_KEY}`,
    getCitiesOptions
  );
  if (!response.ok)
    return res.status(500).json({
      error:
        response.text ||
        response.statusText ||
        "Failed to fetch weather forecast",
    });

  const weatherForecast = await response.json();
  res.send(weatherForecast);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
