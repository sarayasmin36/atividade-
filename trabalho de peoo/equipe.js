const url_jogos = 'https://worldcupjson.net/matches'
const url_equipes = 'https://worldcupjson.net/teams'

function Equipes(equipes) {
    const select = document.getElementById('equipe');

    equipes.forEach(equipe => {
        const option = new Option(equipe.name, equipe.country);
        select.add(option);
    });
    
}

function show_jogos() {
    let equipeEsco = document.getElementById('equipe').value;

    if (!equipeEsco){
        document.getElementById('result').innerHTML = 'Selecione uma data.';
        return;

    }

    fetch(url_equipes)
    .then(response => response.json())
    .then(matches => {  
        const equipesFiltradas = matches.filter(match => {
            match_country === equipeEsco;
        });

        mostrarJogos(equipesFiltradas);
    })
    .catch(error => {
        console.error('Erro ao carregar os jogos:', error);
        document.getElementById('result').innerHTML = 'Erro ao carregar os jogos.';
    });

}

    fetch(url_jogos)
        .then(response => response.json())
        .then(jogos => {  
         const jogosFiltrados = jogos.filter(jogo => {
            jogo.home_team.country === equipeEsco ||
            jogo.away_team.country === equipeEsco
            return match_country === equipeEsco;
        });
    })

    function mostrarJogos(equipesFiltradas) {
        const result = document.getElementById('result');
        result.innerHTML = '';
    
        if (equipeEsco.length === 0) {
            result.innerHTML = 'Nenhuma partida para a data selecionada';
            return;
        }
    
        equipesFiltradas.forEach(jogo => {
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