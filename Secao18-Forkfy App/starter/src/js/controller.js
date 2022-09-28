const { async } = require('regenerator-runtime');
import * as model from './model.js';
import paginationView from './view/paginationView.js';
import resultsView from './view/resultsView.js';
import searchView from './view/searchView.js';
import recipeView from './view/recipeView.js';

// to load last charge
if (module.hot) {
  module.hot.accept();
}

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

/**
 * Show searched recipes
 */

const controlSearchResults = async function () {
  try {
    // spinner
    resultsView.renderSpinner();

    // get serached query
    const query = searchView.getQuery();
    if (!query) return;

    // load results
    await model.loadResults(query);

    // render results
    resultsView.render(model.getResults());

    // pagination
    paginationView.render(model.state.results);
  } catch (error) {
    resultsView.renderError(error);
  }
};

/**
 * control main recipe
 */
const controlRecipe = async function () {
  try {
    // get hash and take # out
    const id = window.location.hash.slice(1);

    // load model state
    await model.loadRecipe(id);

    // render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error);
  }
};

/**
 * move over results pages
 * @param {*} page
 */
const controlPagination = function (page) {
  try {
    // render results
    resultsView.render(model.getResults(page));

    // pagination
    paginationView.render(model.state.results);
  } catch (error) {
    console.error(error);
  }
};

const controlServings = function (newServing) {
  model.loadNewServing(newServing);
  recipeView.render(model.state.recipe);
};

/**
 * initialize the events listeners
 */
const init = function () {
  searchView.handlerSearchRecipe(controlSearchResults);
  paginationView.handlerPagination(controlPagination);
  recipeView.handlerRecipe(controlRecipe);
  recipeView.handlerServings(controlServings);
};

/**
 *
 */
init();
