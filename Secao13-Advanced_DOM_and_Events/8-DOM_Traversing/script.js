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
const h1 = document.querySelector('h1');

console.log(`
============ DOM TRAVERSING ================
Basicamente significa percorrer todos os elementos da DOM, o que permite que 
possamos selecionar um elemento baseado em outro elemento da DOM.

const h1 = document.querySelector('h1');

=== Elementos filhos de h1 ===
`);
console.log(
  'Todos os filhos de determinada classe:',
  "h1.querySelectorAll('.highlight') =>",
  h1.querySelectorAll('.highlight')
);
console.log('Todos os nós:', 'h1.childNodes =>', h1.childNodes);
console.log('Todos os filhos:', 'h1.children =>', h1.children);
console.log(
  'Primeiro filho:',
  "h1.firstElementChild.style.color = 'white' =>",
  (h1.firstElementChild.style.color = 'white')
);
console.log(
  'Ultimo filho:',
  "h1.lastElementChild.style.color = 'orangered' =>",
  (h1.lastElementChild.style.color = 'orangered')
);

console.log(` 

=== Elementos pais de h1 ===`);

console.log('Nós acima:', 'h1.parentNode =>', h1.parentNode);
console.log('Elemento pai:', 'h1.parentElement =>', h1.parentElement);

console.log(`
Por vezes precisamos encontrar um elemento acima que nao é
um parante direto, que pode estar bem acima na arvore. Para isso utilizamos o closest()
que encontra o parente especificado mais proximo subindo na arvore

`);

console.log(
  'Arvore acima:',
  "h1.closest('header').style.backgroundColor = 'yellow' =>",
  (h1.closest('header').style.backgroundColor = 'yellow')
);

console.log(`
  Podemos pensar no closest() como sendo o inverso de querySelector(). Enquanto
o querySelector busca por determinados elementos filhos, o closest busca por
determinados elementos acima.
`);

console.log(` 

=== Elementos irmaos de h1 ===`);

console.log(
  'Elemento irmao anterior:',
  'h1.previousElementSibling =>',
  h1.previousElementSibling
);
console.log(
  'Elemento irmao posterior',
  'h1.nextElementSibling =>',
  h1.nextElementSibling
);
console.log('Node irmao anterior', 'h1.previousSibling =>', h1.previousSibling);
console.log('Node irmao posterior', 'h1.nextSibling =>', h1.nextSibling);
console.log(
  'Todos os elementos irmaos',
  'h1.parentElement.children =>',
  h1.parentElement.children
);

console.log(`
Exemplo de utilizacao de siblings:

Muda a escala de todos os elementos irmaos de h1 menos o proprio
  [...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) el.style.transform = 'scale(0.5)';
  });
`);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
