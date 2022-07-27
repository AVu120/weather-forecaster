import "./App.css";

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecaster</h1>
        <h2>Pick a city</h2>
      </header>
    </div>
  );
}

export default App;
