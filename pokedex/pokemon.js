const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
const select = document.getElementById('poke')
const resultado = document.getElementById('result')
const input = document.getElementById('nome')
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

    input.addEventListener('input', () => {
        const pokemonName = input.value.toLowerCase();
        if (pokemonName) {
           const pokeurl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            pokemons(pokeurl);
       } else {
         resultado.innerHTML = '';
      }
    });


    function pokemons(pokeurl) {
        fetch(pokeurl)
        .then(response => response.json())
        .then(pokemo => {
        const div = document.createElement('div');
        div.classList.add('pokemon-container'); 

        let habilidades = ''

        pokemo.abilities.forEach(ability => {
            habilidades += `${ability.ability.name}<br>`;
        });

        const imagemUrl = pokemo.sprites.front_default;

        div.innerHTML = `
       <h2 class="pokemon-name">${pokemo.name}</h2>
                <img src="${imagemUrl}" alt="${pokemo.name}" class="pokemon-image"><br>
                <hr>
                <div class="pokemon-abilities">Habilidades: <br>${habilidades}</div>
                <hr>
        `;
        result.innerHTML= ``;
        result.appendChild(div);
    });
};