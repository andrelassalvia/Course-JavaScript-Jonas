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
  try {
    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;
    const res = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    );
    if (!res.ok) {
      throw new Error('Probleming getting country');
    }
    const data = await res.json();
    return `You are in ${data.city}, ${data.country}`;
  } catch (err) {
    console.error('ERROR', err);
    throw err;
  }
};
// whereAmI().then(city => console.log(city));
// console.log('first');

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.error(`2:${err.message}`);
  }
})();
