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
console.log(`
==== PASSANDO ARGUMENTOS PARA EVENTOS ====

  Vamos utilizar o hover dos botoes do NavBar para demonstrar como passar argumentos
em um evento.

Faremos com que ao fazer o hoover em um botao os demais fiquem embacados e 
ao sair do hoover daquele botao tudo volte ao normal

Criamos uma funcao que sera usada como segundo parametro de um evenListeter

  const hooverHandler = function (e, opacity) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = opacity;
      });

      if (logo !== link) logo.style.opacity = opacity;
    }
  };

Definimos qual sera o elemento que fara a delegacao:
const nav = document.querySelector('.nav');

E passamos o eventListener
  nav.addEventListener('mouseover', function (e) {
    hooverHandler(e, 0.5);
  });

  A observacao a ser feita é que o segundo parametro deve ser uma funcao de 
  callback passando e como parametro. E dentro desta funcao chamamos a nossa
  funcao criada anteriormente.

  Se passassemos como segundo parametro diretamente a funcao que criamos 
  nao teriamos como definir o valor de e.

Mas a forma mais limpa de passarmos argumentos para event handlers é através
de BIND.

Nesse caso a funcao que criamos perde o argumento de opacidade e mantem somente
o event

  const hooverHandler = function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');

      E o argumento opacidade sera atribuido com this

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });

      if (logo !== link) logo.style.opacity = this;
    }
  };

  Este this posteriormente sera preenchido com o valor passado dentro do BIND 
  nav.addEventListener('mouseover', hooverHandler.bind(0.5));
  nav.addEventListener('mouseout', hooverHandler.bind(1));


`);

// Menu fade animation

// Refatorado em uma funcao
const hooverHandler = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    if (logo !== link) logo.style.opacity = this;
  }
};

const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', hooverHandler.bind(0.5));
nav.addEventListener('mouseout', hooverHandler.bind(1));
