function calculo() {
    let x1 = document.getElementById("x1").value;
    let x2 = document.getElementById("x2").value;
    let y1 = document.getElementById("y1").value;
    let y2 = document.getElementById("y2").value;

    let p1 = ( ( (x2-x1)*2)*2 ) 
    let p2 =  ( (y2-y1)*2 ) 
    let resultado = Math.sqrt( p1 + p2 )

    document.getElementById("calculo1").innerHTML = `A distância entre P1 (${x1}, ${y1}) e P2 (${x2}, ${y2}) é de ${resultado}.`
}

// feito