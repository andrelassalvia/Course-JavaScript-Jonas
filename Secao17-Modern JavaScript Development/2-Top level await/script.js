import * as ShoppingCart from "./shoppingCart.js";

// Podemos utilizar await fora de uma funcao async e dentro de modules pois modules sao naturalmente assincronos
// isso significa que o script dentro do html deve ser type="module"

console.log("Starting");
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
console.log(data);
// utilizar await dentro de modules bloqueia o carregamento do codigo.
// verificamos isso no console.log abaixo que é carregado apos os awais acima
console.log("finished");

// por vezes precisamos que uma funcao async retorne os dados

// vamos criar uma funcao que retorne o ultimo post
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost(); // vai retornar uma promise<pending>. Se passarmos await retorna valores
const lastPostAwait = await getLastPost();
console.log(lastPost);
console.log(lastPostAwait);
console.log("apos get last post");

// se um modulo importa um modulo que possui um top-level await, entao este modulo que esta importando
// aguardara que o modulo importado termine o bloco de codigo
