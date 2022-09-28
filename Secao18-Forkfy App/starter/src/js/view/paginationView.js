import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _primaryElement = document.querySelector('.pagination');

  handlerPagination(handler) {
    this._primaryElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      const page = +btn.dataset.page;
      handler(page);
    });
  }

  _generatePageMarkup() {
    const { numberPages } = this._data;
    const { currentPage } = this._data;

    // 1st page MORE pages
    if (currentPage === 1 && numberPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next" data-page="${
          currentPage + 1
        }">
          <span>${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }

    // LAST page
    if (currentPage === numberPages) {
      return `
        <button class="btn--inline pagination__btn--prev" data-page="${
          currentPage - 1
        }">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>${+currentPage - 1}</span>
        </button>
      `;
    }

    // INTERMEDIATE page
    if (currentPage < numberPages && currentPage > 1) {
      return `
        <button class="btn--inline pagination__btn--prev" data-page="${
          currentPage - 1
        }">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>${+currentPage - 1}</span>
        </button>
        <button class="btn--inline pagination__btn--next" data-page="${
          currentPage + 1
        }">
          <span>${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
    `;
    }

    // 1st page no more pages
    if (numberPages === 1) {
      return ``;
    }
  }

  _generateMarkup() {
    const markup = this._generatePageMarkup();
    this._primaryElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new PaginationView();
