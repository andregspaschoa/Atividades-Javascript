/* Operadores */
// Aritimeticos, atribuição, comparação, logicos e Bitwise //
/* Aritiméticos */ /* +, -, *, /, */

let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);
// ++ -- 

let idade2 = 18;
console.log(-- idade2);
console.log(idade2);

/* operadores de atribuição */ 

let valorTecladoGamer = 100;

valorTecladoGamer += valorTecladoGamer;

console.log(valorTecladoGamer);

/* Operadores de igualdade */

// igualdade estrita

console.log (1 === 1);
console.log('1' === 1);

// Igualdade solta 

console.log ( 1 == 1);
console.log ('1' == 1);

/* essa forma acima não é a mais correta de se comparar */ 

/* Operador Ternário */ 

let pontos = 100; 
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

