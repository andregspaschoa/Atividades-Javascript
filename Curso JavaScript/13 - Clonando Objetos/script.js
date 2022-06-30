const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela :{
        vertical: 155,
        horizontal: 75,
    },
    ligar: function () {
        console.log("Fazendo Ligação...");
    }
}

const novoObjeto = Object.assign({
    bateria: 5000   // também é possível adicionar mais propriedades ao objeto.
},celular);   // os {} são o alvo (local para onde vao as propriedades do obj)
              // em seguida colocamos o objeto de onde ele vai puxar  


const objeto2 = {...celular};  //spread '...'
objeto2.cor = 'black';
console.log(objeto2);