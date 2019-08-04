# Weather App

This is a small app that shows you weather in various locations. Actually my first start-to-finish React app.

#### Insert the API key in four places `TRE, JKL, KUO and HKI .js` files in the `const api_key` variable between the quotes
Not exactly the best approach. Will try to fix.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

Clone the repository.

First run:

### `npm install`

In the project directory, run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features not implemented

* No dropdown menu.
* Not a forecast, instead displays current weather in all cities.

## Things to Improve

* api_key should be passed to other components as props, instead of four separate key placements.
* Styling with MaterialUI. This was attempted but implemented basic inline styles instead.
* API call should be done once in a separate component with four different ids for cities.
* Weather stats are limited and not according to the task given.
* Loading screen should display while data is being fetched from the API.
* axios API call should be modernized.


