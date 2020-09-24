String.prototype.capitalize=function(){
const words =this.split(" ");

for(let i=0;i<words.length;i++) {
const w=words[i]
words[i]=w.charAt(0).toUpperCase() +w.substring(1)
}
return words.join(" ")
}
console.log("hola mundo".capitalize())
console.log("esta es una prueba".capitalize())