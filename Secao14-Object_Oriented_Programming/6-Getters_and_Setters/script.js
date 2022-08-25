"use strict";

console.log(`
==================== GETTERS AND SETTERS ===================
  Getters and Setters sao basicamente funcoes que pegam e gravam atributos.

  Demonstracao de como Getters e Setters funcionam em objetos regulares em javascript

      const account = {
        owner: "Jonas",
        movements: [100, 300, 400, 200, 50],
      
        get latest() {
          return this.movements.slice(-1);
        },
      
        set latest(mov) {
          this.movements.push(mov);
        },
      };
      
      console.log(account.latest);
      
      `);
const account = {
  owner: "Jonas",
  movements: [100, 300, 400, 200, 50],

  get latest() {
    return this.movements.slice(-1);
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
console.log(`
      account.latest = 150;
      
      console.log(account.movements);
      `);

account.latest = 150;

console.log(account.movements);

console.log(`
  Vimos como getters and setters funcionam para um objeto regular. Classes tambem
possuem getters and setters e funcionam exatamente da mesma forma.

    class Person {
      constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
      }

      get age() {
        return 2037 - this.birthYear;
      }

      set nameCompleto(name) {
        if (name.includes(" ")) {
          this._fullName = name;
          console.log(this.fullName);
        } else {
          alert("Colocar nome completo");
        }
      }

    }

    const jessica = new Person("Jessica", 1990);

    
`);

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists (no caso fullName)
  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
      console.log(this.fullName);
    } else {
      alert("Colocar nome completo");
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new Person("Jessica Parker", 1990);
console.log("jessica.age => ", jessica.age);
jessica.fullName = "Maria do bairro";

console.log(`
Normalmente nao utilizamos getters and setters em js pois simplesmente nao é necessario.

As vezes utilizamos os setters principalmente quando precisamos validar algum valor como 
aconteceu no exemplo acima.
`);
