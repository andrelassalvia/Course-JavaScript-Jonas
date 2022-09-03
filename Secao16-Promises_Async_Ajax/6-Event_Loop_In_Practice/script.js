'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// Os consoles.logs irao mostrar a ordem em que as fucnoes sao carregadas.
// - Primeiro sincrono
// - Depois assincrono promises
// - por ultimo assincrono comum

console.log('Test start');
setTimeout(() => console.log('O sec timer'), 0);
Promise.resolve('resolved promise 1').then(response => {
  console.log(response);
});
Promise.resolve('Resolved promise 2').then(response => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(response);
});
console.log(`Test end`);
