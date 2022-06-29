// Exercício Nota Escolar
// Obter a média a partir de um array

const array = [70,70,80];   // declarado a constante com a array que possui as 3 notas do aluno
console.log('Média do aluno:',mediaDoAluno(array));

function mediaDoAluno(notas) {   
     const media = calcularMedia(notas);

     if (media < 59) return 'F'; // se a media for menor que 59 retorne F
     if (media < 69) return 'D'; // se a media for menor que 59 retorne D
     if (media < 79) return 'C'; // se a media for menor que 59 retorne C
     if (media < 89) return 'B'; // se a media for menor que 59 retorne B
     return 'A'                  // 89 ou acima retorna A
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
}