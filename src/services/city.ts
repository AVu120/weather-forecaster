// City APIs go here.
import { City } from "types/city";

export const mockedGetCitiesApiResponse = [
  {
    id: "1796236",
    geonameId: 1796236,
    type: "CITY",
    name: "Shanghai",
    population: 22315474,
    elevation: 12,
    timezoneId: "Asia/Shanghai",
    country: {
      id: "CN",
      geonameId: 1814991,
      name: "China",
    },
    adminDivision1: {
      id: "CN.23",
      geonameId: 1796231,
      name: "Shanghai Municipality",
    },
    adminDivision2: {
      id: "12324204",
      geonameId: 12324204,
      name: "Shanghai Municipality",
    },
    score: 10.348606,
    coordinates: {
      latitude: 31.2222,
      longitude: 121.458,
    },
  },
  {
    id: "745044",
    geonameId: 745044,
    type: "CITY",
    name: "Istanbul",
    population: 14804116,
    elevation: 39,
    timezoneId: "Europe/Istanbul",
    country: {
      id: "TR",
      geonameId: 298795,
      name: "Turkey",
    },
    adminDivision1: {
      id: "TR.34",
      geonameId: 745042,
      name: "Istanbul",
    },
    score: 10.1703825,
    coordinates: {
      latitude: 41.0138,
      longitude: 28.9497,
    },
  },
];

const getCitiesOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_GET_CITIES_API_KEY || "",
    "X-RapidAPI-Host": process.env.REACT_APP_GET_CITIES_API_HOST || "",
  },
};

export const getCities = (): Promise<City[]> =>
  fetch(
    `https://${process.env.REACT_APP_GET_CITIES_API_HOST}/places/autocomplete?limit=50&type=CITY`,
    getCitiesOptions
  ).then((r) => r.json());

export {};
