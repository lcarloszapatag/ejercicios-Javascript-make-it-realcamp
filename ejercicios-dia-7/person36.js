let usuario=function(name,age){

  this.name=nombre
  this.age=edad



}

function saludar( usuario ) {
  if( usuario.edad != undefined ) {
    return "Hola " + usuario.nombre + ", tienes " + usuario.edad + " años"
  }
  else {
    return "Hola " + usuario.nombre
  }
}
// código de prueba
const pedro = {nombre: "Pedro", edad:23 }
console.log(saludar(pedro)) // "Hola Pedro, tienes 23 años"

const maria = { nombre: "Maria", edad: 35 }
console.log(saludar(maria)) // "Hola Maria, tienes 35 años"

const juan = { nombre: "Juan" }
console.log(saludar(juan)) // "Hola Juan"