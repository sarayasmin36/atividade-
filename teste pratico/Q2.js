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
    .then(response => response.json())
    .then(feriados => {
        const feriadosPorMes = {};
        const contagemPorMes = {};

        feriados.forEach(feriado => {
            const data = new Date(feriado.date);
            const mes = data.toLocaleString('default', { month: 'long' });
            const dia = data.getDate();

            if (!feriadosPorMes[mes]) {
                feriadosPorMes[mes] = [];
                contagemPorMes[mes] = 0; 
            }
            feriadosPorMes[mes].push(`${dia} - ${feriado.name}`);
            contagemPorMes[mes]++;
        });
    const div = document.createElement('div');


    div.innerHTML = `
    <hr> <strong>FERIADOS NACIONAIS DE ${input.value}</strong> 
    Total de feriados: ${feriados.length} <br><br>
    `
    
    for (const mes in feriadosPorMes) {
        div.innerHTML += `<strong>${mes.charAt(0).toUpperCase() + mes.slice(1)} (${contagemPorMes[mes]})</strong><br>`;
        div.innerHTML += feriadosPorMes[mes].join('<br>') + '<br><hr>';
    }

    result.innerHTML= ``;
    result.appendChild(div);
    });
};