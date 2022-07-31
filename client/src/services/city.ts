// City APIs go here.
import { City } from "types/city";

export const getCities = (): Promise<City[]> =>
  fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api/cities"
      : `/api/cities`
  ).then((r) => r.json());

export {};
