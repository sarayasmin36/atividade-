const numeros = [2, 3, 7, 8, 10]
console.log(numeros.toString());

const qnumero = numeros.map(function(numero){
    return numero ** 2;
});
console.log(qnumero.toString());

let resultado = numeros.filter(function(numeros){
    return numeros > 5;
})
console.log(resultado.toString());

resultado = numeros.reduce(function(total, numeros){
    return total + numeros;
}, 0);
console.log(resultado.toString());



aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa