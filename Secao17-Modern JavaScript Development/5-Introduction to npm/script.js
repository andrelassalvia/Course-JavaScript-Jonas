import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "pizza", quantity: 5 },
    { product: "bread", quantity: 5 },
  ],
  user: { loggedIn: true },
};

/**
 * Se copiarmos state com js tradicional qualquer alteracao que seja efetuada em
 * state automaticamente mudara os valores do clone
 */
const stateClone = Object.assign({}, state);
console.log("stateClone antes", stateClone);

/**
 * Se utilizarmos o deepClone que baixamos do lodash podemos fazer clone sem alterar
 * seus valores
 */

const stateCloneDeep = cloneDeep(state);
console.log("cloneDeep antes", stateCloneDeep);

state.user.loggedIn = false;

console.log("stateClone depois", stateClone);
console.log("cloneDeep depois", stateCloneDeep);
