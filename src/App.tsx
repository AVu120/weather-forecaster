import { useState, useEffect } from "react";
import CitySearchBar from "components/CitySearchBar";
import { City } from "types/city";
import { getCities, mockedGetCitiesApiResponse } from "services/city";
import styles from "./App.module.scss";
import { getWeatherForecast } from "services/weather";
import { FilteredWeatherForecast } from "types/weather";

// ACCEPTANCE CRITERIA:
// - A user can search for any city and get the weather forecast.
// - In the search result, a user can see the current weather status and the weather for the next 5
// days.

// TODO: Write an application that gives you the weather forecast for any searchable city.
// 1. Do mobile-first design.
// 2. Add autocomplete component which onMount, calls API to get a list of searchable cities (total of 50) and stores in local state (autocomplete field populates with the loaded cities list).
// 3. When user clicks on a city, get the current weather status + forecast for the next 5 days for that city then store this in local state.
// 4. Display the weather status and forecast for the next 5 days using something like the Google Weather UI (i.e. display current temp + conditions + max/min temp + common condition of each day over next 5 days)
// 5. Write jest unit tests for any functions.
// 6. Write component test at the top-level component using React-Testing-Library and Mock-Service-Worker to mock API responses (testing both positive + negative paths).
// 7. Explain why cypress e2e test would be overkill here (e.g. reliance on 3rd api, not much we can assert on that Component test hasn't covered).
// 8. Add Cypress visual test

// City object with unneeded properties removed.
type FilteredCity = Pick<City, "name" | "coordinates">;
function App() {
  const [selectedCity, setSelectedCity] = useState<FilteredCity | undefined>(
    undefined
  );
  const [weatherForecast, setWeatherForecast] = useState<
    FilteredWeatherForecast | undefined
  >();
  const [cities, setCities] = useState<FilteredCity[]>([]);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const cityNames = cities.map((city) => city.name);

  const fetchCities = async () => {
    try {
      // const cities = await getCities();
      const cities = mockedGetCitiesApiResponse;
      const filteredCities = cities.map((city) => ({
        name: city.name,
        coordinates: city.coordinates,
      }));
      setCities(filteredCities);
    } catch (error) {
      setError("Error: failed to fetch cities.");
    }
  };

  const fetchWeatherForecast = async (latitude: number, longitude: number) => {
    try {
      const weatherForecast = await getWeatherForecast(latitude, longitude);
      const FilteredWeatherForecast = {
        ...weatherForecast,
        list: weatherForecast.list.map(
          ({ main, weather, wind, pop, dt_txt }) => ({
            temperature: main.temp,
            precipitation: pop,
            humidity: main.humidity,
            wind: wind.speed,
            description: weather[0].description,
            dateTime: dt_txt,
          })
        ),
      };
      setWeatherForecast(FilteredWeatherForecast);
    } catch (error) {
      setError("Error: failed to fetch weather forecast.");
    }
  };

  useEffect(() => {
    console.log("Mock GET CITIES API FIRED");
    fetchCities();
    // console.log(process.env.REACT_APP_GET_WEATHER_FORECAST_API_KEY);
  }, []);

  const changeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newlySelectedCity = cities.find(
      (city) => city.name === e.target.value
    );
    setSelectedCity(newlySelectedCity);
    if (newlySelectedCity) {
      const { longitude, latitude } = newlySelectedCity.coordinates;
      fetchWeatherForecast(latitude, longitude);
    }
  };

  return (
    <div className={styles.App}>
      <header className="App-header">
        <h1>Weather Forecaster</h1>
        <CitySearchBar
          value={selectedCity?.name || ""}
          onChange={changeCity}
          options={cityNames}
          label="Pick a city: "
          error={error}
        />
      </header>
    </div>
  );
}

export default App;
