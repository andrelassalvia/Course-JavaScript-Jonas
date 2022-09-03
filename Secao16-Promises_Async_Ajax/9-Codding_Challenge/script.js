'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageContainer = document.querySelector('.images');
///////////////////////////////////////
// Imagens aparecerao na tela em intervalos determinados

// as imagens serao carregadas de forma assincrona

// criar uma funcao
// criar uma promise dentro da funcao
// promisse carrega a imagem
// imagem com document create element
// define src da imagem igual parametro da funcao
// depois q imagem carregar, append no cantainer de imagens
// Ha intervalo entre o carregamento de cada imagem

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};
const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement('img');
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

let currentImage;
createImg('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('image 1 loades');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImg('img/img-2.jpg');
  })
  .then(img => {
    console.log('Image 2 loaded');
    currentImage = img;
  })
  .catch(err => {
    console.error(err);
  });
