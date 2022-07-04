 const numeros = [1,2,3];

//1. Add Elementos a um Array

//inicio
numeros.unshift(0);  //insere o valor entre () no inicio
console.log(numeros);
//meio
numeros.splice(1,0,'a');
console.log(numeros);
//final
numeros.push(5);
console.log(numeros);

//2.Encontrando Elementos do Tipo Primitivos

const numeros1 = [1,2,3,4];
console.log(numeros.indexOf(2));
console.log(numeros.lastIndexOf(1));
console.log(numeros.indexOf(2) !== -1);
console.log(numeros.includes(2));

//3.Encontrando Elementos do Tipo Referência

const marcas = [
    {id:1 , nome:'a'},
    {id:2 , nome:'b'},
];

const marca = marcas.find(function (marca){
    return marca.nome === 'a';
});

console.log(marca);

//4. Arrow Functions // => (a partir do ES6)

console.log(marcas.find(marca => marca.nome === 'a'));

//5.Removendo elementos de um Array

const numeros2 = [1,2,3,4,5,6];

// Final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros2);

// Inicio
const primeiro = numeros2.shift();

console.log(primeiro);
console.log(numeros2);

// Meio

const final = numeros2.splice(2,1);

console.log(final);
console.log(numeros2);

//6.Esvaziando um Array

// Solução 1
let numeros3 = [1,2,3,4,5,6];
let outros = numeros3;
numeros3 = [];
console.log(outros);  // só apaga da referencia inicial portanto outras referencias ainda exibirao

// Solução 2   "melhor metodo"

numeros3.length = 0;

console.log(numeros3);
console.log(outros);

// Solução 3
numeros.splice(0,numeros3.length);

console.log(numeros3);
console.log(outros);

// Solução 4  "esse metodo é inviavél pois pode consumir muito recurso dependendo do tamanho da base"
//while (numeros3.length > 0)
//numeros.pop();        

//7. Combinando e cortando Arrays

const algarismos1 = [1,2,3];
const algarismos2 = [4,5,6];
// Combinar
//const combinado = algarismos1.concat(algarismos2); "forma antiga"

const combinado = [...algarismos1,...algarismos2,'x']; // Forma nova ES6 "Operador Spread"

console.log(combinado);
// Dividir
//const cortado = combinado.slice(1,3); //não corta o ultimo "forma antiga"

const clonado = [...combinado]

console.log(clonado);

console.log('join');
// join separa os itens por ponto ou traço por exemplo ou outro caractere
const clonado2 = combinado.join('-');
console.log(clonado2);
// split separar por palavras
const frase = "olá bem vindo ao curso";
const resultado = frase.split(' ');
console.log(resultado);
// slug
// utilizado para unir as palavras de uma frase com traços para criar url por exemplo.