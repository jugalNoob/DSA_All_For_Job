Let’s make Prototypes in JavaScript (OOP) very simple and clear 👇

🧠 What is Prototype?

👉 Prototype = a mechanism for inheritance in JavaScript

Objects can reuse properties and methods from another object

🎯 Simple Meaning
Prototype = parent object


👉 Child object can access:

Properties
Methods
💻 Basic Example
const user = {
  greet() {
    console.log("Hello");
  }
};

const admin = Object.create(user);

admin.greet(); // Hello

🔍 What’s Happening?
admin → user (prototype)


👉 If admin doesn’t have greet(),
it looks in its prototype (user)

🔥 Prototype Chain
admin → user → Object → null


👉 This is called prototype chain

🧩 Example with Constructor Function
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log("Hi, I am " + this.name);
};

const p1 = new Person("Jugal");
p1.sayHello();
