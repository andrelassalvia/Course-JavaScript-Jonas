"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// DISPLAY MOVEMENTS
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort
    ? movements.slice().sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
      })
    : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

// COMPUTING USERNAMES
console.log("COMPUTING USERNAME");
console.log(`Vamos reduzir o nome de um usuario às suas iniciais`);
const user = "Steven Thomas Williams"; // usuario stw
const username = user.toLowerCase().split(" ");
console.log("Array username ->", username);
console.log("Novo array com somente a plimeira letra utilizando Map Method");
console.log(`username.map((name) => name.at(0))`);
const usernameFirstLetterArray = username.map((name) => name.at(0));
console.log(usernameFirstLetterArray);
console.log("Junta as letras com Join('') - sem espaco entre as aspas");
const usernameFirstLetter = usernameFirstLetterArray.join("");
console.log(usernameFirstLetter);
console.log(
  "Poderiamos fazer todos estes metodos em uma so constante, basta ir colocanco ponto"
);
console.log(`const username1 = user
  .toLowerCase() -> para passar tudo para minusculo
  .split(" ") -> para transformar a string em array separando pelo espaco
  .map((name) => name.at(0)) -> Map Method + arrow function para criar novo array com a posicao 0 de cada elemento
  .join(""); -> junta os elementos de um array utilizando o que esta entre aspas (no caso sem espaco)`);
const username1 = user
  .toLowerCase()
  .split(" ")
  .map((name) => name.at(0))
  .join("");
console.log("Resultado =>", username1);
console.log(`
`);
console.log("============================================");
console.log("Vamos transformar em uma funcao para valer para qualquer usuario");
console.log(`function createUsernameUser(user) {
  return user
    .toLowerCase()
    .split(" ")
    .map((name) => name.at(0))
    .join("");
}`);
function createUsernameUser(user) {
  return user
    .toLowerCase()
    .split(" ")
    .map((name) => name.at(0))
    .join("");
}

console.log("============================================");
console.log(
  `
No projeto banklist, precisamos criar um username para cada usuario registrado. 

A ideia aqui nao é criar um novo array com os usernames e sim aproveitar um array que ja foi criado com os accounts e inserir um novo elemento chamado username

Nesse caso utilizar o Map Method não é indicado pois ele cria um novo array.

O Foreach é o método indicado para isso.

`
);
console.log("============================================");

console.log("const accounts = [account1, account2, account3, account4]");
console.log("account 1", account1);

console.log(
  `
Utilizando o foreach:
  -Criamos uma funcao para percorrer os objetos, 
  -achamos o owner da conta,
  -criamos um username.
  `
);
console.log(`function createUsername(accs) 
    accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name.at(0))
      .join("");
  })
  createUsername(accounts);
  `);
function createUsername(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name.at(0))
      .join("");
  });
}
createUsername(accounts);
console.log(
  "Para verificarmos se deu certo, chamamos a funcao e damos cl() no objeto"
);
console.log(accounts);
console.log(`

`);

// CALCULAR E DISPLAY SALDO BALANCE

console.log(`CALCULAR E IMPRIMIR BALANCE`);
console.log(`Vamos utilizar o Reduce Method`);
console.log(`Precisamos criar uma funcao que valha para qualquer usuario`);
console.log(`
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = balance;

  calcDisplayBalance(account1.movements);

`);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `£${balance}`;
};
// calcDisplayBalance(account1.movements);

// CALCULAR TOTAL DE SAIDAS E ENTRADAS E MOSTRAR NO DISPLAY

const calcDisplaySummary = function (account) {
  const interest = account.interestRate; // Cada conta possui um interest diferente
  labelSumIn.textContent = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = Math.abs(
    account.movements
      .filter((mov) => mov < 0)
      .reduce((acc, mov) => acc + mov, 0)
  );
  labelSumInterest.textContent = account.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * interest) / 100)
    .filter((intr, i, arr) => intr > 1)
    .reduce((acc, mov) => acc + mov);
};

// interest(account1.movements);

// ATUALIZACAO TELA
const update = function (movements, account) {
  displayMovements(movements);
  calcDisplayBalance(movements);
  calcDisplaySummary(account);
};

// LOGIN

/*
- todo o conjunto sera disparado pelo click do botao.
- coloca as iniciais em user
- get text
- procura dentro do array de objetos user igual - find
- volta com objeto
- get pin
- compara o text com o atributo pin deste objeto
- sendo iguais muda a transicao da tela e carrega o objeto
- chama os metodos para carregar as informacoes na tela
*/

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === parseInt(inputLoginPin.value)) {
    // Display UI and messages
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // clear user and pin
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Atualiza a tela:
    update(currentAccount.movements, currentAccount);
    // Display movements
    // displayMovements(currentAccount.movements);

    // // Display balance
    // calcDisplayBalance(currentAccount.movements);

    // // Display Summary
    // calcDisplaySummary(currentAccount);
  }
});

// TRANSFER MONEY
let creditAccount;
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  let transferAmount = -Number(inputTransferAmount.value);
  creditAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  // debitar movements conta atual => saldo > 0
  const balance = currentAccount.movements.reduce((acc, mov) => {
    return (acc = acc + mov);
  }, 0);
  if (
    transferAmount < 0 &&
    balance + transferAmount >= 0 &&
    creditAccount.username !== currentAccount.username
  ) {
    currentAccount.movements.push(transferAmount);

    // creditar movements conta indicada
    creditAccount.movements.push(Math.abs(transferAmount));

    // apagar texto colocado nas cx de dialogo
    inputTransferAmount.value = inputTransferTo.value = "";
    inputTransferTo.blur();
    inputTransferAmount.blur();

    update(currentAccount.movements, currentAccount);
  }
});

// CLOSE ACCOUNT

// precisa ser a mesma conta que esta logada
//
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === Number(currentAccount.pin)
  ) {
    // find account in array
    const bye = accounts.findIndex(
      (acc) => acc.username === inputCloseUsername.value
    );
    // delete account
    accounts.splice(bye, 1);
    console.log("Conta apagada");
    console.log(accounts);
    // Hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log("Usuario e/ou senha incorretos");
  }
});

// REQUEST LOAN

// Emprestimos sao feitos caso a conta possua algum deposito >= 10% do valor solicitado

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  // checar o valor solicitado
  const loanRequested = Number(inputLoanAmount.value);
  // comparar com valor dos depositos
  const validAmount = currentAccount.movements.some(
    (mov) => mov >= 0.1 * loanRequested
  );
  if (validAmount) {
    currentAccount.movements.push(loanRequested);
    update(currentAccount.movements, currentAccount);
  } else {
    console.log(`Valor nao liberado.`);
  }
  inputLoanAmount.value = "";
});

// SORT BUTTON
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
