import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g recipe)
   * @param {boolean} [render = true] if false create markup string instead of rendering to the DOM
   * @returns {undefined | string}
   * @this {Object} View instance
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      this._clear();
      return this.renderError();
    }
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup(); // it's not rendered yet
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*')); // new elements created in newMarkup
    const currentElements = Array.from(
      this._parentElement.querySelectorAll('*')
    ); // elements actually rendered on DOM

    /**
     * To compare newElements with currentElements is needed loop over each new element and compare with each current element in the same position
     */
    newElements.forEach((newEl, i) => {
      const currEl = currentElements[i];

      // update elements text content
      if (
        !newEl.isEqualNode(currEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        currEl.textContent = newEl.textContent;
      }

      // update elements attributes
      if (!newEl.isEqualNode(currEl))
        Array.from(newEl.attributes).forEach(attr => {
          currEl.setAttribute(attr.name, attr.value);
        });
    });
  }

  // clear the parentElement
  _clear() {
    this._parentElement.innerHTML = '';
  }

  // Render spinner
  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Render error message
  renderError(message = this._errorMessage) {
    this._clear();
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Render message
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
