class SearchView {
  _primaryElement = document.querySelector('.search');
  _searchElement = document.querySelector('.search__field');

  /**
   * get query typed on searched field. It will be used on model to search for
   * an array of recipes
   * @returns {string} the query typed
   */
  getQuery() {
    const query = this._searchElement.value;
    this._searchElement.value = '';
    return query;
  }

  /**
   * listen the submit of search form and call results function in controller
   * @param {function} handler
   */
  handlerSearchRecipe(handler) {
    this._primaryElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
