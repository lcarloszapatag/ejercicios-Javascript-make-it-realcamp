//funcion para buscar el elemnto menor del array
const minorElement = (arr) => {
  let aux = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (aux > arr[i]) {
      aux = arr[i]
    }
  }
  return aux
}
const ordenar = (array) => {
  let newArray = []
  let min
  if(array !== null){
 for(let lengthArray = array.length;lengthArray > 0;) {
          min = minorElement(array)
          newArray.push(min)
//recorer el array para eliminar cada elemnto del antiguo array
          for (let i = 0; i < array.length; i++) {
            if (min == array[i]) {
              array.splice(i, 1)
              i--
              lengthArray--
            }
          }

        }

        return newArray
    
  }else{
    return []
  }