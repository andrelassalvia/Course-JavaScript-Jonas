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

////////////////////////////////////////////////////
console.log(`
============ STICK NAVIGATION ================

  Para construir um Nav Bar que apareca e fique parado a partir de um ponto
de rolagem da pagina, precisamos:
  - Construir uma classe que tenha uma position: fixed,
  - Identificar as coordenadas de rolagem a partir da qual a Nav Bar aparecera,
  - Escutar o evento de scroll,
  - Colocar ou remover a classe quando o evento scroll passar pela coordenada determinada.


  Esta forma de construcao de Sticky Nav Bar é considerada antiga pois a cada vez que rolamos a 
pagina precisamos escutar o evento e essa quantidade de eventos ouvidos pode tornar lenta a
navegacao em sistemas antigos.

  Modernamente utilizamos uma tecnica chamada Intersection Observer API que será demonstrada na
próxima aula.
`);
