"use strict";

console.log(`
==================== STATIC METHODS ===================
  Metodos estaticos sao os metodos que nao podem ser herdados pelos prototipos.
Eles pertencem e podem ser invocados somente pelas funcoes construtoras. 

parseFloat é um metodo estatico pois está disponível somente para a função construtora
Number.

console.log(Number.parseFloat("12"));
`);

console.log(Number.parseFloat("12"));

console.log(`
  Para criar um metodo estatico para uma funcao construtora basta fazermos da seguinte maneira

  Criamos a classe:
      class Person {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
      }

  Atribuimos o metodo estatico
      Person.hey = function () {
        console.log("Hey there ✋🏻");
      };

  Chamamos o metodo estatico
      Person.hey();
    `);

class Person {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

Person.hey = function () {
  console.log("Hey there ✋🏻");
};

Person.hey();

console.log(`
  Se tentarmos chamar o metodo estatico no objeto retornara erro:

  Criamos o objeto
      const eu = new Person("eu", 1976);

  Chamamos o metodo estatico
      eu.hey();
`);

const eu = new Person("eu", 1976);
// eu.hey();

console.log(`
  Para criamos o metodo estatico dentro da classe seguindo o padrao ES6 basta
utilizarmos a palavra static antes do metodo

    class Car {
      constructor(make, speed) {
        this.make = make;
        this.speed = speed;
      }

      static best() {
        console.log("The car is better than bike");
      }
    }
`);

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  static best() {
    console.log(`The car is better than bike`);
  }
}

Car.best();
