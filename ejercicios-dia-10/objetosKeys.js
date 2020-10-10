const max = (obj) =>{

 
if (typeof obj == 'object' && (  obj != null)){

      return Object.keys(obj).reduce(
        (a, b) => obj[a] > obj[b] ? a : b 
      )
      
    }
     // return 'No object'
    

  

else{
    return 'No object'
  }
  
}
  


// escribe tu función acá

// código de prueba
console.log(max({ a: 7, b: 6, c:2})) // b