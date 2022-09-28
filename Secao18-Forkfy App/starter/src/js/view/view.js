import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      this._clear();
    }
    this._data = data;
    this._clear();
    this._generateMarkup();
  }

  update(data) {
    this._data = data;
  }

  _clear() {
    return (this._primaryElement.innerHTML = '');
  }

  renderError(error) {
    this._clear();
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${error.message}</p>
      </div>
    `;

    this._primaryElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    this._clear();
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._primaryElement.insertAdjacentHTML('afterbegin', markup);
  }
}
