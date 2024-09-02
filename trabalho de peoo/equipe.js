const url_partidas = 'https://worldcupjson.net/matches'

function Equipesjo(jogos) {
    const select = document.getElementById('equipe');
    const equipes = new Set();
        jogos.forEach(jogo => {
            equipes.add(jogo.home_team_country);
            equipes.add(jogo.away_team_country);
        });
    
        // Adicionar as opções ao select
        equipes.forEach(equipe => {
            const option = new Option(equipe, equipe);
            select.add(option);
        });
    }
    


    function show_jogos() {
        let equipeEsco = document.getElementById('equipe').value;

        if (!equipeEsco){
        document.getElementById('result').innerHTML = 'Selecione uma equipe.';
        return;

    }

        fetch(url_partidas)
         .then(response => response.json())
         .then(jogos => {  
            const jogosFiltrados = jogos.filter(jogo => {
                const jogoData = (equipeEsco === jogo.home_team_country) || (equipeEsco === jogo.away_team_country)
                return jogoData;
        });

        mostrarJogos(jogosFiltrados);
    })
    .catch(error => {
        console.error('Erro ao carregar os jogos:', error);
        document.getElementById('result').innerHTML = 'Erro ao carregar os jogos.';
    });

}

function mostrarJogos(jogosFiltrados) {
    const result = document.getElementById('result');
    result.innerHTML = '';

    if (jogosFiltrados.length === 0) {
        result.innerHTML = 'Nenhuma partida para a data selecionada';
        return;
    }

    jogosFiltrados.forEach(jogo => {
        const div = document.createElement('div');
        div.innerHTML = `
            <hr>#${jogo.id} <br>
            Data e hora: ${jogo.datetime} <br>
            Time da casa: ${jogo.home_team.country} <br>
            Time de fora: ${jogo.away_team.country} <br>
            Estádio: ${jogo.venue} <br>
            Placar: ${jogo.home_team.goals} - ${jogo.away_team.goals} <br><hr>
        `;
        result.appendChild(div);
    });
}

fetch(url_partidas)
    .then(response => response.json())
    .then(jogos => {
        Equipesjo(jogos);
    })
    .catch(error => {
        console.error('Erro ao carregar dados para o select:', error);
    });