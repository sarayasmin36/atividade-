function adicionar(X) {
    return function(Y) {
        return X + Y;
    }
}

const add = adicionar(5);
// o de cima é o X (está protegido)
// os de baixo são o Y
console.log(add(10));
console.log(add(2));
console.log(add(20));