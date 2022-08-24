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

////////////////////////////////////////////////////////////////////
const btnScroolTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
console.log(section1);

console.log(`
=========== CLICAR EM LEARN MORE E RODAR ATE A SECAO 1 ===========

=== OLD SCHOOL ===

Guarda as informacoes do botao e da secao para a qual queremos navegar
const btnScroolTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

Adiciona a escuta de um evento de click: CLICAR EM LERAN MORE
  btnScroolTo.addEventListener('click', function (e) {
    
  });
`);
btnScroolTo.addEventListener('click', function (e) {
  const section1Coord = section1.getBoundingClientRect();
  const btnCoord = e.target.getBoundingClientRect();

  console.log(`
  Descobre as coordenadas da secao de destino:
  const section1Coord = section1.getBoundingClientRect()
  `);
  console.log('Coordenadas da secao 1:', section1Coord);

  console.log(`
  Descobre as coordenadas do botao Learn More:
  const btnCoord = btnScroolTo.getBoundingClientRect()
  `);
  console.log('Coordenadas do botao:', btnCoord);

  console.log(`
  Descobrir as coordenadas da janela atual:
  x = window.scrollX,
  y = window.scrollY
  `);
  console.log('Coordenadas da janela(X/Y):', window.scrollX, window.scrollY);

  console.log(`
  Descobrir o tamanho da viewPort atual:
  height = document.documentElement.clientHeight;
  width = document.documentElement.clientWidth;
  `);
  console.log('Height', document.documentElement.clientHeight);
  console.log('Width', document.documentElement.clientWidth);

  console.log(`
  Navegar ate a secao da pagina

  window.scrollTo(section1Coord.left, section1Coord.top);
    Esta forma retorna a posicao relativa em relacao ao viewPort o que 
  faz com que cada vez que apertemos o Learn More a pagina retorne em 
  uma posicao diferente 
  `);
  // window.scrollTo(section1Coord.left, section1Coord.top);

  console.log(`
    Para que a pagina retorne sempre na secao que queremos precisamos
  referenciar o documento, ou seja, em relacao ao topo da pagina e nao
  ao topo do viewPort.

  window.scrollTo(
    section1Coord.left + window.scrollX,
    section1Coord.top + window.scrollY
  );
  `);
  // window.scrollTo(
  //   section1Coord.left + window.scrollX,
  //   section1Coord.top + window.scrollY
  // );

  console.log(`
    E se passarmos um objeto podemos definir a forma como o scroll ira se
  comportar:

  window.scrollTo({
    left: section1Coord.left + window.scrollX,
    top: section1Coord.top + window.scrollY,
    behavior: 'smooth',
  });
  `);
  // window.scrollTo({
  //   left: section1Coord.left + window.scrollX,
  //   top: section1Coord.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  console.log(`
  === MODERN SCHOOL ===

    Podemos fazer exatamente a mesma coisa que demonstramos acima com uma 
  unica funcao passando um objeto que determina como sera o comportamento 
  do scroll

  section1.scrollIntoView({ behavior: 'smooth' });

  `);
  section1.scrollIntoView({ behavior: 'smooth' });
});
