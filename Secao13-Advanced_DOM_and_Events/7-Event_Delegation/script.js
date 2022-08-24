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

////////////////////////////////////////////////////////////////
const btnScroolTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScroolTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

console.log(`
============== EVENT DELEGATION ==================

  Vamos fazer com que a pagina seja rolada de forma suave quando clicamos em um dos botoes
do nav bar

  document.querySelectorAll('.nav__link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    });
  });

  Contudo, este tipo de construcao faz com que criemos varias callback functions. Imaginemos que haja 1000 botoes e esta arquitetura fará o codigo ser executado de forma lenta.

  Para resolver esta situacao é que existe a DELEGATION

  Para executar uma DELEGATION precisamos executar 2 passos:
    
    1- Criar um eventListener em um parente comum dos botoes. No nosso caso
    o Nav Bar cumpre esta funcao;

    2- E dentro deste eventListener determinar qual elemento gerou o evento 
    atraves da utilizacao do event.target

  O codigo da DELEGATION ficara da seguinte forma

  document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    // Estrategia para garantir que somente 'nav__link' seja executado //
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

`);

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
