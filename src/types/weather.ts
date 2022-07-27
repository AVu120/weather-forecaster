// Weather types go here.

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Sys {
  pod: string;
}

interface ListItem {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

interface Coord {
  lat: number;
  lon: number;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface WeatherForecast {
  cod: string;
  message: number;
  cnt: number;
  list: ListItem[];
  city: City;
}

export interface FilteredListItem {
  temperature: number;
  precipitation: number;
  humidity: number;
  wind: number;
  description: string;
  dateTime: string;
}

export interface FilteredWeatherForecast extends Omit<WeatherForecast, "list"> {
  list: FilteredListItem[];
}
