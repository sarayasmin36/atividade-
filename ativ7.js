function contagemSenha() {
    let senha = document.getElementById("senha").value;
    let usuario = document.getElementById("usuario").value;

    let contador = senha.length;

    if ( contador < 6 ) {
document.getElementById("senha1").innerHTML = `A senha possui menos que 6 caracteres ( ${contador} ).`
    }    else if ( contador === 6) {
document.getElementById("senha1").innerHTML = `A senha possui exatamente 6 caracteres ( ${contador} ).`
    }   else {
document.getElementById("senha1").innerHTML = `A senha possui mais que 6 caracteres ( ${contador} ).`
    }
document.getElementById("usuario1").innerHTML = `O nome do seu usuário é: ${usuario}`;
}
// Crie uma função que verifique se uma senha inserida em um formulário tem 6 ou mais caracteres.