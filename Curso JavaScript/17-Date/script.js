//Date

const data1 = new Date();  // ao deixar sem atribuir valor o console exibira data/hora atual.
;
console.log(data1);

const data2 = new Date('March 06 2019 09:30');

console.log(data2);


// consultar tambem o mozzila developer

const date3 = new  Date(2019,03,06,9,30); //ano,mes de 0 a 11, dia,hora,min.
console.log(date3);

date3.setFullYear(2030); //metodo set para alterar e metodo get para extrair algo.

console.log(date3);
