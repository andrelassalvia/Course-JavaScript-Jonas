'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// JEITO MODERNO DE FAZER AJAX + EVITAR CALLBACK HELL COM PROMISES

// FUNCTION to render country
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
  // countriesContainer.style.opacity = 1;
};

// FUNCTION to render error
const renderError = function (msg) {
  countriesContainer.insertAdjacentHTML('beforeend', msg);

  // countriesContainer.style.opacity = 1;
};

// FUNCTION to get JSON data
const getJson = function (url, errorMessage = `Something went wrong!`) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage} (${response.status})`);
    }
    return response.json();
  });
};

// tornando o codigo acima limpo
// const getCountryAndNeighbour = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       // trhow an error manually
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(response => {
//       renderCountry(response[0]);
//       let neighbours = response[0].borders;
//       if (!neighbours) return;
//       for (let i = 0; i < neighbours.length; i++) {
//         fetch(`https://restcountries.com/v3.1/alpha/${neighbours[i]}`)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error(`Country not found ${response.status}`);
//             }
//             response.json();
//           })
//           .then(data => renderCountry(data[0], 'neighbour'));
//       }
//     }) // function to be called when the promises is rejected - must be on the end of the chain
//     .catch(errors => {
//       renderError(`Something get wrong: ${errors.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     }); // o metodo finally sempre é chamadonao importa se houve aceite ou nao da promise. Nem sempre ele é útil. Mas no caso de colocarmos um spinner é bastante útil pois ele le as duas situacoes ao mesmo tempo
// };

const getCountryAndNeighbour = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(response => {
      console.log(response);
      renderCountry(response[0]);
      let neighbours = response[0].borders;
      if (!neighbours) return;
      for (let i = 0; i < neighbours.length; i++) {
        getJson(
          `https://restcountries.com/v3.1/alpha/${neighbours[i]}`,
          `Neighbour not found`
        ).then(data => renderCountry(data[0], 'neighbour'));
      }
    }) // function to be called when the promises is rejected - must be on the end of the chain
    .catch(errors => {
      renderError(`Something get wrong: ${errors.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    }); // o metodo finally sempre é chamadonao importa se houve aceite ou nao da promise. Nem sempre ele é útil. Mas no caso de colocarmos um spinner é bastante útil pois ele le as duas situacoes ao mesmo tempo
};

// button to find pmy country
btn.addEventListener('click', function () {
  getCountryAndNeighbour('new');
});
