let separatePhrase= str => {
//str = prompt("Ingresa una frase")
 str = prompt("Ingrese una frase: ")
str = str.split(" ")
for (let i=0 ; i<str.length ; i++){
console.log(str[i])
}
}

separatePhrase()