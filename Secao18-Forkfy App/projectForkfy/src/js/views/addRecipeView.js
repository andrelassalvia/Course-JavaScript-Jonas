import View from './view';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was uploaded.';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnAddRecipe = document.querySelector('.nav__btn--add-recipe');
  _btnCloseForm = document.querySelector('.btn--close-modal');

  // called as soon as index.js import this class
  constructor() {
    super();
    this._addHandlerShowWindow();
  }

  showRecipeForm() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    [this._btnAddRecipe, this._btnCloseForm, this._overlay].forEach(ev =>
      ev.addEventListener('click', this.showRecipeForm.bind(this))
    );
  }

  addHandlerUpLoad(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);

      handler(data);
    });
  }
  _generateMarkup() {}
}

export default new AddRecipeView();
