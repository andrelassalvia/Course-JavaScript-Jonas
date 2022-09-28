import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import searchView from './views/searchView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { CLOSE_MODAL_SEC } from './config.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// to load last charge
if (module.hot) {
  module.hot.accept();
}

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // spinner
    recipeView.renderSpinner();

    // update to shadow mark selected view
    resultsView.update(model.getSearchResultsPage());

    // update the shadow mark in the bookmarks list
    bookmarksView.update(model.state.bookmarks);

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

// control the servings number
const controlServings = function (newServings) {
  // update recipe servings
  model.updateServings(newServings);

  // render recipe
  recipeView.update(model.state.recipe);
};

// control to add bookmarked recipe as true or false
const controlBookmarks = function () {
  // add/remove bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }

  // update recipe view - bookmark icon
  recipeView.update(model.state.recipe);

  // render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) loading search results
    await model.loadSearchResults(query);

    // 3) Render search results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render pagination
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
    resultsView.renderError();
  }
};

const controlPagination = function (goPage) {
  // 1) Render search results
  resultsView.render(model.getSearchResultsPage(goPage));

  // 4) Render pagination
  paginationView.render(model.state.search);
};

// Render bookmarkeds from local storage
const controlLoadBookmarkeds = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // render spinner
    recipeView.renderSpinner();

    // upload new recipe
    await model.uploadRecipe(newRecipe);

    //  render recipe
    recipeView.render(model.state.recipe);

    // success message
    addRecipeView.renderMessage();

    // render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // close form window
    setTimeout(function () {
      addRecipeView.showRecipeForm();
    }, CLOSE_MODAL_SEC * 1000);
  } catch (error) {
    console.error(error);
    addRecipeView.renderError(error);
  }
};

// function to be runned when pprogram starts
const init = function () {
  bookmarksView.addHandlerLoadBookmarks(controlLoadBookmarkeds);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmarks);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpLoad(controlAddRecipe);
};
init();
