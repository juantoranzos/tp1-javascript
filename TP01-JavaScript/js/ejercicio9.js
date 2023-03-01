let  frase = prompt("Por favor, introduce una frase:");
let  vocales = "";

for (let  i = 0; i < frase.length; i++) {
  var letra = frase.charAt(i).toLowerCase();
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    vocales += letra + " ";
  }
}

alert("Las vocales que aparecen en la frase son: " + vocales);
