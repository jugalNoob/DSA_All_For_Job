🔍 Explanation
sayHello is NOT inside object
It is stored in:
Person.prototype


👉 All objects share it ✅

🚀 Why Use Prototype?
✅ 1. Memory Efficient
// instead of creating function again and again

✅ 2. Reuse Code
One method → many objects
⚔️ Without Prototype (Bad)
function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log("Hi");
  };
}


👉 Every object creates new function ❌

🧠 With Prototype (Good)
Person.prototype.sayHello = function () {
  console.log("Hi");
};


👉 One function shared by all ✅

🔥 Class Syntax (Behind the Scene)
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hi " + this.name);
  }
}


👉 Internally:

sayHello → Person.prototype

🧠 Key Concept
Object → looks for property
        → not found?
        → go to prototype

🎯 Interview One-Liner

"Prototype is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects through the prototype chain."

🔥 Visual
p1 → Person.prototype → Object.prototype → null

🚀 Real-Life Analogy

👉 Think of family traits

Child inherits from parent
Parent from grandparent

👉 Same as prototype chain

✅ Final Summary
Prototype → inheritance system in JS
Prototype chain → lookup path


If you want next level, I can show: