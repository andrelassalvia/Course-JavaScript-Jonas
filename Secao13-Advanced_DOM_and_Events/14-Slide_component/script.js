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
console.log(`
========================== SLIDE COMPONENT ======================

- Alocar os slides lado a lado inserindo via DOM style com propriedade 
transform passando um translateX,
- O translateX desloca o elemento no eixo horizontal no valor passado den-
tro da propriedade,
- translateX deve ser em percentual. Se o primeiro slide comeca com 0% o
proximo slide deve ter 100% e o seguinte 200% de translateX,
- A cada vez que clicamos no botao direito o valor do translateX de cada
slide deve aumentar em 100%,
- A cada vez que clicamos com o botao esquerdo deve diminuir em 100%,
- Utilizamos o index do foreach para sabermos em qual slide estamos e cal-
cular o percentual relativo aquele indice,
- Ao chegar no ultimo slide com o botao direito devemos retornar ao pri-
meiro. Fazemos isso determinando que quando atingirmos o comprimento ma-
ximo do array o slide corrente volta a ser 0,
- A mesma logica vale para o botao esquerdo sendo que o slide corrente sera
o valor maximo do comprimento do array,

    const slides = document.querySelectorAll('.slide');
    const btnRight = document.querySelector('.slider__btn--right');
    const btnLeft = document.querySelector('.slider__btn--left');
    let currSlide = 0;
    const maxSlide = slides.length - 1;

    const actualSlide = function (slide) {
      slides.forEach((s, i) => {
        s.style.transform = translateX((i - slide) * 100%);
      });
    };

    actualSlide(currSlide);

    btnRight.addEventListener('click', function () {
      currSlide === maxSlide ? (currSlide = 0) : currSlide++;
      actualSlide(currSlide);
    });

    btnLeft.addEventListener('click', function () {
      currSlide === 0 ? (currSlide = maxSlide) : currSlide--;
      actualSlide(currSlide);
    });

`);

const slider = function () {
  // constants and variables
  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  let currSlide = 0;
  const dotsContainer = document.querySelector('.dots');
  const maxSlide = slides.length - 1;

  // functions
  const actualSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };

  const activeDot = function (slideNumber) {
    const allDots = document.querySelectorAll('.dots__dot');
    allDots.forEach(dot => {
      dot.classList.remove('dots__dot--active');
      if (dot.dataset.slide != slideNumber) return;
      dot.classList.add('dots__dot--active');
    });
  };

  const nextSlide = function () {
    currSlide === maxSlide ? (currSlide = 0) : currSlide++;
    actualSlide(currSlide);
    activeDot(currSlide);
  };

  const prevSlide = function () {
    currSlide == 0 ? (currSlide = maxSlide) : currSlide--;
    actualSlide(currSlide);
    activeDot(currSlide);
    console.log(currSlide);
  };

  // Isert dots on each slide
  slides.forEach(function (_, i) {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `
    <button class="dots__dot" data-slide=${i}></button>
    `
    );
  });

  // initialize page
  const init = function () {
    actualSlide(0);
    activeDot(0);
  };
  init();

  // Listeners
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    e.key == 'ArrowRight' && nextSlide();
    e.key == 'ArrowLeft' && prevSlide();
  });
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      currSlide = Number(e.target.dataset.slide);

      actualSlide(currSlide);
      activeDot(currSlide);
    }
  });
};

slider();

console.log(`
================ USANDO SETAS E CRIANDO OS DOTS ====================
- Criar funcoes para proximo e slide e anterior e vincular botoes e cliques,
- Botao direito usa arrowRight chamando next slide e esquerdo prevSlide,
- Temos no codigo um container vazio para que os dots sejam construidos uti-
lizando o javascript,
- Cada dot deve conter sua propria classe de criacao, um data-slide para 
atribuir a cada dot seu slide correspondente,
- Para cada slide criar seu proprio dot passando foreach,
- Fazer a escuta dos dots por delegacao do container,
- A determinacao do dot ativo devera ser feita em uma funcao a parte pois se-
ra utilizada tambem quando clicarmos nas setas com o mouse e quando usarmos o
teclado,
- Esta funcao tera como parametro o numero do slide,
- Quando carregarmos a pagina o dot inicial deve ser ativado junto,
- Separar todas as funcoes de inicio dentro de um init a parte,


`);
