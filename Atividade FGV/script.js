function CarteirinhaAluno(nomeAluno,curso,unidade,acesso,validade,cpf) {
    this.nomeAluno = nomeAluno,
    this.curso = curso,
    this.unidade = unidade,
    this.acesso = acesso,
    this.validade = validade,
    this.cpf = cpf,
    this.gerarQRCode = function() {
        console.log("Verificando ...")
    } 
} 

const carteirinha = new CarteirinhaAluno('Andre G. S. Paschoa','Gestão Empresárial','EAESP','A57888999','July 06 2019 09:30',444555666,);

console.log(carteirinha);

