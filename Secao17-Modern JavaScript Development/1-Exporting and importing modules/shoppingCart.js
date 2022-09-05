// exportig module
console.log("exporting module");

const shippingCost = 10;
export const cart = [];

// posso exportar diretamente nomeado
export const addToCart = function (prod, qttity) {
  cart.push({ prod, qttity });
  console.log(`${qttity} ${prod} added to cart`);
};

// posso exportar em forma de objeto nomeado
const totalPrice = 237;
const totalProd = 24;

export { totalPrice, totalProd };

// DEFAULT EXPORT
// Utilizamos quando queremos exportar somente uma coisa por modulo
// nao precisamos passar nenhum nome na exportacao.
// Podemos nomear o que estamos exportando na importacao
export default function (prod, qttity) {
  cart.push({ prod, qttity });
  console.log(`${qttity} ${prod} added to cart`);
}
