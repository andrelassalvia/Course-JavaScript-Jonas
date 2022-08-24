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

/////////////////////////////////////////////////////////////////////////
const h1 = document.querySelector('h1');

h1.onmouseenter = () => alert('Entrou no h1');
console.log(`
=================== TIPOS DE EVENTOS ========================

Lista com todos os eventos: ${'https://developer.mozilla.org/en-US/docs/Web/Events#event_listing'}

Podemos passar eventos associados com on

const h1 = document.querySelector('h1');
h1.onmouseenter = () => alert('Entrou no h1');

  Mas esta maneira nao é indicada pois nao é possivel passar mais de uma funcao. A ultima 
sobrescrevera as restantes.

  Modernamente utilizamos addEventListener

  const h4 = document.querySelector('h4');
  const h4MouseEnter = function () {
    alert('Entrou no h4');
  };

  h4.addEventListener('mouseenter', h4MouseEnter);
`);

const h4 = document.querySelector('h4');
const h4MouseEnter = function () {
  alert('Entrou no h4');
};

h4.addEventListener('mouseenter', h4MouseEnter);

console.log(`
  Da mesma forma que escutamos um evento podemos remove-lo. Importantre quando queremos
que o evento aconteca somente uma vez.

const logo = document.querySelector('.nav__logo');
const logoAlert = function () {
  alert('Entramos no logo');
  logo.removeEventListener('mouseenter', logoAlert);
};

logo.addEventListener('mouseenter', logoAlert);
`);

const logo = document.querySelector('.nav__logo');
const logoAlert = function () {
  alert('Entramos no logo');
  logo.removeEventListener('mouseenter', logoAlert);
};

logo.addEventListener('mouseenter', logoAlert);
