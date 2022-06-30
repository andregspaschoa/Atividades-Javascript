//Criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAtsteriscos(20);      // determina a quantidade maxima de asteriscos a ser exibida.

function exibirAtsteriscos(linhas) {
//    let padrao = '';
//    for (let linha =1; linha <= linhas; linha++){  // esse exemplo também a valido. 
//        padrao += '*';
//        console.log(padrao);
//    }

    for(let linha = 1; linha <= linhas; linha++){  // enquanto linha for < ou = a linhas acrescentar linha
        let padrao = '';                   
        for(let i = 0; i < linha; i++){     // utilizado o loop nested
            padrao += '*';                  // enquanto i for menor que linha acrescentar i e enquanto loop ocorrer
        }                                   // a variável padrão '', irá acrescentar um asterisco.
        console.log(padrao);
    }
}