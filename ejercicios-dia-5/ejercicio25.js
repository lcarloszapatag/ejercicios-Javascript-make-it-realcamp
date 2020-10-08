let passphrase= str => {

str = prompt("Ingresa una frase")

str = str.toLowerCase()

str = str.replace(/ /g,"")

str = str.replace(/a/g, 4)

str = str.replace(/e/g, 3)

str = str.replace(/i/g, 1)

str = str.replace(/o/g, 0)

console.log(str)

}
passphrase()