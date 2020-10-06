//Escribe una función llamada descifrar que reciba un string y un objeto. Utiliza las propiedades del objeto para reemplazar los caracteres de la cadena y retorna el resultado:

let  descifrar=function(str,obj){
	for(let key in obj){
  
		str = str.replace(key, obj[key])
	}
	return str
}

// escribe tu función acá

// código de prueba
console.log(descifrar("h0l4", { 0: "o", 4: "a" })) // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })) // "permiso"
console.log(descifrar("igual", { h: "n" })) // "igual"