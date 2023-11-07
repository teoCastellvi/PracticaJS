// Definir la función para generar un número aleatorio
function generarNumeroAleatorio() {
    // Generar un número aleatorio entre 0 y 99999
    var numeroAleatorio = Math.floor(Math.random() * 100000);
    // Rellenar con ceros al inicio si el número tiene menos de 5 cifras
    numeroAleatorio = numeroAleatorio.toString().padStart(5, '0');
    return numeroAleatorio;
}

// Llamar a la función cuando se cargue el documento
document.addEventListener("DOMContentLoaded", function() {
    var numeroRandom = generarNumeroAleatorio();
    numerorandomSplit = numeroRandom.split("")
    console.log(numeroRandom);
});

var intents = 0
var lletresCorrectes = 0

function comprobar() {
    lletresCorrectes = 0

    if(intents< 5){
    var numero = document.getElementById("inputdiv3").value;
    let numeroArray = numero.split('')

        for (let i = 0; i < 5; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "cuadrados";
        newDiv.innerHTML = numeroArray[i] 
        document.getElementById("div5").appendChild(newDiv);

        if(numeroArray[i] === numerorandomSplit[i]){
            newDiv.style.backgroundColor = "green"
            lletresCorrectes++
        }
        else {
            for(let j = 0; j < 5; j++){
                if(numeroArray[i] === numerorandomSplit[j]) newDiv.style.backgroundColor = "yellow"
            }
        }
        }
        intents++
        if(lletresCorrectes === 5){
            document.getElementById("div4").innerHTML = "Has gunyaaaaat!!!!";
            intents = 5
            document.getElementById("div4").style.backgroundColor = "green"

        } else{

        switch(intents){
        case 1:
            document.getElementById("div4").innerHTML = "Primer intent, sort!";
            break;
            case 2:
            document.getElementById("div4").innerHTML = "Segon intent, sort!";
            break;
            case 3:
            document.getElementById("div4").innerHTML = "tercer intent, sort!";
            break;
            case 4:
            document.getElementById("div4").innerHTML = "Cuart intent, sort!"
            break;
            case 5:
            document.getElementById("div4").innerHTML = "Ultim intent, sort!"
            break;
            default:
                document.getElementById("div4").innerHTML = "Ja has acabat els teus intents!"
        }}
} 

}
    
    
