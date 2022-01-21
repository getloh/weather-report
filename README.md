# Weather Report
A demo and practice project for various React/Redux features

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Usage](#usage)

## General Information
While I had worked with the spotify API previously, this is my first project working with an API without any form of guide outside of official documentation.

Data comes courtesy of https://openweathermap.org/

It's mostly intended as proof of concept, and there is plenty of further work which could be done to improve the project, both in terms of functionality and styling.

## Technologies Used
- Javascript, CSS, JSX / HTML
- React (and Create-React-App)
- Redux (and Redux Toolkit)
- openweathermap.org API


## Features

### Live data fetch from API
weather\src\api\weatherapi.js

The app uses the search for query and then grabs the relevant data from the API and stores it in state for use elsewhere in the app.

### Unit conversion button
weather\src\features\main\main.js - convertTemp()

The API gives temperature information in raw form of degrees Kelvin, great if you have a degree in chemistry/physics but uncommon for the rest of us. Clicking the button will live switch all temperatures on page to Celsius/Farenheit/Kelvin

### Sunrise/Sunset
weather\src\features\main\main.js - convertUnixTime()

Similar to above, the API provides sunrise and sunset in Unix time, we've converted this to normal 24h time using a function.

### UI animation and hiding
weather\src\App.js / weather\src\features\main\main.js - conditionals
weather\src\features\input\input.css - @keyframes slide
weather\src\features\input\input.js - handleFetch()

Fairly minor, but spent some time playing around with simple CSS animations as well as conditional statements for hiding JSX elements based on current state.

### Dynamic graphics
weather\src\features\main\main.js - rotate() + weatherTypeImage()

Spent more time than i'd like to admit playing around with Js and CSS to try and dynamically position the compass for which direction the wind is blowing, eventually managed to get it working using style:transform:rotate attached via Js function.

Similarly there is some Js to select the correct picture for the forecast based on the information present in state from the API.

## Screenshots
gifV - https://gfycat.com/LimitedEnchantingBetafish
![https://meng.s-ul.eu/vhqJV65R](https://meng.s-ul.eu/vhqJV65R)


## Usage
This project will not work without an API key, this data has been omitted from github for obvious reasons, You can sign up to https://openweathermap.org/ and get a free API key, then place into a file @ weather\src\api\apikey.js - "export const apikey = 'apiStringHere'" .
With all the files on your computer, should be able to run it via npm start (maybe npm install first)



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

