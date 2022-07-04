// Faixa de Preço
// Criar array de objetos de faixa de preço para que possa ser utilizado em um e-comerce 

//Primeira Opção
let falxas = [
    {tooltop: 'até R$700',minimo: 0, maximo: 700},
    {tooltop: 'de R$700 a R$1000',minimo: 700, maximo: 1000} ,
    {tooltop: 'de 1000 ou mais',minimo: 1000, maximo: 99999999}  
];

//Segunda Opção (Factory Function)
function criarFaixaPreco(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,10000),
]

// Terceira Opção (Constructor Function)

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo 
}

let faixas3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,40)
];

console.log(falxas);
console.log(faixas2);
console.log(faixas3);