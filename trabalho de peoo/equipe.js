const url_times = 'https://worldcupjson.net/teams'


function Equiipes(jogos) {
    const select = document.getElementById('equipe');
    const Equipes = [...new Set(jogos.map(jogo => jogo.name))];

    Equipes.forEach(equipe => {
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

    fetch(url_equipes)
    .then(response => response.json())
    .then(equipes => {  
        const equipesFiltradas = jogos.filter(jogo => {
            const jogoEquipe = new Date(jogo.datetime).toISOString().split('T')[0];
            return jogoData === dataEsco;
        });

        mostrarJogos(jogosFiltrados);
    })
    .catch(error => {
        console.error('Erro ao carregar os jogos:', error);
        document.getElementById('result').innerHTML = 'Erro ao carregar os jogos.';
    });

}
function show_jogos() {
    let dataEsco = document.getElementById('data').value;

    if (!dataEsco){
        document.getElementById('result').innerHTML = 'Selecione uma data.';
        return;

    }

    fetch(url_jogos)
    .then(response => response.json())
    .then(jogos => {  
        const jogosFiltrados = jogos.filter(jogo => {
            const jogoData = new Date(jogo.datetime).toISOString().split('T')[0];
            return jogoData === dataEsco;
        });

        mostrarJogos(jogosFiltrados);
    })
    .catch(error => {
        console.error('Erro ao carregar os jogos:', error);
        document.getElementById('result').innerHTML = 'Erro ao carregar os jogos.';
    });

}