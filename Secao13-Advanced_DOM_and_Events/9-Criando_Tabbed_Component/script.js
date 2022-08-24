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

//////////////////////////////////////////////////////////
console.log(`
========== TABBED COMPONENT ==================
  const tabs = document.querySelectorAll('.operations__tab');
  const tabsContainer = document.querySelector('.operations__tab-container');
  const tabContent = document.querySelectorAll('.operations__content');

  Precisamos fazer com que em qualquer lugar que cliquemos na tab o codigo 
entenda que estamos clicando no botao. Se clicarmos no numero contido dentro
da TAB por exemplo ele deve ser entendido como botao.

  Para isso, utilizamos a funcao closest() passando a classe do botao. Desta
forma, ou o proprio botao sera selecionado pelo event.target ou a classe mais
proxima pelo closest('classe do botao');

  tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
  });

  // Guard clause - to avoid error in case of null value
  if (!clicked) return;

  // Remove activated classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabContent.forEach(c => c.classList.remove('operations__content--active'));

  // active tab
  clicked.classList.add('operations__tab--active');

  // active content
  document
    .querySelector(".operations__content--'{clicked.dataset.tab}'")
    .classList.add('operations__content--active');
`);

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause - to avoid error in case of null value
  if (!clicked) return;

  // Remove activated classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabContent.forEach(c => c.classList.remove('operations__content--active'));

  // active tab
  clicked.classList.add('operations__tab--active');

  // active content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
