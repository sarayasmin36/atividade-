const input = document.getElementById('ano');

function calculo() {
        const ano = input.value; 
        if (ano) {
            const url = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
            anos(url);
        } else {
            result.innerHTML = 'Por favor, ponha uma data.';
        }
    }

    function anos(url) {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter dados: ' + response.statusText);
            }
            return response.json();
        })
        .then(feriados => {
            // Organizando os feriados por mês
            const feriadosPorMes = {};
    
            feriados.forEach(feriado => {
                const data = new Date(feriado.date);
                const mes = data.toLocaleString('default', { month: 'long' });
                const dia = data.getDate();
    
                if (!feriadosPorMes[mes]) {
                    feriadosPorMes[mes] = [];
                }
                feriadosPorMes[mes].push(`${dia} - ${feriado.name}`);
            });
    
            // Criando o conteúdo HTML
            const div = document.createElement('div');
            div.innerHTML = `<hr> Total de feriados: ${feriados.length} <br>`;
    
            for (const mes in feriadosPorMes) {
                div.innerHTML += `<strong>${mes.charAt(0).toUpperCase() + mes.slice(1)}</strong><br>`;
                div.innerHTML += feriadosPorMes[mes].join('<br>') + '<br><hr>';
            }
    
            result.innerHTML = '';
            result.appendChild(div);
        })
        .catch(error => {
            result.innerHTML = 'Erro: ' + error.message;
        });
    }