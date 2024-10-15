const url = "https://worldtimeapi.org/api/timezone";
const select = document.getElementById('hora');
const resultado = document.getElementById('result');
const button = document.getElementById('buscar');

// Faz a requisição para obter os fusos horários
fetch(url)
    .then(response => response.json())
    .then(timezones => { 
        timezones.forEach(timezone => {
            const option = document.createElement('option');
            option.value = timezone; // O valor da opção é o nome do fuso
            option.textContent = timezone; // O texto da opção é o nome do fuso
            select.appendChild(option); // Adiciona a opção ao select
        }); 
    })
    .catch(error => console.error('Erro ao carregar fusos horários:', error)); // Tratamento de erro

// Adiciona um listener para o botão
button.addEventListener('click', escolher_hora);

function escolher_hora() {
    const timezone = select.value; // Obtém o fuso horário selecionado
    if (timezone) {
        const url_time = `https://worldtimeapi.org/api/timezone/${timezone}`; // URL para buscar a hora do fuso selecionado
        horarios(url_time); // Chama a função que busca os horários
    } else {
        resultado.innerHTML = 'Por favor, selecione um fuso horário.';
    }
}

function horarios(url_time) {
    fetch(url_time) // Faz a requisição para a API do fuso horário
        .then(response => response.json())
        .then(fuso => {
            const datetime = fuso.datetime;  
            const div = document.createElement('div');
            div.innerHTML = `
                <strong>Fuso Horário:</strong> ${fuso.timezone}<br>
                <strong>Hora Atual:</strong> ${datetime}<br>
            `;
            resultado.innerHTML = ''; // Limpa resultados anteriores
            resultado.appendChild(div); // Adiciona o resultado ao elemento correto
        })
        .catch(error => console.error('Erro ao buscar horário:', error)); // Adiciona tratamento de erro
}