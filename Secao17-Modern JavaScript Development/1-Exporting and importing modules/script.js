// importing module

// UMA DAS FORMAS DE FAZER IMPORTACAO

// import { addToCart } from "./shoppingCart.js";
// import { totalPrice as price, totalProd } from "./shoppingCart.js";
// addToCart("bread", 5);
// console.log(price, totalProd);
console.log("importing module");
// console.log(shippingCost);

// ============================================================== //

// FORMA DE IMPORTAR TUDO O QUE VEM DE UM MODULO
//
// Cria um objeto e importa para dentro dele

import * as ShoppingCart from "./shoppingCart.js";
ShoppingCart.addToCart("bread", 5);
console.log(ShoppingCart.totalPrice);

import add, { cart } from "./shoppingCart.js";
add("pao", 12);
add("pizza", 2);
add("chimarrao", 1);

console.log(cart);
