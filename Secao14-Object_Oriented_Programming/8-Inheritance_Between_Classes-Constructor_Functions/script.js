"use strict";

console.log(`
==================== INHERITANCE BETWEEN CLASSES - CONSTRUCTOR FUNCTIONS ===================
  Lembrando que em strictu sensus classes nao existem em javascript, tudo sao objetos, vamos 
aprender como 1 classe pode herdar os atributos e metodos de outra classe.

  Para demonstracao utilizaremos 1 classe Person e outra Student. A classe Student sera a fi-
lha e herdara as propriedades de Person.

  Classe Person:

      const Person = function (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
      };
      
      Person.prototype.calcAge = function () {
        console.log(2037 - this.birthYear);
      };

  Classe Student:

    Para que Student herde atributos de Person precisamos utilizar o metodo estatico call junto a Person
  passando como primeiro parametro a propriedade this. O this criara um objeto vazio que sera preenchido
  com os parametros seguintes (firstName, birthYear)

      const Student = function (firstName, birthYear, course) {
        Person.call(this, firstName, birthYear); 
        this.course = course;
      };

    Para que Student tambem herde os metodos de Person, precisamos criar um objeto baseado em Person antes
  da criacao de qualquer outro prototype em Student. Isto porque Object.create sobrescreve qualquer informacao
  que o objeto porventura ja carregue.

      Student.prototype = Object.create(Person.prototype);

    E apos isso devolver a Student a condicao de ser a dona da funcoes construtoras. Isto é necessario para o
  codigo nao entender que os objetos criados a partir de Student pertencam a Person.

      Student.prototype.constructor = Student;

    Depois disso podemos criar os prototypes especificos de Student
      
      Student.prototype.introduce = function () {
        console.log("Ola, meu nome é {this.firstName} e estudo {this.course}");
      };

      const mike = new Student("Mike", 1990, "Psicologia");
  `);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`Ola, meu nome é ${this.firstName} e estudo ${this.course}`);
};

const mike = new Student("Mike", 1990, "Psicologia");

console.log(`Chamando a apresentacao de Mike: mike.introduce();
`);
mike.introduce();

console.log(`
Podemos chamar os metodos herdados de Person: mike.calcAge();`);
mike.calcAge();
