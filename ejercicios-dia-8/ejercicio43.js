//para agregar metodos a las funciones constructores utilizamos prototype

function Auto(){

  this.velocidad=0
}

Auto.prototype.acelerar=function(SpeedUp){
  this.velocidad+=SpeedUp

  
}
Auto.prototype.frenar=function(brake){

  this.velocidad-=brake
  if(this.velocidad<=0){
    this.velocidad=0;
  }
}