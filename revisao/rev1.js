function nomeSob() {
    let nome = document.getElementById('nomes').value;
    let sob = document.getElementById('sobrenomes').value;

document.getElementById("completo").innerHTML = `Se nome é: ${nome} e sobrenome ${sob}`;

}