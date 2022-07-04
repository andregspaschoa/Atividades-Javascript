
function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosAndre = ['Leonardo', 'Joao', 'Adriano', 'Vinicius', 'Rene', 'Rafaela']
    if (ConvidadosAndre.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!'
    }

}