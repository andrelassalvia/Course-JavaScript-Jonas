'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageContainer = document.querySelector('.images');
///////////////////////////////////////

// Part 1
// Carregar imagens em sequencia com intervalo de 2 segundos

// Part2
// Criar funcoes assincronas para carregar um array de imagens e passar uma classe em cada imagem criada

// funcoes de apoio
const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

// funcao para carregar uma imagem de forma assincrona em html
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// PART 1
const loadNPause = async function () {
  try {
    // image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};

// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    // unsando map o retorno sera um array de promises
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    // para retornar os valores e nao as promises utilizamos na sequecia o Promisse.all()
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    // e com os valores em maos podemos fazer um foreach para aplicar a classe desejada
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
