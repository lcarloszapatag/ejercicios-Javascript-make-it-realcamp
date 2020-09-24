function Person(name,weight,height){

      this.name=name
      this.weight=weight
      this.height=height
    }

    Person.prototype.greet=function(friend){

      console.log("hola "+friend+" me llamo "+this.name)
    }

    Person.prototype.bmi=function(){

      re