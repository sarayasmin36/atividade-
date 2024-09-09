const url = 'https://worldcupjson.net/teams';

function carregarTabela() {
    fetch(url)
        .then(response => response.json())
        .then(groups => gerarTabela(groups))
        .catch(error => displayError(error));
}

function gerarTabela(object) {
    const container = document.createElement('div'); // Contêiner para todas as tabelas

    object.groups.forEach(group => {
        // Cria uma tabela para o grupo
        let tableHtml = '<table border="1" style="border-collapse: collapse;">';
        
        // Gera os cabeçalhos da tabela
        const keys = Object.keys(group.teams[0]);
        let headers = keys.map(key => customTitles[key] || key.replace('_', ' ')).join('</th><th>');
        tableHtml += `<tr><th>${headers}</th></tr>`;
        
        // Gera as linhas da tabela
        group.teams.forEach(team => {
            let row = keys.map(key => `<td>${team[key]}</td>`).join('');
            tableHtml += `<tr>${row}</tr>`;
        });

        tableHtml += '</table><br>';
        
        // Adiciona o HTML da tabela ao contêiner
        container.innerHTML += tableHtml;
    });

    document.body.appendChild(container); // Adiciona o contêiner ao corpo do documento
}

function displayError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = `Ocorreu um erro no carregamento: ${error}`;
    document.body.appendChild(errorDiv);
}

const customTitles = {
    team_name: 'Nome do Time',
    team_code: 'Código do Time',
    // Adicione mais pares chave-valor conforme necessário
};

carregarTabela();
