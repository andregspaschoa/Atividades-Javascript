/*Tipos de laço*/

console.log('For:')
console.log('Crescente')

for(let i = 1; i <= 5; i++) {
    if(i % 2 !== 0){  //immprimindo number impares com modulus
    console.log(i);}
}

console.log('Decrescente')

for(let i2 = 5; i2 >= 1; i2 --) {
    if(i2 % 2 !== 0){  //immprimindo number impares com modulus
    console.log(i2);}
}
console.log('While loop')
let i3 = 5;

while (i3 >= 1) {
    if(i3 % 2 !== 0){
        console.log(i3);
    }
    i3--;
}

// Do.. While

let i = 0;
do {
    console.log('digitando!',i);
    i++;
} while (i < 10)
console.log('')
console.log('Loop For in')
console.log('')

const pessoa = {
    nome: 'Andre',
    idade: 25
};
//key-value
for (let chave in pessoa) {
    console.log(chave,pessoa);
}

const cores = ['Vermelho','Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice,cores[indice])
}

console.log('')
console.log('Loop For of')
console.log('')

for(let cor of cores) {
    console.log(cor);
}