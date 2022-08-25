"use strict";

console.log(`
==================== INHERITANCE BETWEEN CLASSES - OBJECT CREATE ===================
  Utilizar o Object.create é basicamente ficar criando um objeto dentro de outro. Como
fizemos para a heranca em funcoes construtoras, podemos ir criando diversos objetos
a partir de outro e ir herdando seus atributos e metodos.

  Vamos criar o objeto Person:

      const Person = {
        init(firstName, birthYear) {
          this.firstName = firstName;
          this.birthYear = birthYear;
        },
      
        calcAge() {
          console.log(2037 - this.birthYear);
        },
      };

  E instanciar o objeto Person:

      const mike = Object.create(Person);
      mike.firstName = "Mike";
      mike.birthYear = 2000;
`);

const Person = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const mike = Object.create(Person);
mike.firstName = "Mike";
console.log(mike);
mike.birthYear = 2000;
console.log(mike);

console.log(`
Chamando o metodo calcAge: mike.calcAge();
`);
mike.calcAge();

console.log(`
Agora vamos criar um novo objeto chamado Student com a mesma logica de criar um objeto
dentro de outro.

    const Student = Object.create(Person);


Criar as funcoes dentro do objeto Student:

    Student.init = function (firstName, birthYear, course) {
      Person.init.call(this, firstName, birthYear);
      this.course = course;
    };

    Student.introduce = function () {
      console.log(Ola, meu nome é {this.firstName} e eu estudo {this.course});
    };


Vamos instanciar o objeto Student com a logica de criar um objeto dentro de outro:

    const jana = Object.create(Student);
    jana.firstName = "Jana";
    jana.birthYear = 1996;
    jana.course = "TI";

`);

const Student = Object.create(Person);
Student.init = function (firstName, birthYear, course) {
  Person.init.call(this, firstName, birthYear);
  this.course = course;
};
Student.introduce = function () {
  console.log(`Ola, meu nome é ${this.firstName} e eu estudo ${this.course}`);
};

const jana = Object.create(Student);
jana.firstName = "Jana";
jana.birthYear = 1996;
jana.course = "TI";

console.log(jana);

console.log(`
E podemos chamar o metodo especifico de Student: jana.introduce();
`);
jana.introduce();
console.log(`
Ou o metodo de Person: jana.calcAge();
`);
jana.calcAge();
