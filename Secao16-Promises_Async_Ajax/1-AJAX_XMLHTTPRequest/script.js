'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// coloca tudo dentro de uma funcao para poder chamar mais de um pais
let countries = function (country) {
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

    console.log(data);

    // cria o html com os dados do objeto
    let html = `
      <article class="country">
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
  });
};

// chama as funcoes para renderizar os paises que queremos
countries('portugal');
countries('usa');
countries('brazil');
countries('united kingdom');
