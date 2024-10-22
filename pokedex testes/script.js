const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const dropdown = document.getElementById('poke');
const resultado = document.getElementById('result');
const input = document.getElementById('nome');
const buscarButton = document.getElementById('buscar');

// Carrega a lista de Pokémon
fetch(url)
    .then(response => response.json())
    .then(poke => {
        poke.results.forEach(pokemon => {
            const pokeItem = document.createElement('div');
            pokeItem.classList.add('pokemon-item');

            // Obtendo a imagem do Pokémon
            fetch(pokemon.url)
                .then(response => response.json())
                .then(pokemonData => {
                    const img = document.createElement('img');
                    img.src = pokemonData.sprites.front_default;
                    img.classList.add('pokemon-image');
                    const name = document.createElement('p');
                    name.textContent = pokemon.name;
                    name.classList.add('pokemon-name');
                    
                    pokeItem.appendChild(img);
                    pokeItem.appendChild(name);

                    // Evento de clique para selecionar o Pokémon
                    pokeItem.addEventListener('click', () => {
                        input.value = pokemon.name;
                        fetchPokemonData(pokemon.name);
                    });
                });

            dropdown.appendChild(pokeItem);
        });
    })
    .catch(error => console.error('Erro ao buscar dados:', error));

// Função para buscar Pokémon e exibir informações
function fetchPokemonData(pokemonName) {
    const pokeurl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
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

// Busca Pokémon ao clicar no botão
buscarButton.addEventListener('click', () => {
    const pokemonName = input.value.toLowerCase();
    if (pokemonName) {
        fetchPokemonData(pokemonName);
    }
});
