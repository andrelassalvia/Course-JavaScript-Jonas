"use strict";

console.log(`
==================== ES6 CLASSES ===================
Uma nova forma de criar classes. Faz a mesma coisa que fizemos anteriormente
mas de outra maneira.

Temos 2 sintaxes para a criacao de classes com ES6. Em ambas chamamos o cons-
tructor que funciona como a funcao construtora da classe e os metodos podem
ser passados dentro da classe mas fora do constructor que serao entendidos
como prototypes

      class PersonCl {
        constructor(firstName, birthYear) {
          this.firstName = firstName;
          this.birthYear = birthYear;
        }
      }


      const CarCl = class {
        constructor(make, speed) {
          this.make = make;
          this.speed = speed;
        }
      };

      const jessica = new PersonCl("Jessica", 1990);
      const bmw = new CarCl("BMW", 120);
`);

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const CarCl = class {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
};

const jessica = new PersonCl("Jessica", 1990);
const bmw = new CarCl("BMW", 120);

console.log(jessica);
console.log(bmw);

jessica.calcAge();
bmw.accelerate();
bmw.brake();

console.log(`
Alguns aspectos importantes que devem ser considerados:
  1- Classes nao sao hoisteds, ou seja, nao podem ser invocadas antes de serem
  declaradas como conseguimos fazer com as funcoes,

  2- Assim como as funcoes, as classes podem ser passadas dentro de funcoes e 
  serem retornadas das funcoes. Isto é possivel pois, na realidade, classes sao
  nada mais que um tipo de funcao por detras das cortinas,

  3- Classes sao executadas em strict mode,
`);
