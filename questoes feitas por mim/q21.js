function adicionar() {

    const nome = document.getElementById('nome').value;
    const preço = document.getElementById('preco').value;
    const categoria = document.getElementById('categoria').value;
    const descrição = document.getElementById('descricao').value;

    if ( !nome || !preço || !categoria || !descrição ) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let linha = document.getElementById('tabelaProdutos').insertRow();
    linha.insertCell(0).textContent = nome;
    linha.insertCell(1).textContent = preço;
    linha.insertCell(2).textContent = categoria;
    linha.insertCell(3).textContent = descrição;

    document.getElementById('formProduto').reset();
}