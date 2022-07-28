import { useState, useEffect } from "react";
import CitySearchBar from "components/CitySearchBar";
import { City } from "types/city";
import { getCities } from "services/city";
import { getWeatherForecast } from "services/weather";
import { FilteredWeatherForecast } from "types/weather";
import LoadingSpinner from "components/LoadingSpinner";
import WeatherStatus from "components/Weather/WeatherStatus";
import FiveDayForecast from "components/Weather/WeatherForecast/FiveDayForecast";
import DayForecast from "components/Weather/WeatherForecast/DayForecast";
import styled from "styled-components";

// ACCEPTANCE CRITERIA:
// - A user can search for any city and get the weather forecast.
// - In the search result, a user can see the current weather status and the weather for the next 5
// days.

// TODO: Write an application that gives you the weather forecast for any searchable city.
// 1. Do mobile-first design. (DONE)
// 2. Add autocomplete component which onMount, calls API to get a list of searchable cities (total of 50) and stores in local state (autocomplete field populates with the loaded cities list). (DONE)
// 3. When user clicks on a city, get the current weather status + forecast for the next 5 days for that city then store this in local state. (DONE)
// 4. Display the weather status and forecast for the next 5 days using something like the Google Weather UI (i.e. display current temp + conditions + max/min temp + common condition of each day over next 5 days) (DONE)
// 5. Write jest unit tests for any functions.
// 6. Write component test at the top-level component using React-Testing-Library and Mock-Service-Worker to mock API responses (testing both positive + negative paths).
// 7. Explain why cypress e2e test would be overkill here (e.g. reliance on 3rd api, not much we can assert on that Component test hasn't covered).
// 8. Add Cypress visual test or explain why not done?

// City object with unneeded properties removed.

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 5px;
  row-gap: 1rem;
`;

const Title = styled.div`
  text-align: center;
`;
type FilteredCity = Pick<City, "name" | "coordinates">;
function App() {
  const [searchName, setSearchName] = useState("");

  const [weatherForecast, setWeatherForecast] = useState<
    FilteredWeatherForecast | undefined
  >();

  const [cities, setCities] = useState<FilteredCity[]>([]);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [isLoadingWeatherForecast, setIsLoadingWeatherForecast] =
    useState(false);
  const [error, setError] = useState<string | undefined>();
  const [selectedDate, setSelectedDate] = useState<string | undefined>();

  const cityNames = cities.map((city) => city.name);

  const fetchCities = async () => {
    try {
      setIsLoadingCities(true);
      const cities = await getCities();
      const filteredCities = cities.map((city) => ({
        name: city.name,
        coordinates: city.coordinates,
      }));
      setCities(filteredCities);
    } catch (error) {
      setError("Error: failed to fetch cities.");
    } finally {
      setIsLoadingCities(false);
    }
  };

  const fetchWeatherForecast = async (latitude: number, longitude: number) => {
    try {
      if (error) setError(undefined);
      setIsLoadingWeatherForecast(true);
      const weatherForecast = await getWeatherForecast(latitude, longitude);
      const filteredWeatherForecast = {
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
      setWeatherForecast(filteredWeatherForecast);
      setSelectedDate(filteredWeatherForecast.list[0].dateTime.slice(0, 10));
    } catch (error) {
      setError("Error: failed to fetch weather forecast.");
    } finally {
      setIsLoadingWeatherForecast(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const changeCity = () => {
    const newlySelectedCity = cities.find((city) => city.name === searchName);
    if (newlySelectedCity) {
      const { longitude, latitude } = newlySelectedCity.coordinates;
      fetchWeatherForecast(latitude, longitude);
    } else alert(`${searchName} not found.`);
  };

  const changeSearchName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchName(e.target.value);

  const changeSelectedDate = (date: string) => setSelectedDate(date);

  return (
    <Container>
      <Title>Weather Forecaster</Title>
      {isLoadingCities ? (
        <LoadingSpinner />
      ) : (
        <CitySearchBar
          value={searchName}
          onType={changeSearchName}
          onSelect={changeCity}
          options={cityNames}
          label="Pick a city: "
          error={error}
          isLoadingWeatherForecast={isLoadingWeatherForecast}
        />
      )}
      {isLoadingWeatherForecast ? (
        <LoadingSpinner />
      ) : (
        <>
          {weatherForecast && selectedDate && (
            <>
              <WeatherStatus
                weatherStatus={weatherForecast.list[0]}
                cityName={weatherForecast?.city.name}
              />
              <FiveDayForecast
                weatherForecast={weatherForecast}
                onSelectDay={changeSelectedDate}
                selectedDate={selectedDate}
              />
              <DayForecast
                weatherForecast={weatherForecast}
                selectedDate={selectedDate}
              />
            </>
          )}
        </>
      )}
    </Container>
  );
}

export default App;
