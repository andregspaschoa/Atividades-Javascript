// Criar umm método para ler proprieades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const serie = {
    titulo : 'Peaky Blinders',
    ano : 2013,
    temporadas : 6,
    produtores : 'Katie Swinden',
    protagonista : 'Tommy Shelby',  //
}
exibirPropriedades(serie);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string') // se o tipo do objeto dentro da propriedade for do tipo string
            console.log(prop,':',obj[prop],)    // exibir no console  
}

