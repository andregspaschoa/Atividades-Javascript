// Criar função somar que retorna a
// soma de todos os múltiplos de 3 e 5

// Multiplos de 3 = 3,6,9
// Multiplos de 5 = 5,10

somar(10);
function somar(limite) {
    let multiplosDe3 = 0;                           // armazenar multiplos de 3 e 5
    let multiplosDe5 = 0;
    for(i= 0; i <= limite; i++){                    // enquanto i for < ou = ao limite acrescentar.
        if(i % 3 === 0)            
        multiplosDe3 += i;                          // enquanto a divisão for um multiplo de 3 somar a "i"
        if(i % 5 === 0)
        multiplosDe5 += i;                          // enquanto a divisão for um multiplo de 5 somar a "i"
    }
    console.log('A soma dos multiplos de 3 e 5 é:',multiplosDe3 + multiplosDe5); // somar ambos os multiplos e exibir no console
}

// no console deverá exibir "33" que é a soma de "3+6+9+5+10"
