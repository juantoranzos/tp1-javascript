var num1 = parseFloat(prompt("Por favor, introduce el primer número:"));
var num2 = parseFloat(prompt("Por favor, introduce el segundo número:"));
var num3 = parseFloat(prompt("Por favor, introduce el tercer número:"));

if (num1 > num2 && num1 > num3) {
  alert("El número mayor es: " + num1);
} else if (num2 > num1 && num2 > num3) {
  alert("El número mayor es: " + num2);
} else if (num3 > num1 && num3 > num2) {
  alert("El número mayor es: " + num3);
} else {
  alert("Los números son iguales.");
}
