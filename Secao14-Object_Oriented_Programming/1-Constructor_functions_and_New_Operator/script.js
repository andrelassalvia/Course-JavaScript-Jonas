"use strict";

console.log(`
=========== CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR ==============
  A constructor function é uma funcao comum utilizada para construir 
um objeto a partir de uma funcao.

  Possui como convencao ter seu nome com a primeira letra em maiuscu-
la. 

  Nao pode ser construida com arrow function pois temos a necessidade
de utilizar o this em sua elaboracao e a arrow function nao possui es-
ta funcionalidade.

  A criacao da funcao construtora respeita, por detras das cortinas, a
seguinte logica:

    1- Criamos um novo objeto a partir da construtora usando o operador new,
    2- o new retorna um objeto vazio => new {},
    3- o new tambem chama a funcao construtora e habilita a possibilidade
    popularmos o objeto vazio utilizando o this => this = {},
    4- Este objeto vazio {} fica lincado com o prototype e é retornado
    automaticamente.

      const Person = function (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
      };
      
      const jonas = new Person("Jonas", 1990);

`);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1990);

console.log(jonas);

console.log(`
E podemos checar se um objeto é uma instancia de uma classe utilizando o instanceof

console.log(jonas instanceof Person);

`);

console.log(jonas instanceof Person);
