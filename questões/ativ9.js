function calculoRetangulo() {
    let altura = document.getElementById("altura").value;
    let largura = document.getElementById("largura").value;
    let calculo = altura * largura 
    document.getElementById("resultado").innerHTML = `A área do retângulo é ${calculo}`;
}