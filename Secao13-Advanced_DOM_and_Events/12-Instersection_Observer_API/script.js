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
===================== INTERSERCT OBSERVATION API ==========================

  Trata-se de uma classe utilizada para fazer com que nosso código execute
mudanças quando um certo elemento alvo intercepta outro elemento ou quando
o elemento alvo intercepta algum poonto no viewport. 

  Estrutura:

  classe => new IntersectionObserver(callback, options)

    * callback => funcao passando as acoes que queremos executar. Neste ca-
  so, mostrar e retirar o NavBar conforme a posicao de rolagem da tela. A 
  funcao de callback possui 2 parametros:

        entries => Uma lista de objetos que observa mudancas ocorridas no
        elemento alvo. Esta lista é formada a partir das entradas do thre-
        shold:
           - entry.boundingClientRect
           - entry.intersectionRatio
           - entry.intersectionRect
           - entry.isIntersecting
           - entry.rootBounds
           - entry.target
           - entry.time

        Observer => Utilizado quando precisamos observar multiplos elemen-
        tos alvos

    * options => objeto com os dados da posicao do elemento que o alvo
  interceptará.


  options = {
    root: O elemento que o alvo interceptará. Se null o elemento será o 
    proprio viewport. Do contrario, podemos selecionar o root utilizando
    querySelector.

    threshold: Um número ou um array de números que indica em qual percen-
    tual da visibilidade do elemento alvo uma função de callback deverá 
    ser chamada. Se por exemplo eu quero que a callback seja chamada a cada
    vez que novos 25% do elemento alvo apareçam, eu passo um array da se-
    guinte forma: [0, 0.25, 0.5, 0.75, 1]

    rootMargin: Margem em torno do root que o elemento alvo interceptará. Por-
    tanto se colocarmos uma margin de 100px quando root for null, a call-
    back será chamada levando-se em conta a rolagem em 100px do viewport.
  }

  Para fazermos com que um elemento alvo seja observado, precisamos passar
o metodo observe(el alvo) apos o objeto criado a partir da instancia da 
classe IntersectionObserver.

const observer = new IntersectionObserver(callback, options);

observer.observe('header');

=== Exemplo com o NavBar ===

- Queremos que nossa barra de navegacao fique fixa logo apos o header desa-
parecer completamente.
- Nosso root sera null pois o header tera como referencia o viewport
- Nosso threshold sera 0 pois com 0% de visibilidade do header em relacao 
ao viewport queremos que a entry.isIntersecting seja true
- Na callback colocamos que a condicao de entry.isIntersecting quando false
retorne alguma acao,
- Essa acao sera a aparicao da classe stick no navbar.

    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav');
    const navMargin = nav.getBoundingClientRect();

    const headerCallback = function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting == false) nav.classList.add('sticky');
      else nav.classList.remove('sticky');
    };

    const headerObserver = new IntersectionObserver(headerCallback, {
      root: null,
      threshold: 0,
      rootMargin: navMargin.height px,
    });

    headerObserver.observe(header);


`);
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navMargin = nav.getBoundingClientRect();

const headerCallback = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting == false) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(headerCallback, {
  root: null,
  threshold: 0,
  rootMargin: `${navMargin.height}px`,
});

headerObserver.observe(header);

//////////////////////////////////////////////////////////////////
console.log(`
========= REVELANDO SECOES =================

  - Seleciona todas as secoes,
  - foreach para cada secao definindo:
      * a entrada da classe hidden para esconder a secao
      * a observacao de cada secao pelo objeto gerado pela instancia de 
      IntersectionObserver()

  - O root sera a viewport,
  - O threshold sera 15% de visibilidade de cada secao
  - A callback achara cada secao utilizando o target
  - Em cada target removeremos a classe hidden quando ocorrer a interseccao
  const sections = document.querySelectorAll('.section');

  const sectionCallback = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');

    observer.unoberve(entry.target); // para de observar e aumenta performance
  };

  const sectionObserver = new IntersectionObserver(sectionCallback, {
    root: null,
    threshold: 0.15,
  });

  sections.forEach(section => {
    section.classList.add('section--hidden');
    sectionObserver.observe(section);
  });
`);

const sections = document.querySelectorAll('.section');

const sectionCallback = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unoberve(entry.target); // para de observar e aumenta performance
};

const sectionObserver = new IntersectionObserver(sectionCallback, {
  root: null,
  threshold: 0.15,
});

sections.forEach(section => {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
});
