document.addEventListener('DOMContentLoaded', function() {
    // URL da API
    const apiURL = 'https://worldcupjson.net/2018/groups';

    // Função para fazer a requisição e preencher a tabela
    async function carregarClassificacao() {
        try {
            // Fazendo a requisição à API
            const response = await fetch(apiURL);
            const data = await response.json();

            // Seleciona o tbody da tabela
            const tbody = document.querySelector('#tabela-classificacao tbody');

            // Limpa o conteúdo do tbody
            tbody.innerHTML = '';

            // Itera sobre os grupos e times para criar as linhas da tabela
            data.forEach(grupo => {
                grupo.teams.forEach(time => {
                    const tr = document.createElement('tr');

                    // Cria células para cada dado do time
                    tr.innerHTML = `
                        <td>${grupo.name}</td>
                        <td>${time.team}</td>
                        <td>${time.played}</td>
                        <td>${time.win}</td>
                        <td>${time.draw}</td>
                        <td>${time.loss}</td>
                        <td>${time.goalsFor}</td>
                        <td>${time.goalsAgainst}</td>
                        <td>${time.goalDifference}</td>
                        <td>${time.points}</td>
                    `;

                    // Adiciona a linha ao tbody
                    tbody.appendChild(tr);
                });
            });
        } catch (error) {
            console.error('Erro ao carregar dados da API:', error);
        }
    }

    // Chama a função para carregar a classificação
    carregarClassificacao();
});
