let aleatorio =Math.floor(Math.random()*10+1) 
// se mejoro el juego para que tuviera 6 oportunidades
for(let i=1;i<7;i++){
let number=prompt("adivine un numero entre el uno y el diez")
if(number>=1 &&number<=10) {


if(number==aleatorio){

  console.log("felicitaciones ese era  "+aleatorio)

break;

}


else {
  let n=6;

  console.log("Lo siento,intenta nuevamente.tienes "+ (n-i)+" Oportunidades" +" el numero es   "+ aleatorio)

}


}
else{

  console.log("error,debe ser un numero entre uno y 10")
}
}