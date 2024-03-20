// Implemente uma função que crie uma saudação personalizada, usando o nome fornecido em um campo de formulário.
function saudacoes() {
    let nome = document.getElementById("nome").value;
document.getElementById("nome1").innerHTML = `Seja bem-vindo ${nome}, como está?`;
}