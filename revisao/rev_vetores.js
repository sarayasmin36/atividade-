let frutas = ["tamarindo", "cajá", "tomate"]
console.log(frutas) 
frutas.push("melão")
frutas.unshift("abacate")
frutas.splice(2, 0, "uva", "framboesa")

frutas.forEach(function(fruta){
    console.log(fruta)
})

