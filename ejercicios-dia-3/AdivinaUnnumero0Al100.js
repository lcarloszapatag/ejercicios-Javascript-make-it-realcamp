//Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.

let numeroAleatorio = parseInt(Math.random()* 100)+1;
console.log( numeroAleatorio);
let num
/* Saldremos del bucle si agotamos intentos o acertamos número */

do {
  num = prompt(
    `Ingrese un número  entre 0 y 100:adivine el numero`


  );
console.log(num)

}while(numeroAleatorio != num  &&num<=100 &&num>=0);
/* Detectamos si salimos del bucle por agotar intentos o acertar número */


if (numeroAleatorio == num ){
  alert("¡Ha acertado el número!:"+numeroAleatorio );

 


}
else {
  alert("sigue intentando");
}
