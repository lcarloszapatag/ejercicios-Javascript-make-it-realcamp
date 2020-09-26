const removerCeros=function(numbers){

let removezero = numbers.filter(number => number > 0 );
console.log(removezero);
// escribe tu función acá
}

// código de prueba
removerCeros([1, 0, 2, 0, 3, 0]) // [1, 2, 3]
removerCeros([1, 2, 3]) // [1, 2, 3]
removerCeros([0, 0, 0]) // []