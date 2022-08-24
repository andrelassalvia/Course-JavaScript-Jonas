'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////
console.log(
  `
  ======== TUDO QUE DEVERA SER FEITO ==================

  - Smoothing scrooler quando clicamos no learn more,
  - Smoothing scroller quando clicamos nos botoes do navbar
  utilizando event delegation para melhorar performance do
  codigo,
  - Tabbed component,
  - Efeito hoover nos botoes usando argumentos em events,
  - Stick navbar com IO API
  - Revelar secoes com IO API
  - Carregar imagens de forma Lazy as imagens
  - Slide component com translate
  `
);
