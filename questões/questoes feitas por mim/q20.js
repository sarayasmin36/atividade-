// - Se todos os campos foram preenchidos. - Se o e-mail contém um "@" e um ponto. 
// - Se a senha tem pelo menos 8 caracteres e inclui números e letras. - Se a senha e a confirmação de senha são iguais.
function finalizarSenha() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;

    let resultado = document.getElementById("resultado");

    if (!nome)
        resultado.innerHTML = '<b>Preencha o nome!</b>';
    else if (!email)
        resultado.innerHTML = '<b>Preencha o email!</b>';
    else if (!senha1)
        resultado.innerHTML = '<b>Preencha a senha!</b>';
    else if (!senha2)
        resultado.innerHTML = '<b>Confirme a senha!</b>';
    else if (!email.includes('@')|| !email.includes('.'))
        resultado.innerHTML = '<b>Email inválido!</b>';
    else if (senha1 != senha2)
        resultado.innerHTML = '<b>Senhas diferentes!</b>';
// validar senha
    else if (!validarSenha(senha1))
        resultado.innerHTML = '<b>Senha inválida</b>'
    else {
        resultado.innerHTML = 'Cadastro feito'
    }
     
}

function validarSenha(senha) {
    let tamanhoaValido = senha.length >= 8;
    let temLetra = /[a-zA-Z]/.test(senha);
    let temNumero = /\d/.test(senha);

    return tamanhoaValido && temLetra && temNumero
}
// Se a senha tem pelo menos 8 caracteres e inclui números e letras.