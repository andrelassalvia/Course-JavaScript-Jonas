"use strict";

console.log(`
========================= Prototypal_Inheritance_on_Built_In_Objects =================================
  Conforme visto na aula teorica anterior, podemos ir escalando a cadeia de prototypes ate
que o resultado seja nulo. E no escalar da cadeia podemos observar os metodos que o prototype
abaixo herda do prototype que esta acima. Exemplo destes metodos sao hasOwnProperty e isPrototypeOf

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

console.log("jonas.__proto__ => ", jonas.__proto__);
console.log("jonas.__proto__.__proto__ => ", jonas.__proto__.__proto__);
console.log(
  "jonas.__proto__.__proto__.__proto__ => ",
  jonas.__proto__.__proto__.__proto__
);

console.log(`
  Tudo dentro do js é construido na base de prototypes. Se quisermos saber todos os metodos
disponiveis para arrays, basta criamos um array e verificarmos seu __proto__

const arr =  [2, 3, 3, 4, 5, 7, 5, 5, 5, 8, 3, 4];
`);

const arr = [2, 3, 3, 4, 5, 7, 5, 5, 5, 8, 3, 4];
console.log("arr.__proto__ => ", arr.__proto__);

console.log(
  "arr.__proto__ === Array.prototype => ",
  arr.__proto__ === Array.prototype
);
console.log("arr.__proto__.__proto__ => ", arr.__proto__.__proto__);
console.log(
  "arr.__proto__.__proto__.__proto__ => ",
  arr.__proto__.__proto__.__proto__
);

console.log(`
Esta é a razao porque os arrays possuem acesso a todos os metodos listados. Devido ao prototype

O legal do prototype é que podemos criar qualquer metodo para ser vinculado a um objeto utilizando
o mecanismo do prototype. Assim com para arrays existe o metodo push, podemos criar um metodo nosso
que pode ser utilizado mais a frente em um codigo.

Array.prototype.unique = function () {
  return [...new Set(this)]; 
};
new Set([iterable]); // O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.

Contudo a criacao deste tipo de prototype nao é uma boa ideia pois a mesma funcionalidade que imaginamos pode vir
em uma nova versao do js ou o mesmo nome que criamos ja possa existir e quebrar o codigo. Trabalhar em equipe
de desenvolvedores tbem se torna complicado.
`);

Array.prototype.unique = function () {
  return [...new Set(this)]; // O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);
