 const promedio = (num) => {
	   let average = 0
	   for (i = 0; i < num.length; i++)
	   {
	     average +=  num[i]
  }
	 
	   return average / num.length
	 }
	  // código de prueba
  console.log(promedio([1, 2, 3, 4])) // 2.5
	  console.log(promedio([7, 8, 9])) // 8
	  console.log(promedio([300, 100])) // 200