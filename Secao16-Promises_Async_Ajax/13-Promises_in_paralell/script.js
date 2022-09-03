'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imageContainer = document.querySelector('.images');
///////////////////////////////////////

// Se rodarmos promises fazendo com que uma promise seja carregada esperando a
// finalizacao da promise anterior, entao muito tempo sera utilizado

// para que todas as promises sejam carregadas simultaneamente utilizamos Promise.all()

// funcoes de apoio
const getJSON = function (url, errorMsg = `Something went wrong`) {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);

    return res.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // PROMISES CARREGADAS EM SERIE
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

    // PROMISES CARREGADAS EM PARALELO
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital[0]));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('portugal', 'brazil', 'spain');
