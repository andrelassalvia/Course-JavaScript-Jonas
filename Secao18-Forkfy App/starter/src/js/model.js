import regeneratorRuntime from 'regenerator-runtime';
import { RECIPES_PER_PAGE, URL_API, WAIT_SECONDS } from './config.js';
import { getJSON, timeout } from './helpers.js';

export const state = {
  recipe: {},
  results: {
    length: 1,
    query: '',
    recipes: [],
    currentPage: 1,
    numberPages: 1,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${URL_API}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      cookingTime: recipe.cooking_time,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      source: recipe.source_url,
      title: recipe.title,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loadResults = async function (query) {
  try {
    state.results.query = query;

    const data = await getJSON(`${URL_API}?search=${query}`, `results.`);

    const { recipes } = data.data;

    state.results.recipes = recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
      };
    });

    state.results.length = state.results.recipes.length;

    if (state.results.length === 0) {
      throw new Error('No recipes found 😥');
    }
    state.results.numberPages = Math.ceil(
      state.results.length / RECIPES_PER_PAGE
    );
  } catch (error) {
    throw error;
  }
};

export const getResults = function (page = state.results.currentPage) {
  state.results.currentPage = page;
  const start = (+page - 1) * RECIPES_PER_PAGE;
  const end = +page * RECIPES_PER_PAGE;
  return state.results.recipes.slice(start, end);
};

export const loadNewServing = function (newServing) {
  const { servings } = state.recipe;
  state.recipe.ingredients.map(ing => {
    ing.quantity = (newServing * ing.quantity) / servings;
  });

  state.recipe.servings = newServing;

  console.log(state.recipe);
};
