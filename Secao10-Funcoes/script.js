"use strict";

//Diferenca entre passar argumentos por valor e por referencia
const flight = "LH1234";
const jonas = {
  name: "Jonas Cardoso",
  passport: 123456789,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = "LA9999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 123456789) {
    alert("Check In OK");
  } else {
    alert("Tenta de novo");
  }
};

checkIn(flight, jonas);
console.log(flight); // Resposta: LH1234 - nao alterou o valor original
console.log(jonas); // Resposta: name: Mr. Jonas Cardoso, Passport: 123456789 - alterou o valor original

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Resumo da opera: objetos sao alterados pois fazem referencia a um ponto da memoria.
// variaveis primitivas nao sao alteradas pois estao gravados naquele endereco.

// JavaScript nao possui passagem por referencia pois o valor na memoria nao e alterado por referencia.
// o que acontece com o objeto e que alteramos a referencia de endereco e nao de memoria.
