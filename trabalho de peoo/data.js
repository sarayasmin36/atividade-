const url_jogos = 'https://worldcupjson.net/matches'

// cria a função de select dos jogos
function Dataas(jogos) {
    const select = document.getElementById('data');
    const Datas = [...new Set(jogos.map(jogo => new Date(jogo.datetime).toISOString().split('T')[0]))];
// cria um set para remover duplicadas - cria uma nova array com o conteudo de jogos - para cada elemento de jogos é criado um objeto date.
// isostrins=g torna a data um formato especifico e split tira as hporas e minutos, deixando apenas a data. 

    Datas.forEach(data => {
        const option = new Option(data, data);
        select.add(option);
    });
// é adicionado uma nova option com o nome data e valor data no select
}

// função que torna a data escolhida uma variavel
function show_jogos() {
    let dataEsco = document.getElementById('data').value;

    if (!dataEsco){
        document.getElementById('result').innerHTML = 'Selecione uma data.';
        return;
// verifica se há uma data selecionada
    }

// converte em json
    fetch(url_jogos)
    .then(response => response.json())
    .then(jogos => {
// filtra o array jogos para que o jogo escolhido no select seja o mesmo que será apresentado depois 
        const jogosFiltrados = jogos.filter(jogo => {
            const jogoData = new Date(jogo.datetime).toISOString().split('T')[0];
            return jogoData === dataEsco;
        });

        mostrarJogos(jogosFiltrados);
    })
// verifica erros
    .catch(error => {
        console.error('Erro ao carregar os jogos:', error);
        document.getElementById('result').innerHTML = 'Erro ao carregar os jogos.';
    });

}

// limpa o html de resultado a cada filtaragem
function mostrarJogos(jogosFiltrados) {
    const result = document.getElementById('result');
    result.innerHTML = '';

// se não possuir tamanho, nenhuma partida foi selecionada
    if (jogosFiltrados.length === 0) {
        result.innerHTML = 'Nenhuma partida para a data selecionada';
        return;
    }

// põe as respostas filtradas pelo select no html 
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

fetch(url_jogos)
    .then(response => response.json())
    .then(jogos => {
        Dataas(jogos);
    })
    .catch(error => {console.error('Erro ao carregar dados para o select:', error);

    });