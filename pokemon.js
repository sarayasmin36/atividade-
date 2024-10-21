const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
const select = document.getElementById('poke')
const resultado = document.getElementById('result')

fetch(url)
    .then(response => response.json())
    .then(poke => { 
        const ordempoke = poke.results.sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

            ordempoke.forEach(pokemon => {
            const option = document.createElement('option');
            option.value = pokemon.name;  
            option.textContent = pokemon.name;  
            select.appendChild(option);
        }); 
    })
    .catch(error => console.error('Erro ao buscar dados:', error)); 

    function escolha_poke() {
        const pokemon = select.value; 
    if (pokemon) {
        const pokeurl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        pokemons(pokeurl);
        result.innerHTML = 'Por favor, selecione um pokemon.';
    }
}

    function pokemons(pokeurl) {
        fetch(pokeurl)
        .then(response => response.json())
        .then(pokemo => {
        const div = document.createElement('div');

        let habilidades = ''

        pokemo.abilities.forEach(ability => {
            habilidades += `${ability.ability.name}<br>`;
        });
        div.innerHTML = `
        <hr> Habilidades: <br> ${habilidades}
        <hr>
        `;
        result.innerHTML= ``;
        result.appendChild(div);
    });
};