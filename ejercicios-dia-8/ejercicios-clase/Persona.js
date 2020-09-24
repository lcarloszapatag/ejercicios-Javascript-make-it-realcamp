//para agregar metodos a las funciones constructores utilizamos prototype

function Persona(nombre,peso,estatura){

  this.nombre=nombre
  this.peso=peso
  this.estatura=estatura
}

Persona.prototype.saludar=function(){

  console.log("Hola,me llamo "+this.nombre)
}

Persona.prototype.bmi=function(){

  return this.peso/this.estatura**2
}
//Creamos instancias para saber el objeto
const p1= new Persona("Luis Carlos",66,1.76)
console.log(p1.saludar())
console.log(p1.nombre,p1.bmi())