let number=prompt("adivine un numero entre el uno y el diez")
if(number>=1 &&number<10) {
let aleatorio =(Math.random()*10+1);

if(number==aleatorio){

  console.log("felicitaciones ese era")
}

else {

  console.log("Lo siento,intenta nuevamente")
}

}
else{

  console.log("error,debe ser un numero entre uno y 10")
}