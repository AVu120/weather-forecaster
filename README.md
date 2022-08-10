# Weather Forecaster

Have a play at https://weather-forecaster-avu120.herokuapp.com/.

A user can get the weather forecast of any searchable city.
In the weather forecast, a user can see the current weather status and the weather conditions for the next 5 days.

<img width="647" alt="image" src="https://user-images.githubusercontent.com/38395166/181646571-14bbd38b-04e6-4d64-bf44-25a720df4dfc.png">

![2022-07-29 08 21 02](https://user-images.githubusercontent.com/38395166/181647071-f5fa5620-e71b-45c3-8439-da027a1f2cbe.gif)

![2022-07-29 08 19 31](https://user-images.githubusercontent.com/38395166/181646910-d365c37a-b869-4711-b6b9-e3770fb5d4b4.gif)

![2022-07-29 08 19 41](https://user-images.githubusercontent.com/38395166/181646959-858a4c34-fcf0-49db-a3b6-b11d355702d3.gif)

The app is responsively designed to be usable in mobile too. However, due to time constraints, I could not test mobile edge cases outside of the browser.

## Tech Stack Used

Frontend:

- ReactJS
- TypeScript
- Styled-Components for styling
- Native fetch API for making http requests

Backend:

- Node.js
- Express
- TypeScript
- Node-fetch for making http requests

## How to Run

In development mode:

- Add the .env file that I will send to you personally to /server/.env
- Then in the root directory, run

```
npm run client-dev
npm run server-dev
```

- Access the running app in any browser at `http://localhost:3000`

In production mode:

- Add the .env file that I will send to you personally to /server/.env. - - Then in the root directory, run

```
npm run build
npm start
```

- Access the running app in any browser at `http://localhost:5000`.

Note: please try and use Chrome, the native auto-complete input I used has some compatibility issues outside of Chrome (e.g. on Firefox, a double-click is required to show the dropdown & I haven't really tested on other browsers).

## How to Test

-- In /client, run

```
npm run test
```

Then you should see this:
![image](https://user-images.githubusercontent.com/38395166/181646672-3110abc9-2cf6-4a21-820f-834fbebd514f.png)

## APIs

- To fetch the list of cities (and corresponding values for long/lat), I use the GET autocomplete places API in https://rapidapi.com/Spott/api/spott/.
- To fetch the weather forecast for each city, I use https://openweathermap.org/forecast5.

### Where the API keys?

- Ask me for it and I'll give them to you if you want to run this app locally. On Heroku, they're stored as environment variables in the Node backend server.

Note: Any API keys accidentally committed in previous commits (coding at 3am is a bad idea) (but no longer present in the HEAD commit of any branch) have been invalidated & deleted long ago (meaning they're no longer usable).

## Feedback

### Client

I feel like the project went well. I say this because I was able to build an app that meets the acceptance criteria. I was also able to write tests that provide reasonable assurance that any functional regressions would be caught if a refactor or building new features was required.

At a high-level, seeing as there is only one page required I didn't bother creating a /pages directory or use any form of routing. I thought the acceptance criteria could be fulfilled as a single-page-application. Hence, I store all the application state and business logic in the common single parent component that is src/App.tsx.

I split the app into the following 4 sections:

- City Search Bar (let's user enter their desired city).
- Weather Status (shows that city's current weather status).
- Five Day Forecast (shows that city's weather forecast over the next 5 days).
- Day Forecast (shows in-depth forecast of the currently selected day).

Each of these sections lives in their own component as a child-component of src/App.tsx. These are essentially "presentation" components as their only job is to received props and state from their parent component and render it on the user interface. Hence, these components are minimal and contain only markup and some props/state transformation logic to format the props/state into what needs to be displayed on the screen.

I chose this pattern of centralizing all business logic + application state in src/App.tsx because it provides a simple single source of truth of what's happening in the application (business logic), what data is being used (state), and who is receiving what and showing what (child-components/sections).

Considering the acceptance-criteria and time-constraints on my end, I deemed this to be the optimal solution.

I also aimed to make my code as scalable and reusable (to reduce future duplication if other developers were to start working on this) as possible. I did that by putting anything that could be reused into corresponding folders in /src:
![image](https://user-images.githubusercontent.com/38395166/181648488-ac844a10-ab9d-4bdf-94ea-4803ee6da7d8.png)

This included:

- reusable UI components
- constants
- utility functions
- typescript interfaces & types
- services (functions that call APIs, this is useful for typing input and output of these functions and then reusing them at scale)
- mock api responses used in tests.

In regards to tests,
I thought component tests using React-Testing-Library and Mock-Service-Worker (to intercept real HTTP requests and mock the response from the server) were sufficient to ensure the acceptance-criteria is still fulfilled if future code-changes are required.

With more time and if use-cases get more complex, adding end-to-end tests & visual tests in CypressJS would be helpful. Using more sophisticated testing tools like Google Chrome's lighthouse would also be beneficial in optimizing performance and accessibility of the application as well.

Note I wrote a TODO list in comments in app.tsx to give you a overview of how I break large pieces of work into smaller ones than progress through them. I don't think I completed everything on the todo list but I think the main acceptance criteria for this task was met.

### Backend

I set up a simple NodeJS-Express server mainly to store the API keys as environment variables in the NodeJS server. Hence, securing the app by making these API keys inaccessible on the client.

Due to the simple requirements of the APIs and time constraints, I thought one app.ts file would be sufficient for the backend.
