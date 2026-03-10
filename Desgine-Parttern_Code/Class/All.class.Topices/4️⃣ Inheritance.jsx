class Animal {
  speak() {
    console.log("Animal speaks")
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks")
  }
}


let link=new Dog()

link.speak()


Step-by-Step
Animal → Parent class
Dog → Child class


extends means

Dog inherits Animal


Example

const d = new Dog()
d.speak()


Output

Dog barks


Child method overrides parent method. 

JavaScript_OOP_Interview_Guide
