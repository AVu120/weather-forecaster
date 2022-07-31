// City APIs go here.
import { City } from "types/city";

const getCitiesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_GET_CITIES_API_KEY || "",
    "X-RapidAPI-Host": process.env.REACT_APP_GET_CITIES_API_HOST || "",
  },
};

export const getCities = (): Promise<City[]> =>
  fetch(
    `https://spott.p.rapidapi.com/places/autocomplete?limit=50&type=CITY`,
    getCitiesOptions
  ).then((r) => r.json());

export {};
