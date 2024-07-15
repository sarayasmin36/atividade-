function verificarParImpar() {
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    if (numero % 2 === 0 ) {
    resultado.innerHTML = "<p>Seu número " + numero + " é par";
    } else {
    resultado.innerHTML = "<p>Seu número " + numero + " é par";
    }
}