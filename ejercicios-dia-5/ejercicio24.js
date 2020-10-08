let phase= str => {
  let cont=0

 str=prompt("Ingresa una frase")
for(let i=0;i<str.length;i++){

if(str[i]==="a" || str[i]==="A"){
        cont+=1
      }


}

console.log('La frase tiene '+cont+' caracteres "a"')

}

phase()