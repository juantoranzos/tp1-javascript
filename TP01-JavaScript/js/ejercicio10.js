let numero = prompt("Ingrese un número entero: ");
let mensaje = "";

if (numero % 2 === 0) {
  mensaje += numero + " es divisible por 2. ";
}
if (numero % 3 === 0) {
  mensaje += numero + " es divisible por 3. ";
}
if (numero % 5 === 0) {
  mensaje += numero + " es divisible por 5. ";
}
if (numero % 7 === 0) {
  mensaje += numero + " es divisible por 7. ";
}

if (mensaje !== "") {
  console.log(mensaje);
} else {
  console.log(numero + " no es divisible por ninguno de los cuatro números.");
}
document.write(mensaje);

