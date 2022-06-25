/* Operadores */
// Aritimeticos, atribuição, comparação, logicos e Bitwise //
/* Aritiméticos */ /* +, -, *, /, */
console.log('Aula 6')
console.log(' ')

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

/* Operadores lógicos */ 

// Operador Lógico e (&&)
// Retorna True se os dois operandos forem true

console.log(true && false); 
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

// Operador Lógico ou (||)

podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('pode aplicar: ', podeAplicar);

//Operador NOT (!) 

let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado ', candidatoRecusado)


/* Comparações não Boolean */

// Falsy 
//undefined
//null
// 0 
// false
//''
// Nan - not a number 

//truthy
// exemplo false || true

let corPersonalizada = '' ;
let corPadrao= 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
console.log(' ')
console.log('Fim!')

