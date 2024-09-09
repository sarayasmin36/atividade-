// POSSÍVEL SOLUÇÃO PARA A QUESTÃO 4

const url = 'https://worldcupjson.net/teams';

function carregarTabela() {   
    fetch(url)
    .then(response => response.json())    
    .then(groups => gerarTabela(groups))
    .catch(error => displayError(error))
}; // Executa a requisição da API com fetch, vale ressaltar que o catch serve para 'capturar um erro' e exibir uma mensagem de erro no navegador.

function gerarTabela(object) {
    for (let group of object.groups) { // object.groups resgata todos os grupos classificatórios em uma lista
        const table = document.createElement('table');
        const heading = table.insertRow(0); //inserRow só funciona em tags table, ele basicamente cria uma tag <tr> 
        const temp_keys = Object.keys(group['teams'][0]); //temp_keys cria o topo da tabela, colocando as chaves como títulos, para isso acessou o primeiro time e recuperou as suas chaves


        for (let i = 0; i < temp_keys.length; i++) {
            let cell = heading.insertCell(i); //insertCell apenas funciona em tags <td>, criando uma tag <tr>
            cell.innerHTML = temp_keys[i].replace('_', ' '); // replace elimina linhas baixas, trocando por espaço
        };// cria a coluna 0, colocando as keys (títulos)

        for (let j = 0; j < group.teams.length; j++) {
            let row = table.insertRow(j + 1);
            for (let k = 0; k < temp_keys.length; k ++) {
                let cell = row.insertCell(k);
                cell.innerHTML = group['teams'][j][temp_keys[k]];
            }
        }// adiciona todos os times e seus valores

        window.document.body.appendChild(table); //o window não tem importância, ao usar document.body... ele chama o objeto window implicitamente
        window.document.body.innerHTML += '<br>';
    }
}

function displayError(error) {
    const htmlerror = document.createElement('div');
    htmlerror.innerHTML = `Ocorreu um erro no carregamento: ${error}`;
    return window.document.body.appendChild(htmlerror);
};
// função que exibe uma mensagem de erro no documento quando capturado

carregarTabela();