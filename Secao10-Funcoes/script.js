"use strict";

// Objeto
const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],
  // funcao como atributo do objeto
  book(flightNum, name) {
    console.log(
      `${name} booked a flight with ${this.airline} flight number ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// chama a funcao do objeto
lufthansa.book(239, "Mossoro");
console.log(lufthansa);

const euroWings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// Define a constante book como sendo a funcao do primeiro objeto
const book = lufthansa.book;

// Chamando a funcao desta forma Nao funciona
// book(23, "Maria");

// Para chamar um metodo de um objeto em outro objeto
// CALL METHOD
book.call(euroWings, 23, "Maria Jose");
book.call(lufthansa, 654, "Tiao Carrero");

console.log(euroWings);
console.log(lufthansa);

// Outra forma de chamar um metodo de um objeto em outro objeto
// APPLY METHOD - Segundo argumento deve ser um array
book.apply(euroWings, [666, "Ze do Capeta"]);
// or
const flghtData = [666, "Ze do Capeta"];
book.call(euroWings, ...flghtData);
