'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageContainer = document.querySelector('.images');
///////////////////////////////////////

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// ASYNC E AWAIT tem a ver como consumimos as promises.
// Como as promises sao construidas nao é o interesse aqui.
// passamos aync na funcao e await onde for assincrono
const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude, longitude } = pos.coords;
  const res = await fetch(
    `https://geocode.xyz/${latitude},${longitude}?geoit=json`
  );
  console.log(res);
  const data = await res.json();
  console.log(data);
};
whereAmI();
console.log('first');
