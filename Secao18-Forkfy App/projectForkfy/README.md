# INSTRUCTIONS

## parcel

## pollyfill to ES6 base

npm i core-js regenerator-runtime
import on top of file

## config file

All the variables and constants that should be reused
the code
-- url to fetch
-- timeout parameter

## Helpers file

All functions that will be reused through the code
-- function to fetch recipe
-- set a timeout to avoid infinite fetching

## MVC Architecture

Model: js/model.js
View: js/views
Controller: js/index.js

### Model

#### Get recipe data

Async function to fetch API,

- try catch
- replace object keys

### Controller

#### Call recipe data from model

- get recipe id with window.location.hash to turn recipe rendering dynamic
- call loadRecipe method from model

### View

#### recipeView

- create a class to render recipe
- export class creating an object

- class will receive data and method to render recipe
  -- Create a html and insert in DOM,
  -- use join at the end of map method to take all html out of the array,
  -- import icons from img folder to allow it be rendered,

- In this class we put the renderSpinner method
  -- function to create the markup and insert in DOM,
  -- there is a specific css for it,
  -- use function wherever we want

- use npm fractional - library to convert fractions

#### display error messages

- function to render error message

### Publisher-subscriber pattern

- used to handle event listening
  -- publisher -> code that knows when to react - view
  -- subscriber -> code that wants to react - controller

  #### publisher

  VIEW
  add a function to listen an event and call a function (give a name to the function)
  -- using hashchange from window (everytime the hash changes). Hash is like an Id
  -- use load from window when the hash doesn't change. To be used when a recipe is open on a new window

#### subscriber

CONTROLLER

- call the publisher within an init() function
- use the function made to render recipe as parameter

# Todo conteudo

- parcel
- pollyfill to ES6
- load form api
- race entre api e timeout
