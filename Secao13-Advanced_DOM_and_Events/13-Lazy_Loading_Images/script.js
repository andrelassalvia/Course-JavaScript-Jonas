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

///////////////////////////////////////////////////////////////////////////
console.log(`
====================== LAZY LOADING IMAGES ========================

- selecionar todas as imagens que serao carregadas
- foreach para cada imagem passar o observador
- gerar o observador
- root vai ser o viewport
- o threshold sera 0
- a funcao devera trocar a fonte da imagem que esta sendo carregada de src
para data-src (onde esta alocada a imagem de alta definicao)
- remover o blur somente apos o carregamento completo da imagem de alta de-
finicao,
- para remover o blur nesta situacao fazer um event listener passando load

    const images = document.querySelectorAll('img[data-src]');

    const imgCallback = function (entries, observer) {
      const [entry] = entries;
      entry.target.src = entry.target.dataset.src;
      entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
        observer.unobserve(entry.target);
      });
    };

    const imgObserver = new IntersectionObserver(imgCallback, {
      root: null,
      threshold: 0,
    });
    images.forEach(img => imgObserver.observe(img));
`);

const images = document.querySelectorAll('img[data-src]');

const imgCallback = function (entries, observer) {
  const [entry] = entries;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(imgCallback, {
  root: null,
  threshold: 0,
});
images.forEach(img => imgObserver.observe(img));
