// URL da API
const urlTeams = 'https://worldcupjson.net/teams';

// Função para fazer a requisição à API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
        return [];
    }
}

// Função para processar os dados e preencher a tabela
function processData(data) {
    const rows = data.map(time => {
        return `
            <tr>
                <td>${time.country}</td>
                <td>${time.group_points}</td>
                <td>${time.name}</td>
                <td>${time.group_letter}</td>
                <td>${time.wins}</td>
                <td>${time.draws}</td>
                <td>${time.losses}</td>
                <td>${time.games_played}</td>
                <td>${time.goals_for}</td>
                <td>${time.goals_against}</td>
                <td>${time.goal_difference}</td>
            </tr>
        `;
    });
    return rows;
}

// Função para adicionar as linhas à tabela
function populateTable(rows) {
    const tbody = document.querySelector('#classificacao tbody');
    tbody.innerHTML = rows.join('');
}

// Função principal para carregar a classificação
async function carregarClassificacao() {
    const data = await fetchData(urlTeams);
    const rows = processData(data);
    populateTable(rows);
}

// Chama a função para carregar a classificação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', carregarClassificacao);
