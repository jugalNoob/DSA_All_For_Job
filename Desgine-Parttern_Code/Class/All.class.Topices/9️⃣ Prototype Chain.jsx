9️⃣ Prototype Chain
Code
function Person(name){
  this.name = name
}

Person.prototype.sayHi = function(){
  console.log("Hi " + this.name)
}

Example
const p = new Person("Jugal")
p.sayHi()


Output

Hi Jugal


How JS finds method:

p → prototype → method


This is prototype chain. 

JavaScript_OOP_Interview_Guide