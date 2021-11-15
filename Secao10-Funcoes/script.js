"use strict";

// Usando flag global para retirar espacos entre as palavras
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// oneWord = oneWord("A patria que te Pariu");
// console.log(oneWord);

// Usando spread operator e destructuring assignment para CAPITALIZAR primeira palavra
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-Order function
const transformer = function (str, fn) {
  console.log(`Original: ${str}`);
  console.log(`Modificado: ${fn(str)}`);
  console.log(`Transformado por: ${fn.name}`);
};

transformer("Somente sei que nada sei", upperFirstWord);
transformer("Somente sei que nada sei", oneWord);

// const teste = "tudo que sobe desce";
// console.log(teste.split(" "));
// const [first, ...others] = teste.split(" ");
// console.log(first);
// console.log(others);
// const junta = [first.toUpperCase(), ...others].join(" ");
// console.log(junta);

const high5 = function () {
  console.log("🖐🏻");
};

document.body.addEventListener("click", high5);

["Adam", "Maria", "Tonho"].forEach(high5);
