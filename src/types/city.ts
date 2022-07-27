// City types go here.
interface Coordinates {
  latitude: number;
  longitude: number;
}

interface AdminDivision {
  id: string;
  geonameId: number;
  name: string;
}

interface Country {
  id: string;
  geonameId: number;
  name: string;
}

export interface City {
  id: string;
  geonameId: number;
  type: string;
  name: string;
  population: number;
  elevation: number;
  timezoneId: string;
  country: Country;
  adminDivision1: AdminDivision;
  adminDivision2: AdminDivision;
  score: number;
  coordinates: Coordinates;
}
