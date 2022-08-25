"use strict";

console.log(`
==================== ENCAPSULATION ===================

  Em javascript nao existe uma palavra chave especifica para implementarmos uma
encapsulation.

  Como esta condicao especifica nao existe, precisamos utilizar de uma logica 
propria para encapsular um atributo ou metodo.

  A primeira convencao para tornar um atributo private é utilizar um sublinhado
antes dele:

  _movements = [];

  Isto é só uma convencao para mostrar a voce e aos demais da equipe que este 
atributo está protegido e nao deve ser tocado.

  Se quisermos acessar o valor deste atributo devemos criar um metodo para pega-lo.
Da mesma maneira se quisermos altera-lo.

  Seguindo estas regras, o codigo da licao anterior ficara protegido da seguinte forma:

  class Account {
    constructor(owner, currency, pin) {
      this.owner = owner;
      this.currency = currency;
      this._pin = pin;
      this._movements = [];
      this.locale = navigator.language;
    }
  
    getMovements() {
      return this._movements;
    }
  
    deposit(val) {
      this._movements.push(val);
    }
  
    withdraw(val) {
      this.deposit(-val);
    }
  
    _approveLoan() {
      return true;
    }
  
    loan(val) {
      if (this._approveLoan()) {
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
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan() {
    return true;
  }

  loan(val) {
    if (this._approveLoan()) {
      this.deposit(val);
      console.log(`Emprestimo aprovado no valor de ${val}`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(150);
acc1.withdraw(50);
acc1.loan(200);
