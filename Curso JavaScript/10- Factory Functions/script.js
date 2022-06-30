function criarCelular(marcaCelular,tamanhoTela,capacidaeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidaeBateria,
        ligar() {
            console.log("Fazendo ligação")
        }
    }
}

const celular1 = criarCelular('Zenfone',5.5,5000);

console.log(celular1)