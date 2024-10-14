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
        const timezone = document.getElementById('hora').value
        const url_time = `https://worldtimeapi.org/api/timezone/${timezone}`;

    }

    function horarios(timezone) {
        fetch (url_timzone)
        .then(response => response.json())
        .then(fuso => {
            const datetime = fuso.datetime;  
        const div = document.createElement('div');
        div.innerHTML = `
        "Lugar": ${timezone.timezone}<br>
        "Lugar": ${timezone.datetime}<br>
        `;
        result.appendChild(div);
    };

escolher_hora();