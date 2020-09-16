const peso=parseInt(prompt("escribir su peso "))
const altura=parseInt(prompt("escribir la altura"))/100

 bmi = parseFloat(peso/ Math.pow(altura, 2))

console.log("tu indice de masa muscular es"+bmi)


if(bmi<18.5){
console.log("estas bajo de peso")
}
else if (bmi>=18.5 && bmi<=24.9){
console.log("tu peso es normal")
}else if (bmi>=25 && bmi<=29.9){
console.log("tienes sobreepeso")
}else if(bmi >=30){
console.log("Tienes obesidad")
}
