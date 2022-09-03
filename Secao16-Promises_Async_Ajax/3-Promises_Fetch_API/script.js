'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// JEITO MODERNO DE FAZER AJAX + EVITAR CALLBACK HELL COM PROMISES

let renderCountry = function (data, neighbour = '') {
  // cria o html com os dados do objeto
  let html = `
  <article class="country ${neighbour}">
    <img class="country__img" src="${data.flags.png}"/>
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1_000_000
      ).toFixed(1)} millions</p>
      <p class="country__row"><span>🗣️</span>${
        Object.keys(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.keys(data.currencies)[0]
      }</p>
    </div>
  </article>
  `;

  // insere o html no container correto
  countriesContainer.insertAdjacentHTML('beforeend', html);

  // muda a opacidade do container para tornar o html visivel
  countriesContainer.style.opacity = 1;
};

// tornando o codigo acima limpo
const getCountryAndNeighbour = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(response => {
      renderCountry(response[0]);
      let neighbours = response[0].borders;
      if (!neighbours) return;
      for (let i = 0; i < neighbours.length; i++) {
        fetch(`https://restcountries.com/v3.1/alpha/${neighbours[i]}`)
          .then(response => response.json())
          .then(data => renderCountry(data[0], 'neighbour'));
      }
    })
    .catch(errors => {
      console.log(errors);
    });
};

getCountryAndNeighbour('germany');
