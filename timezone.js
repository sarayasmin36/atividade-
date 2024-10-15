const url = "https://worldtimeapi.org/api/timezone"
const select = document.getElementById('hora')
const resultado = document.getElementById('result')

fetch(url)
         .then(response => response.json())
         .then(timezones => { 
            timezones.forEach(timezone => {
                const option = document.createElement('option');
                option.value = timezone;
                option.textContent = timezone;
                select.appendChild(option);
            }); 
        });            

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
        fetch(url_time)
        .then(response => response.json())
        .then(fuso => {
        const datetime = fuso.datetime; 
        const [date, time] = datetime.split('T');
        const div = document.createElement('div');
        div.innerHTML = `
        <hr> Lugar: ${fuso.timezone}<br>
        <hr> Data: ${date}<br>
        <hr> Hora: ${time.split('.')[0]}<br>
        <hr>
        `;
        result.innerHTML= ``;
        result.appendChild(div);
    });
};