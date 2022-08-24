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

/////////////////////////////////////////////////////////
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(`
========== EVENT PROPAGATION =================
Criar cores de forma aleatoria

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
`);

console.log(
  'const randomColor = rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)}) = ',
  randomColor
);

console.log(`
  Queremos provar que se clicarmos em um link, por exemplo, em "FEATURES", e adicionarmos um
evento, todos os elementos pais tambem escutarao este evento em um efeito de propagacao.

  Para isso vamos atribuir cores de forma randomica a cada um destes elementos quando clicarmos 
em "FEATURES".

  == Cor de Features ==
  document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('LINK', e.target);
    console.log('LINK - e.currentTarget', e.currentTarget);
  });

  == Cor do Nav Bar ==
  document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Nav Bar', e.target);
    console.log('Nav Bar - e.currentTarget', e.currentTarget);
  });

  == Cor do Header ==
  document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Header', e.target);
    console.log('Header - e.currentTarget', e.currentTarget);
  });

  A cada vez que clicarmos em "FEATURES" as cores serao criadas de forma randomica. Neste
caso nao ha propagacao pois ja passamos o comando stopPropagation()

  E se clicarmos somente no navbar, sua cor e a do header serao alteradas.

  E se clicarmos somente no Header, somente sua cor sera alterada.

  Esse comportamento é esperado devido a propagacao que ocorre de filho para pai mas não de 
forma inversa.

  e.target mostra onde o evento ocorre e nao onde o event handler esta colocado
  current.target mostra onde o event handler esta alocado

  E se quisermos interromper a propagacao do evento, basta passarmos e.stopPropagation()
`);

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK - e.target', e.target);
  console.log('LINK - e.currentTarget', e.currentTarget);
  e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav Bar - e.target', e.target);
  console.log('Nav Bar - e.currentTarget', e.currentTarget);
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Header - e.target', e.target);
  console.log('Header - e.currentTarget', e.currentTarget);
});
