const url_teams = 'https://worldcupjson.net/teams';

    fetch(url_teams) 
        .then(response => response.json())
        .then(groups => gerarTabela(groups))
        .catch(error => displayError(error))

        function gerarTabela(object) {
            // Seleciona o tbody da tabela
            const table = document.getElementById('classificacao');
            const tbody = table.querySelector('tbody');

            // Limpa o conteúdo do tbody
            tbody.innerHTML = '';

            for (let group of object.groups) {
                for (let team of group.teams) {
                    const row = document.createElement('tr');
                    
                    // Preenche cada célula com os dados do time
                    // Adiciona apenas as colunas que existem no <thead>
                    const cellValues = [
                        team.country || '0', // País
                        team.group_points || '0', // Pontos
                        team.name || '0', // Nome
                        team.group_letter || '0', // Grupo
                        team.wins || '0', // Vitórias
                        team.draws || '0', // Empates
                        team.losses || '0', // Derrotas
                        team.games_played || '0', // Jogos
                        team.goals_for || '0', // Gols pró
                        team.goals_against || '0', // Gols contra
                        team.goal_differential || '0' // Diferencial
                    ];
        
                    cellValues.forEach(value => {
                        const cell = document.createElement('td');
                        cell.innerText = value;
                        row.appendChild(cell);
                    });
        
                    tbody.appendChild(row);
                }
            }
        }
        function displayError(error) {
            const errorParagraph = document.getElementById('resultado');
            errorParagraph.innerHTML = `Ocorreu um erro no carregamento: ${error.message}`;
        }
        
        carregarTabela();