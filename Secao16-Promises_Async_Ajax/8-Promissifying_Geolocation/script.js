'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
navigator.geolocation.getCurrentPosition(
  position => {
    console.log(position);
  },
  error => {
    console.error(error);
  }
);
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error)
    );
  });
};

getPosition()
  .then(data => console.log('REsposta do promise        ', data))
  .catch(err => console.error(err));

// ///////////////////////////////////////////
const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude, longitude } = pos.coords;

      return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch(err => console.log(`${err.message}`));
};

whereAmI();
