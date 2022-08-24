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

//-------- STYLES ----------//

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies.<button class="btn btn--close-cookie">Got it</button>';

const header = document.querySelector('.header');
header.append(message);

message.style.backgroundColor = '#37383d';
message.style.width = '130%';

console.log(`
============== STYLES =============

    === Criar um elemento ===
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies.<button class="btn btn--close-cookie">Got it</button>'

    === Insere um elemento ===
const header = document.querySelector('.header');
header.append(message);

=== Dando estilo a um elemento ===
message.style.backgroundColor = '#37383d';
message.style.width = '130%';

=====================================

Se quiser descobrir alguma propriedade de estilo que ja esteja computada, devemos passar a propriedade
getComputedStyle(el):

getComputedStyle(message) = 
`);
console.log(getComputedStyle(message));

console.log(`
E para recuperarmos um atributo especifico:

console.log(getComputedStyle(message).backgroundColor) =
`);
console.log(getComputedStyle(message).backgroundColor);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

console.log(`
  Se quisermos alterar o valor do estilo de uma propriedade computada, precisamos passar a computada
  antes para numero e depois concatenar o novo valor e sua unidade.

  message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

  Se quisermos alterar o valor de alguma propriedade que esteja na root:
  document.documentElement.style.setProperty('--color-primary', 'orange');
`);
document.documentElement.style.setProperty('--color-primary', 'orange');

const logo = document.querySelector('.nav__logo');
console.log(`

=========== ATTRIBUTES =============

Primeiro selecionamos o elemento que contem os atributos que queremos selecionar.
const logo = document.querySelector('.nav__logo');

Depois selecionamos os atributos em si passando o atributo concatendado com ponto (.)
console.log(logo.alt) = ${logo.alt}
console.log(logo.src) = ${logo.src}
console.log(logo.className) = ${logo.className}

O js le somente atributos considerados padroes em uma tag. Se, por exemplo, criarmos um 
atributo chamado "designer" e tentarmos recuperar seu valor da forma anterior, o retorno 
sera 'undefined'.

console.log(logo.designer) = ${logo.designer}

Para recuperarmos este valor precisamos utilizar getAttribute()

console.log(logo.getAttribute('designer')) = ${logo.getAttribute('designer')}
`);
logo.alt = 'minimalist_logo';
logo.setAttribute('designer', 'Marcao');

console.log(`
Da mesma forma que podemos ler um atributo tambem podemos setar um atributo:
logo.alt = 'minimalist_logo'

console.log(logo.alt) = ${logo.alt}

O mesmo vale para os atributos nao standarts:
logo.setAttribute('designer', 'Marcao');
console.log(logo.getAttribute('designer')) = ${logo.getAttribute('designer')}

Se quisermos obter o valor relativo de uma URL precisamos utilizar o getAttribute()
console.log(logo.src) = ${logo.src};
console.log(logo.getAttribute('src')) = ${logo.getAttribute('src')}
`);

console.log(`
Para trabalharmos com o atributo DATA utilizamos o dataset para capturar seu valor
console.log(logo.dataset.versionNumber) = ${logo.dataset.versionNumber}
`);
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
logo.classList.contains('c', 'j');
console.log(`

========== CLASSES =============

Podemos manipular uma ou mais classes de uma vez

logo.classList.add('c', 'j') -> adiciona 
logo.classList.remove('c', 'j') -> remove
logo.classList.toggle('c', 'j') -> alterna 
logo.classList.contains('c', 'j') -> verifica se a classe existe
`);
