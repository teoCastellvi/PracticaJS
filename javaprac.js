var intents = 0;
var lletresCorrectes = 0;
var numerorandomSplit;

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
  numerorandomSplit = numeroRandom.split("");
  console.log(numeroRandom);
  console.log(numerorandomSplit);
});

function comprobar() {
  lletresCorrectes = 0;

  if (intents < 5) {
    var numero = document.getElementById("inputdiv3").value;
    var numeroArray = numero.split('');

    for (var i = 0; i < 5; i++) {
      var newDiv = document.createElement("div");
      newDiv.className = "cuadrados";
      newDiv.innerHTML = numeroArray[i];
      document.getElementById("div5").appendChild(newDiv);

      if (numeroArray[i] === numerorandomSplit[i]) {
        newDiv.style.backgroundColor = "green";
        lletresCorrectes++;
      } else {
        for (var j = 0; j < 5; j++) {
          if (numeroArray[i] === numerorandomSplit[j]) {
            newDiv.style.backgroundColor = "yellow";
          }
        }
      }
    }
    intents++;

    if (lletresCorrectes === 5) {
      document.getElementById("div4").innerHTML = "Has guanyaaaaat!!!!";
      intents = 5
      document.getElementById("div4").style.backgroundColor = "green";
      for (var i = 0; i < 5; i++) {
        document.getElementById("divesteriscos" + (i + 1)).innerHTML = numerorandomSplit[i];
      }
    } else{
        document.getElementById("div4").style.backgroundColor = "red";
        
  
  console.log(intents)
  switch (intents) {
    case 1:
      document.getElementById("div4").innerHTML = "Primer intent, sort!";
      break;
    case 2:
      document.getElementById("div4").innerHTML = "Segon intent, sort!";
      break;
    case 3:
      document.getElementById("div4").innerHTML = "Tercer intent, sort!";
      break;
    case 4:
      document.getElementById("div4").innerHTML = "Cuart intent, sort!";
      break;
    case 5:
      document.getElementById("div4").innerHTML = "Ja has acabat els teus intents!";
      break;
    default:
      document.getElementById("div4").innerHTML = "rwerwer!";
  }}
}}

function repetir() {
    location.reload(); 
}