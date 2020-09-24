Array.prototype.sum=function(){
  let total=0;

  for(let i=0;i<this.length;i++){


    total+=this[i]
  }
  return total
}

const arr=[3,6,7]
arr.sum()