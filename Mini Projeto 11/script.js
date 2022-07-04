console.log(`Endereço:
 `)
let endereco = {
    rua: 'Avenida Nove de julho',
    cidade: 'São Paulo',
    cep:'01312-001',
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
    console.log(chave,':',endereco[chave]);
}

exibirEndereco(endereco);