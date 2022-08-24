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

//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

console.log(`
=========== SELECAO DE ELEMENTOS =============

==== Selecionar todos os elementos de uma pagina ====
document.documentElement = 
`);

console.log(document.documentElement);

console.log(`
=== Selecionar somente o Head ===
document.head
`);
console.log(document.head);

console.log(`
=== Selecionar somente o Body ===
document.body
`);
console.log(document.body);

console.log(`
=== Selecionar o primeiro elemento com a classe header ===
document.querySelector('.header')
`);
console.log(document.querySelector('.header'));

console.log(`
=== Selecionar todos os elementos da classe section ===
document.querySelectorAll('.section')
`);
const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(`
=== Selecionar um elemento pelo seu ID ===
document.getElementById('section--1') -> Obs: nao precisa passar #
`);
console.log(document.getElementById('section--1'));

console.log(`
=== Selecionar todos os elementos de uma determinada Tag ===
document.getElementsByTagName('button') 

Note que é retornado uma collection ao inves de uma nodeList.
As collections são atualizadas juntamente com o DOM.
`);
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(`
=== Selecionar todos os elementos de uma determinada classe retornando uma collection ===

document.getElementsByClassName('btn')

`);

console.log(document.getElementsByClassName('btn'));

console.log(`
============ CRIANDO E INSERINDO ELEMENTOS ==============
.insertAdjacentHTML -> ja demonstrado em outra parte do curso - Insere no HTML um elemento criado previamente

=== Criar um elemento ===
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies.<button class="btn btn--close-cookie">Got it</button>'
`);

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies.<button class="btn btn--close-cookie">Got it</button>';

console.log(`
===== Inserir um elemento ====

Vamos inserir esta mensagem no topo do header antes dos demais elementos como seu o primeiro child:

const header = document.querySelector('.header')
header.prepend(message)

obs: toda a formatacao ja havia sido feita no style.css
`);

const header = document.querySelector('.header');
header.prepend(message);

console.log(`
Para colocar como ultimo elemento utlizamos o append

header.append(message);

message é um live element e so pode ser inserido uma vez. Portanto append foi lido por ultimo e ele vai renderizar message
`);
// header.append(message);

console.log(`
Se quisermos renderizar message mais de uma vez precisamos fazer um clone

header.append(message.cloneNode(true));

`);
header.append(message.cloneNode(true));

console.log(`
por ultimo podemos utilizar before e after para renderizar antes ou apos um elemento

header.before(message);
header.after(message);


============== DELETAR ELEMENTOS ==================

Vamos deletar o elemento message criando anteriormente quando clicarmos em seu botao

const [...cookieButtons] = document.querySelectorAll('.btn--close-cookie');
const [...cookieMessages] = document.querySelectorAll('.cookie-message');

cookieButtons.forEach(btn =>
  btn.addEventListener('click', function () {
    cookieMessages.forEach(message => message.remove());
  })
);

`);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

const [...cookieButtons] = document.querySelectorAll('.btn--close-cookie');
const [...cookieMessages] = document.querySelectorAll('.cookie-message');

cookieButtons.forEach(btn =>
  btn.addEventListener('click', function () {
    cookieMessages.forEach(message => message.remove());
  })
);
