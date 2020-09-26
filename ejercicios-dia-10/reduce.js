const reducirACero=function(num){
let contador=0
if(num>0){
  while(num>0){

  if(num%2==0){

    num=num/2
    contador+=1

  }

  if(num%2==1){

    num=num-1
contador+=1

  }
 }
  
  console.log("reducir a ",+num+ "se necesita "+contador+" veces")

}


else{
  console.log("error")
}
}