function testeEmail() {
    let email = document.getElementById('email').value;
    if (email.includes('@') && email.includes('.'))
    document.getElementById('resultado').innerHTML = 'E-mail válido.';
else
    document.getElementById('resultado').innerHTML = 'E-mail inválido.';
}