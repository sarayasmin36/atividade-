function calculo() {

let Celsius = document.getElementById("Celsius").value;

let Fahrenheit = (Celsius * 9/5) + 32

document.getElementById("calculo1").innerHTML = 
`Celsius = ${Fahrenheit}`;
}