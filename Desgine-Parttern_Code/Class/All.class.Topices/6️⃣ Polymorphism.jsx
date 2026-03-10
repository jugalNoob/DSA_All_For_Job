6️⃣ Polymorphism
Code
class Shape {
  draw(){
    console.log("Drawing shape")
  }
}

class Circle extends Shape {
  draw(){
    console.log("Drawing circle")
  }
}

Meaning

Same method

draw()


Different behavior.

Example

const s = new Shape()
const c = new Circle()

s.draw()
c.draw()


Output

Drawing shape
Drawing circle


This is method overriding. 

JavaScript_OOP_Interview_Guide