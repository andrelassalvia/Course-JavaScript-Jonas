"use strict";

// funcoes que retornam outras funcoes
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hey");
greetHey("Jonas");
greetHey("Michael");
greet("Saudacoes")("Moacir");

// Escrevendo em arrow function
const saudacao = (aceno) => (pessoa) => console.log(`${aceno} ${pessoa}`);

saudacao("Fala")("Joao");
