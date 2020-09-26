function multiplicar( arrayOld,number){
let newArray = arrayOld.map(arrayOld => arrayOld*number );
//console.log(greaterTen2); // [23, 12, 45, 78, 11, 10.1, 84]
return console.log(newArray)
}

// escribe tu función acá

// código de prueba
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // [