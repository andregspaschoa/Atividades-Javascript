// Functions 
console.log(' ')
console.log('Aula 5')
console.log(' ')
// verbo + substantivo
let corSite = "azul";
function resetaCor (cor,tonalidade) {
  corSite = cor +" "+ tonalidade;
};

console.log(corSite);
resetaCor("verde","claro");
console.log(corSite);

// Tipos de Funções 

// realiza uma tarefa, mas não devolve nada

function dizerNome(){
    console.log('Jhonatan');
}

dizerNome();

// Fazer um calculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor* 2;
}
//console.log(MultiplicarPorDois(5));
let resultado = MultiplicarPorDois(5);
console.log(resultado);