const url_jogos = 'https://worldcupjson.net/matches'

function show_jogos() {
    let dataEsco = document.getElementById('jogos').value;
}

fetch(url_jogos)
    .then(response => response.json())
    .then(jogos => {  

        let jogosFiltra = jogos.filter(jogo => {
        const jogoData = new Date(jogo.datetime).toISOString().split('T')[0];
        return jogoData === dataEsco;
    });

    displayMatches(jogosFiltra);

});

function mostrarJogos(jogosFiltra) {
    const result = document.getElementById('result');
    result.innerHTML = ''

    if (jogosFiltra.length === 0) {
        result.innerHTML = 'Nenhuma partida para a data selecionada';
        return;
    }
}

jogosFiltra.forEach(jogo => {
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
