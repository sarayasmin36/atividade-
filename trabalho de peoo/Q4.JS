const url_teams = 'https://worldcupjson.net/teams';

    fetch(url_teams) 
        .then(response => response.json())
        .then(times => {
        console.log('Dados recebidos:', times);

            // Seleciona o tbody da tabela
            const tbody = document.querySelector('#classificacao tbody');

            // Limpa o conteúdo do tbody
            tbody.innerHTML = '';

            // Itera sobre os grupos e times para criar as linhas da tabela
            times.forEach(time => {
                    const tr = document.createElement('tr');

                    // Cria células para cada dado do time
                    tr.innerHTML = `
                        <td>${times.country}</td>
                        <td>${times.group_points}</td>
                        <td>${time.name}</td>
                        <td>${time.group_letter}</td>
                        <td>${time.wins}</td>
                        <td>${time.draws}</td>
                        <td>${time.losses}</td>
                        <td>${time.games_played}</td>
                        <td>${time.goals_for}</td>
                        <td>${time.goals_against}</td>
                        <td>${time.gols_differencial}</td>
                    `;
                    // Adiciona a linha ao tbody
                    tbody.appendChild(tr);
            });
        })
        .catch(error => console.error('Erro ao carregar dados da API:', error));