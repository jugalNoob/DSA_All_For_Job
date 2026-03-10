class  LINKDED{

    constructor(user ,age){

        this.user=user
        this.age=age
    }

}

let link= new LINKDED('jugal' , 45)

console.log(link)


Step-by-Step
Step 1: Class
class Person


A class is a blueprint to create objects. 

JavaScript_OOP_Interview_Guide

Think:

Person template

Step 2: Constructor
constructor(name, age)


The constructor runs when the object is created.

Step 3: this
this.name = name
this.age = age


this means current object.

Step 4: Create Object
const user = new Person('Jugal',25)


Now object becomes

user = {
 name: "Jugal",
 age: 25
}
