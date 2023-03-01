let num1 = parseFloat(prompt("Por favor, introduce el primer número:"));
let num2 = parseFloat(prompt("Por favor, introduce el segundo número:"));

if (num1 > num2) {
  alert("El número mayor es: " + num1);
} else if (num2 > num1) {
  alert("El número mayor es: " + num2);
} else {
  alert("Los números son iguales.");
}
