const url = 'https://worldcupjson.net/matches'

function carregarTabela() {   
    fetch(url)
        .then(response => response.json())    
        .then(jogo => gerarFinal(jogo.at(-1)))
        .catch(error => displayError(error));
}

function gerarFinal(jogo) {

    const div = document.createElement('div');
    div.innerHTML = `
        <hr>${jogo.stage_name} <br>
        Data e hora: ${jogo.datetime} <br>
        Público: ${jogo.attendance} <br>
        Time da casa: ${jogo.home_team.country} <br>
        Time de fora: ${jogo.away_team.country} <br>
        Estádio: ${jogo.venue} <br>
        Local: ${jogo.location} <br>
        Placar: <br>
        ${jogo.home_team.country} -> ${jogo.home_team.goals} (${jogo.home_team.penalties})<br>
        ${jogo.away_team.country} -> ${jogo.away_team.goals} (${jogo.away_team.penalties})<br>
        <div class="winner-line">Vencedor: ${jogo.winner_code}</div>
    `;
    result.appendChild(div);
};

carregarTabela();