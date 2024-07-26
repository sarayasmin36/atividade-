function descricao() {

    const nome = document.getElementById('nome').value;
    const preço = document.getElementById('preço').value;
    const  categoria = document.getElementById('categoria').value;
    const  descrição = document.getElementById('descrição').value;

    if ( !nome || !preço || !categoria || !descrição ) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let linha = document.getElementById('tabelaProdutos').insertRow();
    linha.insertcell(0).textContent = nome;
    linha.insertcell(1).textContent = preço;
    linha.insertcell(2).textContent = categoria;
    linha.insertcell(3).textContent = descrição;

    document.getElementById('formProduto').reset();
}