const url = `https://api.nobelprize.org/v1/prize.json`

fetch(url)
    .then(response => response.json())
    .then(data => {
        datas(data.prizes); 
    })
    .catch(error => console.error('Erro ao buscar dados:', error)); 

    function datas(prizes) {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = 'data';
        input.placeholder = 'Digite um ano';
        
        const button = document.createElement('button');
        button.textContent = 'Buscar Prêmios';
        button.onclick = () => buscarPremios(prizes); // Define a ação do botão
    
        const dataList = document.createElement('datalist');
        dataList.id = 'year-list';
    
        // Obtém os anos únicos dos prêmios
        const Datas = [...new Set(prizes.map(prize => prize.year))];
    
        Datas.forEach(ano => {
            const option = document.createElement('option');
            option.value = ano;
            dataList.appendChild(option);
        });
    
        input.setAttribute('list', 'year-list');
        document.body.appendChild(input);
        document.body.appendChild(dataList);
        document.body.appendChild(button);
    
        const resultDiv = document.createElement('div');
        resultDiv.id = 'result';
        document.body.appendChild(resultDiv);
    }
    
    function buscarPremios(prizes) {
        const dataEsco = document.getElementById('data').value;
        const resultDiv = document.getElementById('result');
    
        if (!dataEsco) {
            resultDiv.innerHTML = 'Digite um ano';
            return;
        }
    
        // Filtra os prêmios pelo ano escolhido
        const premiosDoAno = prizes.filter(prize => prize.year === dataEsco);
    
        if (premiosDoAno.length === 0) {
            resultDiv.innerHTML = 'Nenhum prêmio encontrado para o ano ' + dataEsco;
            return;
        }
    
        // Limpa o resultado anterior
        resultDiv.innerHTML = '';
    
        premiosDoAno.forEach(prize => {
            // Formata a categoria para ter a primeira letra maiúscula
            const categoria = prize.category.charAt(0).toUpperCase() + prize.category.slice(1);
    
            // Monta a mensagem
        const laureados = prize.laureates.map(laureate => laureate.firstname + ' ' + laureate.surname).join(', ');

        const motivacoes = prize.laureates.map(laureate => {
            return laureate.motivation;
        }).join('<br>'); // Junta as motivações em linhas separadas

        // Exibe as informações
        resultDiv.innerHTML += `
            <h3>Categoria: ${categoria}</h3>
            <p>Laureados: ${laureados}</p>
            <p>Motivações:<br>${motivacoes}</p>
            <hr>
        `;
    });
}