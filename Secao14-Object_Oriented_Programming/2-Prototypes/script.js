"use strict";

console.log(`
========================= PROTOTYPE =================================
  Todas as funcoes em javascript possuem acesso as propriedades definidas
em prototype.

  Ou seja, todo objeto criado a partir da instancia de uma funcao constru-
tora tera acesso as propriedades e metodos que definiremos na prototype.

  Para criarmos uma prototype:

      const Person = function (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
      };

      Metodo com prototype

      Person.prototype.calcAge = function () {
        console.log(2037 - this.birthYear);
      };

      const jonas = new Person("Jonas", 1990);

      jonas.calcAge();

      Atributo com prototype

      Person.prototype.species = "Homo Sapiens";
      console.log(jonas.species);


`);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

Person.prototype.species = "Homo Sapiens";

const jonas = new Person("Jonas", 1990);
console.log(jonas);

jonas.calcAge();
console.log(jonas.species);

console.log(`
  Para sabermos tudo o que esta definido dentro de um prototype
de um objeto podemos utilizar as sintaxes abaixo:

`);

console.log("jonas.__proto__  =>", jonas.__proto__);
console.log(
  "jonas.__proto__ === Person.prototype  =>",
  jonas.__proto__ === Person.prototype
);
console.log(
  "Person.prototype.isPrototypeOf(jonas) =>",
  Person.prototype.isPrototypeOf(jonas)
);

console.log(`
  Para sabermos se uma propriedade pertence diretamento ao objeto ou foi
criada a partir de um prototype, podemos utilizar a funcao hasOwnProperty()
`);

console.log(
  "jonas.hasOwnProperty('firstName') => ",
  jonas.hasOwnProperty("firstName")
);

console.log(
  "jonas.hasOwnProperty('species') => ",
  jonas.hasOwnProperty("species")
);
