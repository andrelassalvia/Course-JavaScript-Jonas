"use strict";

console.log(`
==================== ENCAPSULATION - PRIVATE CLASS FIELDS AND METHODS ===================
  
  Temos 4 maneiras de declarar o encapsulamento:
    1- Public fields;
    2- Private fields;
    3- Public methods;
    4- Private methods;

    
    class Account {
      
      PUBLIC FIELDS - basta declararmos uma variavel ou constante sem chamar let ou const, e antes
    do construtor da classe.
        locale = navigator.language;

      PRIVATE FIELDS - colocar uma hash # antes do atributo. Torna inacessivel fora da classe.
        #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
 
  }

      PUBLIC METHODS - Sao os metodos que estamos acostumados a escrever
        getMovements() {
          return this._movements;
        }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

      PRIVATE METHODS - Como no private fields basta colocar # antes
        #approveLoan() {
          return true;
        }

  loan(val) {
    if (this.#approveLoan()) {
      this.deposit(val);
      console.log(Emprestimo aprovado no valor de {val});
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(150);
acc1.withdraw(50);
acc1.loan(200);
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
  }

  withdraw(val) {
    this.deposit(-val);
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
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(150);
acc1.withdraw(50);
acc1.loan(200);
