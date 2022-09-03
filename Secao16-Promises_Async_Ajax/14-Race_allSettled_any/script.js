'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageContainer = document.querySelector('.images');
///////////////////////////////////////

// RACE
// Como se fosse uma corrida, colocamos 2 promises em paralelo e a que carregar primeiro ganha
// util para ser utilizado quando temos problemas de conexao
// podemos definir um tempo em setTimeout em uma promise e uma execucao em outra promise
// se a promise que queremos executar demorar muito o setTimeout ganha a corrida

// funcoes de apoio
const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);

    return res.json();
  });
};

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

// corrida entre pegar dados do pais e setTimeout
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/portugal`),
  timeout(0.5),
]).then(res => console.log(res[0]));

// PROMISE ALL SETTLED
// Quando utilizamos promise.all() se alguma dos promises falahar ela quebra o circuito
// com promise.allSettled() todos os resultados sao retornados mesmo que alguma das promises falhe
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

// PROMISE ANY
// Retorna a primeira fullfilled promise ignorando as promises rejeitadas
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));
