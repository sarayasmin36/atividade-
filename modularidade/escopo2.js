function add() {
    let cont = 0;
    return function () {
        cont = cont + 1;
        return cont;
    }
}

const addUm = add()

console.log(addUm())
console.log(addUm())
cont = 30;
//foi ignorado pq a função global se tornou local
console.log(addUm())
console.log(addUm())
console.log(addUm())
console.log(cont)