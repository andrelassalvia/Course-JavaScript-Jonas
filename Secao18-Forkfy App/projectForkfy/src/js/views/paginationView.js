import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  // use event delegation because we have 2 buttons
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goPage;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const { currentPage } = this._data;
    const numPages = Math.ceil(
      this._data.recipes.length / this._data.resultsPage
    );

    // 1st page and there is others pages
    if (currentPage === 1 && numPages > 1) {
      return `
        <button data-go-page="${
          currentPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }
    // Last page
    if (currentPage === numPages && numPages > 1) {
      return `
        <button data-go-page="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
      `;
    }
    // Other page
    if (currentPage < numPages) {
      return `
        <button data-go-page="${
          currentPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage - 1}</span>
        </button>
        <button data-go-page="${
          currentPage + 1
        }" class="btn--inline pagination__btn--next">
          <span>Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
      `;
    }
    // 1st page NO others pages
    if (currentPage === 1 && numPages === 1) {
      return '';
    }
  }
}

export default new PaginationView();
