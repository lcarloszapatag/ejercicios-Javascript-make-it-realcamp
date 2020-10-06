const frecuencias = frase => {
     const letter = frase.replace(" ",``)
     let frequency={}

  for (item of letter){

    if(frequency[item]){
     // console.log(frequency)
      frequency[item]+=1
    }

    else {
          frequency[item] = 1
           //console.log(frequency[w])
    }
    //console.log(item);
  }
return frequency
}

    // escribe tu función acá

// código de prueba
console.log(frecuencias("hola mundo"))
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"))
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }