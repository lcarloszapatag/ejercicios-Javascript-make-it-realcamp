contador=0;

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]

//recorrer array

for (var i = 0; i < nums.length; i++) {

if(nums[i]==1){

contador++

}

}

console.log("El total de números 1 en el array es de: "+contador);