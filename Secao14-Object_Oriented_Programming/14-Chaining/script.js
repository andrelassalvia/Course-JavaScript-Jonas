"use strict";

console.log(`
==================== CHAINING ===================
  Para podermos encadear os metodos de uma classe precisamos que o return de cada um
dos metodos chamados seja a propria classe. Lembrando que a classe é representada por
this.

  Isto é necessario pois, do contrario, o retorno do metodo seria undefined e nao podemos 
encadear um metodo sobre um resultado indefinido.

  Quando o metodo anterior retorna o proprio objeto, podemos passar o metodo seguinte pois
este sera executado sobre o objeto retornado anteriormente.
  
 `);

class Account {
  // 1- Public fields
  locale = navigator.language;

  // 2- Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // 3- Public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  static helper() {
    return true;
  }

  // 4- Private methods
  #approveLoan() {
    return true;
  }

  loan(val) {
    if (this.#approveLoan()) {
      this.deposit(val);
      console.log(`Emprestimo aprovado no valor de ${val}`);
    }
    return this;
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(150);
acc1.withdraw(50);
acc1.loan(200);
