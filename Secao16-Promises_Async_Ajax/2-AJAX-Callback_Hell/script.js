'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////////////// QUANDO UM CALLBACK VEM DENTRO DE OUTRO

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

// ====================================================== //

// coloca tudo dentro de uma funcao para poder chamar mais de um pais
let getCountryAndNeighbour = function (country) {
  // cria um objeto
  const request = new XMLHttpRequest();

  // usa metodos da classe para buscar informacoes da API
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  // quando a resposta da API for carregada chama uma funcao para renderizar as informacoes na tela
  request.addEventListener('load', function () {
    // Dentro da funcao:
    // guarda as informacoes do objeto fora de array
    const [data] = JSON.parse(this.responseText);

    // render country
    renderCountry(data);

    // render neighbour
    // contar quantos vizinhos tem
    let numberNeighbours = Object.keys(data.borders).length;

    // se tiver algum
    if (numberNeighbours == 0) return;

    // coloca todos dentro de um array
    let neighbour = data.borders;

    // loop pelo array puxando os dados de cada um
    neighbour.forEach(el => {
      let requestNeighbour = new XMLHttpRequest();
      requestNeighbour.open(
        'GET',
        `https://restcountries.com/v3.1/alpha/${el}`
      );
      requestNeighbour.send();
      requestNeighbour.addEventListener('load', function () {
        // salva os dados do pais vizinho e renderiza
        let [dataNeighbour] = JSON.parse(this.responseText);
        renderCountry(dataNeighbour, 'neighbour');
      });
    });

    // com os dados de cada um renderiza as informacoes
  });
};

// chama as funcoes para renderizar os paises que queremos
getCountryAndNeighbour('united kingdom');
