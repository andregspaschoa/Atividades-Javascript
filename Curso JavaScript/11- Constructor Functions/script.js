// camelCase = umDoisTresQuatro
//Pascal Case = UmDoisTresQuatro

function Celular(marcaCelular,tamanhotela,capacidadebateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhotela = tamanhotela,
    this.capacidadebateria = capacidadebateria,
    this.ligar = function() {
        console.log("Fazendo Ligação...")
    } 
}

const celular = new Celular("Asus",5.5,5000);

console.log(celular);