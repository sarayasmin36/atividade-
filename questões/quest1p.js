function repetir() {
    let frase = document.getElementById('frase').value;
    let numero = document.getElementById('repetida').value;
    frase = frase.toLowerCase();

    let a = 0;
    while ( a < numero) {
        document.getElementById("resultado").innerHTML = frase;
    a++;
    }
}
