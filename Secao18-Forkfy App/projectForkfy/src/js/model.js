import { async } from 'regenerator-runtime';
import { API_URL, RESULTS_PER_PAGE, KEY } from './config.js';
import { ajaxAPI } from './helpers.js';

export const state = {
  recipe: {},
  bookmarks: [],
  search: {
    recipes: [],
    query: '',
    currentPage: 1,
    resultsPage: RESULTS_PER_PAGE,
  },
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }), // in case the recipe has a key to post
  };
};

// Get recipe data and change state object
export const loadRecipe = async function (id) {
  try {
    const data = await ajaxAPI(`${API_URL}${id}?key=${KEY}`);

    state.recipe = createRecipeObject(data);
    // Rewrite object keys

    // check wether this id is already bookmarked or not
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (error) {
    throw error;
  }
};

// Get results from a search and change state object
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    state.search.currentPage = 1;
    const data = await ajaxAPI(`${API_URL}?search=${query}&key=${KEY}`);
    if (data.results === 0) {
      throw new Error();
    }
    state.search.recipes = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
        ...(rec.key && { key: rec.key }),
      };
    });
  } catch (error) {
    throw error;
  }
};

// get only results from a specific page
export const getSearchResultsPage = function (page = state.search.currentPage) {
  const start = (page - 1) * state.search.resultsPage;
  const end = page * state.search.resultsPage; // second slice parameter is not included (-1)
  state.search.currentPage = page;

  return state.search.recipes.slice(start, end);
};

// update servings when plus or minus buttons are clicked
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (newServings * ing.quantity) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

// add bookmark to a recipe
export const addBookmark = function (recipe) {
  // add recipe to bookmarks array
  state.bookmarks.push(recipe);

  // add recipe to local storage
  persistBookmarks();

  // add recipe as a bookmarked true
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};

// exclude a recipe from bookmarks
export const deleteBookmark = function (id) {
  // delete from bookmarks array
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // delete from bookmark storage
  persistBookmarks();

  // mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;
};

export const uploadRecipe = async function (newRecipe) {
  // transform data back to API format - be able to post
  try {
    // handle ingredients first
    const ingredients = await Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());

        if (ingArr.length !== 3) {
          throw new Error('Ingredients were typed using wrong format.');
        }

        const [quantity, unit, description] = ingArr;

        return {
          quantity: quantity === '' ? null : +quantity,
          unit,
          description,
        };
      });

    // create recipe object with newRecipe param and ingredients already customized
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await ajaxAPI(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (error) {
    throw error;
  }
};

const init = function () {
  const storagedBookmarks = localStorage.getItem('bookmarks');
  if (storagedBookmarks) {
    state.bookmarks = JSON.parse(storagedBookmarks);
  }
};

init();
