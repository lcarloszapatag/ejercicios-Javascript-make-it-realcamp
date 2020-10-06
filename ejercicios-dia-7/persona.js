
let persona ={
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"]
}


persona.estatura=1.8
delete persona.activo
console.log(persona.edad)
for (let llave in persona){
  console.log(llave+": "+persona[llave])
}