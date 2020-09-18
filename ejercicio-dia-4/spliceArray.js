//Escribe un programa que:

//Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
//Elimine el segundo elemento.
//Recorra e imprima el arreglo.
let arr = [""];
number=prompt('Ingrese un numero');

for(let i=1; i<=number; i++){
 arr[i]=i
    }
 let arrEliminado=arr.splice(2, 1)
console.log("EL arreglo " +arr)