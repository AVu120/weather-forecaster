import React from 'react';
import logo from './logo.svg';
import './App.css';

// TODO: Write an application that gives you the weather forecast for any searchable city.
// 1. Do mobile-first design.
// 2. Add autocomplete component which onMount, calls API to get a list of searchable cities (total of 50) and stores in local state (autocomplete field populates with the loaded cities list).
// 3. When user clicks on a city, get the current weather status + forecast for the next 5 days for that city then store this in local state.
// 4. Display the weather status and forecast for the next 5 days using the Google Weather UI (i.e. display current temp + conditions + max/min temp + common condition of each day over next 5 days)
// 5. Write jest unit tests for any functions.
// 6. Write component test at the top-level component using React-Testing-Library and Mock-Service-Worker to mock API responses (testing both positive + negative paths).
// 7. Explain why cypress e2e test would be overkill here (e.g. reliance on 3rd api, not much we can assert on that Component test hasn't covered).
// 8. Add Cypress visual test

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
