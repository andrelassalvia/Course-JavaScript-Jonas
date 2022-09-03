'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Vamos construir uma promise para lidar com um bilhete de loteria
const lotteryPromse = new Promise(function (resolve, reject) {
  console.log('Lottery is happening...');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('you win');
    } else {
      reject(new Error('You lost'));
    }
  }, 3000);
});

lotteryPromse
  .then(response => console.log(response))
  .catch(error => console.log(error));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 1 second');
  });

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log(' 4 seconds passed');
    return wait(1);
  });
