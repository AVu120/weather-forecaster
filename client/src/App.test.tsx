import { setupServer } from "msw/node";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import App from "./App";
import { mockGetCitiesApiHandler } from "mocks/city";
import {
  mockGetWeatherForecastApiHandler,
  mockInstanbulWeatherForecast,
  mockShanghaiWeatherForecast,
} from "mocks/weather";

// This configures a request mocking server with the given request handlers.
const server = setupServer(...[mockGetCitiesApiHandler]);

// Establish API mocking before all tests.
beforeAll(() => server.listen());

beforeAll(() => {
  window.alert = jest.fn();
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
afterAll(() => {
  jest.resetAllMocks();
});

test("Cannot get weather forecast of city that is not in retrieved cities list", async () => {
  const pickACityLabel = "Pick a city:";
  render(<App />);

  // Assert that response to GET /cities api request has been received.
  await waitFor(() => {
    expect(screen.getByLabelText(pickACityLabel)).toBeInTheDocument();
  });

  // Can store the input element into a variable after we know it's on the page.
  const citySearchInput = screen.getByLabelText(pickACityLabel);
  const getForecastButton = screen.getByRole("button", {
    name: "Get Forecast",
  });
  fireEvent.click(getForecastButton);

  // User doesn't see any retrieved forecast info because they haven't typed a city name yet meaning the getForecast button is disabled.
  await waitFor(() => {
    expect(screen.queryByText("Current weather:")).not.toBeInTheDocument();
  });
  expect(getForecastButton).toBeDisabled();
  expect(window.alert).toHaveBeenCalledTimes(0);

  fireEvent.change(citySearchInput, { target: { value: "Shang" } });
  await waitFor(() => {
    expect(citySearchInput).toHaveDisplayValue("Shang");
  });
  fireEvent.click(getForecastButton);

  // User doesn't see any retrieved forecast info because "Shang" isn't a valid name in the retrieved cities list.
  await waitFor(() => {
    expect(screen.queryByText("Current weather:")).not.toBeInTheDocument();
  });
  expect(window.alert).toHaveBeenCalledTimes(1);
  expect(window.alert).toHaveBeenCalledWith("Shang not found.");
});

test("See error message if GET Weather Forecast API returns error", async () => {
  server.use(mockGetWeatherForecastApiHandler({ isThrowingError: true }));

  const pickACityLabel = "Pick a city:";
  render(<App />);

  // Assert that response to GET /cities api request has been received.
  await waitFor(() => {
    expect(screen.getByLabelText(pickACityLabel)).toBeInTheDocument();
  });

  const citySearchInput = screen.getByLabelText(pickACityLabel);
  const getForecastButton = screen.getByRole("button", {
    name: "Get Forecast",
  });

  fireEvent.change(citySearchInput, { target: { value: "Shanghai" } });
  await waitFor(() => {
    expect(citySearchInput).toHaveDisplayValue("Shanghai");
  });
  fireEvent.click(getForecastButton);

  // Assert that error message shows if GET weather forecast API request returns error.
  await waitFor(() => {
    expect(
      screen.getByText("Error: failed to fetch weather forecast.")
    ).toBeInTheDocument();
  });

  server.use(mockGetWeatherForecastApiHandler({ isThrowingError: true }));

  // Assert that error message disappears after a successful retry.
  fireEvent.click(getForecastButton);
  await waitFor(() => {
    expect(
      screen.queryByText("Error: failed to fetch weather forecast.")
    ).not.toBeInTheDocument();
  });
});

test("Can get weather forecast of multiple cities", async () => {
  server.use(mockGetWeatherForecastApiHandler({ isThrowingError: false }));

  const pickACityLabel = "Pick a city:";
  const { container } = render(<App />);

  // Assert that response to GET /cities api request has been received.
  await waitFor(() => {
    expect(screen.getByLabelText(pickACityLabel)).toBeInTheDocument();
  });

  const citySearchInput = screen.getByLabelText(pickACityLabel);
  const getForecastButton = screen.getByRole("button", {
    name: "Get Forecast",
  });

  fireEvent.change(citySearchInput, { target: { value: "Shanghai" } });
  await waitFor(() => {
    expect(citySearchInput).toHaveDisplayValue("Shanghai");
  });
  fireEvent.click(getForecastButton);

  await waitFor(() => {
    expect(screen.getByText("Shanghai's Current Weather:")).toBeInTheDocument();
  });

  expect(screen.getByText("5 Day Forecast:")).toBeInTheDocument();
  expect(screen.getByText("Selected Day Forecast:")).toBeInTheDocument();

  // Assert that returned data is displaying in the 'Selected Day Forecast' table
  expect(
    screen.getByText(mockShanghaiWeatherForecast.list[0].dt_txt)
  ).toBeInTheDocument();

  // Daily forecasts in the '5 Day Forecast'
  const shanghaiDaySummaries = screen.getAllByTestId("day-weather-summary");

  // Click last one
  fireEvent.click(shanghaiDaySummaries[shanghaiDaySummaries.length - 1]);

  // Assert that data for the last day shows in the 'Selected Day Forecast' table
  await waitFor(() => {
    expect(
      screen.getByText(
        mockShanghaiWeatherForecast.list[
          mockShanghaiWeatherForecast.list.length - 1
        ].dt_txt
      )
    ).toBeInTheDocument();
  });

  fireEvent.change(citySearchInput, { target: { value: "Istanbul" } });
  await waitFor(() => {
    expect(citySearchInput).toHaveDisplayValue("Istanbul");
  });
  fireEvent.click(getForecastButton);

  await waitFor(() => {
    expect(screen.getByText("Istanbul's Current Weather:")).toBeInTheDocument();
  });

  // Assert that returned data is displaying in the 'Selected Day Forecast' table
  expect(
    screen.getByText(mockInstanbulWeatherForecast.list[0].dt_txt)
  ).toBeInTheDocument();

  // Daily forecasts in the '5 Day Forecast'
  const instanbulDaySummaries = screen.getAllByTestId("day-weather-summary");

  // Click last one
  fireEvent.click(instanbulDaySummaries[instanbulDaySummaries.length - 1]);

  // Assert that data for the last day shows in the 'Selected Day Forecast' table
  await waitFor(() => {
    expect(
      screen.getByText(
        mockInstanbulWeatherForecast.list[
          mockInstanbulWeatherForecast.list.length - 1
        ].dt_txt
      )
    ).toBeInTheDocument();
  });
  expect(await axe(container)).toHaveNoViolations();
});
