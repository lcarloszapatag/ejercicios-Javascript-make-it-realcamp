function bmi(peso,altura){

let bmi2 = peso/(altura**2)
//console.log(bmi2)

return `Tu indice de masa muscular ${bmi2}` 

}

const bmi2=(peso,altura)=> console.log(`BMI: ${peso/(altura**2)}`)
bmi2(65, 1.8)

// escribe la función hola acá

console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695