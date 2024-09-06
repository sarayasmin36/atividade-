document.addEventListener('DOMContentLoaded', function() {
    // URL da API
    const apiURL = 'https://worldcupjson.net/teams';

    // Função para fazer a requisição e preencher a tabela
    async function carregarClassificacao() {
        try {
            // Fazendo a requisição à API
            const response = await fetch(apiURL);
            const resp = await response.json();

            // Seleciona o tbody da tabela
            const tbody = document.querySelector('#classificacao tbody');

            // Limpa o conteúdo do tbody
            tbody.innerHTML = '';

            // Itera sobre os grupos e times para criar as linhas da tabela
            resp.forEach(time => {
                    const tr = document.createElement('tr');

                    // Cria células para cada dado do time
                    tr.innerHTML = `
                        <td>${time.country}</td>
                        <td>${time.group_points}</td>
                        <td>${time.name}</td>
                        <td>${time.group_letter}</td>
                        <td>${time.wins}</td>
                        <td>${time.draws}</td>
                        <td>${time.losses}</td>
                        <td>${time.games_played}</td>
                        <td>${time.goals_for}</td>
                        <td>${time.goal_against}</td>
                        <td>${time.gols_differencial}</td>
                    `;
                    // Adiciona a linha ao tbody
                    tbody.appendChild(tr);
                });
        } catch (error) {
            console.error('Erro ao carregar dados da API:', error);
        }
    }

    // Chama a função para carregar a classificação
    carregarClassificacao();
});
