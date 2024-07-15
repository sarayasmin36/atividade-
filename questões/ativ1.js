
function calcularIdade2() {
    let dataNascimento = new Date(document.querySelector("#data2").value);
    let diaNascimento = dataNascimento.getDate();
    let mesNascimento = dataNascimento.getMonth() + 1;
    let anoNascimento = dataNascimento.getFullYear();

    let hoje = new Date();
    let diaAtual = hoje.getDate();
    let mesAtual = hoje.getMonth() + 1;
    let anoAtual = hoje.getFullYear();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || 
       (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    document.querySelector("#idade").innerHTML = `Idade: ${idade}`;
}