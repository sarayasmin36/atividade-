const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const select = document.getElementById('poke');
const resultado = document.getElementById('result');
const input = document.getElementById('nome');
const buscarButton = document.getElementById('buscar');

// Carrega a lista de Pokémon
fetch(url)
    .then(response => response.json())
    .then(poke => {
        poke.results.forEach(pokemon => {
            const option = document.createElement('option');
            option.value = pokemon.name;
            option.textContent = pokemon.name;
            select.appendChild(option);
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));

// Função para buscar Pokémon
function pokemons(pokeurl) {
    fetch(pokeurl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then(pokemo => {
            const div = document.createElement('div');
            div.classList.add('pokemon-container');

            let habilidades = '';
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

            resultado.innerHTML = '';
            resultado.appendChild(div);
        })
        .catch(error => {
            resultado.innerHTML = `<p>${error.message}</p>`;
        });
}

// Eventos para buscar Pokémon ao clicar no botão ou ao selecionar
buscarButton.addEventListener('click', () => {
    const pokemonName = input.value.toLowerCase() || select.value;
    if (pokemonName) {
        const pokeurl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        pokemons(pokeurl);
    }
});

select.addEventListener('change', () => {
    input.value = ''; // Limpa o input ao selecionar um Pokémon
});
