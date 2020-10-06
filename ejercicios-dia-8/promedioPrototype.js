Array.prototype.promedio=function(){
  let total=0;

  for(let i=0;i<this.length;i++){


    total+=this[i]
  }
  return total/this.length
}