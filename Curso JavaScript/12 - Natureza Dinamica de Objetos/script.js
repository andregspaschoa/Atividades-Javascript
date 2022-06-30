const mouse = {
    cor : 'Blue',
    marca : 'Dell'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function () {
    console.log('mudando DPI');
}

delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);