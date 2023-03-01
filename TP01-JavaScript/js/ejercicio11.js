let num1 = parseInt(prompt("¿Ingrese numero 1?"));

let valor = "el numero es divisible en: ";

if (num1 % 2 == 0) {
  valor += " ,2";
}
if (num1 % 3 == 0) {
  valor += " ,3";
} 
if (num1 % 5 == 0) {
    valor += " ,5";
} 
if (num1 % 7 == 0) {
      valor += " ,7";
} 
if ((num1 % 7 != 0)&&(num1 % 5 != 0)&&(num1 % 3 != 0)&&(num1 % 2 != 0)){
      document.write("el numero:" + num1 + " No Divisible en 2,3,5,7 ");
}

document.write(valor);