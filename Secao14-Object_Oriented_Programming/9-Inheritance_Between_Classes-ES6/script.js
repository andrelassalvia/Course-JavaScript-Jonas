"use strict";

console.log(`
==================== INHERITANCE BETWEEN CLASSES - ES6 ===================
  Da mesma forma que fizemos na demonstracao de heranca de classes com funcoes 
construtoras, vamos criar duas classes: Person e Student no modelo ES6:

  Criacao da classe Person:

      class Person {
        constructor(firstName, birthYear) {
          this.firstName = firstName;
          this.birthYear = birthYear;
        }
      
        calcAge() {
          console.log(2037 - this.birthYear);
        }
      }

  Para que a classe Student herde os atributos e metodos de Person, utilizamos o comando
extends ao criar a classe:

    class Student extends Person {
      constructor(firstName, birthYear, course) {

        E passamos a funcao super() para chamar os atributos da classe pai. Esta funcao
      super() deve sempre ser chamada antes da definicao dos demais atributos pois é ela
      a responsavel pela chamada da palavra-chave this.

        super(firstName, birthYear);
        this.course = course;
      }

      introduce() {
        console.log(Ola, meu nome é {this.firstName} e estudo {this.course});
      }
    }

    Caso nao tivessemos nenhum atributo novo para a classe Student, ou seja, se nao houvesse
  course neste caso, nao precisariamos utilizar a funcao super(). Usar somente o extends ja 
  seria o suficiente.

  `);

class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

class Student extends Person {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Ola, meu nome é ${this.firstName} e estudo ${this.course}`);
  }
}

console.log(`
Gerar um objeto para a classe Student:

    const mike = new Student("Mike", 2002, "Aspone");

E chamar metodos proprios e herdados:

    mike.calcAge();
`);

const mike = new Student("Mike", 2002, "Aspone");
mike.calcAge();

console.log(`
    mike.introduce();`);
mike.introduce();
