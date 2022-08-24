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

///////////////////////////////////////////////////////////////
console.log(`
================= CICLO DE VIDA DA DOM =====================
1- Apos carregamento do HTML e antes do carregamento de ima-
gens e fontes externas:

    document.addEventListener('DOMContentLoaded', function (e) {
      console.log(e);
    });

2- Apos o carregamento de imagens e fontes externas:

    window.addEventListener('load', function (e) {
      console.log(e);
    });

3- Imediatamente antes de sair da pagina:

    window.addEventListener('beforeunload', function (e) {
      e.preventDefault();
      console.log(e);
      e.returnValue = ''; // envia message padrao do browser para sair da pagina
    });
`);

document.addEventListener('DOMContentLoaded', function (e) {
  console.log(e);
});

window.addEventListener('load', function (e) {
  console.log(e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = ''; // envia message padrao do browser para sair da pagina
});
