"use strict";

console.log(`
==================== ANOTHER CLASS EXAMPLE ===================
  Em classes podemos criar atributos mesmo nao passando parametros no construtor.
E podemos alterar estes atributos quando instanciamos a classe em um objeto.

  O objetivo desta aula é mostrar que sempre que quisermos alterar o valor de um 
atributo é sempre recomendável criar um método para isso.

  Também importante salientar que os métodos que se tornarao publicos serao aqueles
necessarios à alguma interacao com o usuario. Os metodos que carregam logicas internas
devem ser preservados desta interacao e protegidos por encapsulamento.
`);

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan() {
    return true;
  }

  loan(val) {
    if (this.approveLoan()) {
      this.deposit(val);
      console.log(`Emprestimo aprovado no valor de ${val}`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(150);
acc1.withdraw(50);
acc1.loan(200);
