const max = (obj) =>{

 
if (typeof obj == 'object' && (  obj != null)){



      return Object.keys(obj).reduce(menorMayor(obj))
      
    }
     // return 'No object'
    

  

else{
    return 'No object'
  }
  
}


 function menorMayor(obj){

let objetoValor=(a, b) => obj[a] > obj[b] ? 
 a : b 

 return objetoValor

 } 


// escribe tu función acá

// código de prueba
console.log(max({ a: 7, b: 6, c:2})) // b