🧠 Short Answer

👉 Composition is BOTH:

✅ OOP concept
✅ Used in LLD (Low-Level Design)
🎯 1. Composition in OOP

👉 Definition:

Composition means building a class using other classes (HAS-A relationship)

💻 Example
class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor() {
    this.engine = new Engine(); // HAS-A
  }

  startCar() {
    this.engine.start();
  }
}

🔍 Meaning
Car HAS-A Engine


👉 This is composition (OOP concept)

🎯 2. Composition in LLD

👉 In LLD, composition is used as a design approach

Instead of:

Inheritance ❌ (tight coupling)


We use:

Composition ✅ (loose coupling)

🔥 Example in Your System Design

From your login system:

class PaymentService {
  constructor(strategy) {
    this.strategy = strategy; // composition
  }

  process() {
    this.strategy.pay();
  }
}


👉 Here:

PaymentService HAS-A strategy
This is composition used in LLD
⚔️ Composition vs Inheritance


| Feature        | Composition | Inheritance |
| -------------- | ----------- | ----------- |
| Relationship   | HAS-A       | IS-A        |
| Flexibility    | ✅ High      | ❌ Low       |
| Coupling       | ✅ Loose     | ❌ Tight     |
| Change runtime | ✅ Easy      | ❌ Hard      |


🧠 Simple Analogy
🚗 Car
Engine → composition
Car IS-A Vehicle → inheritance
🔥 Why Companies Prefer Composition

👉 Because:

Easier to change behavior
Avoid deep inheritance chains
Better for microservices / scalable systems
🚀 Important Interview Line

"Composition is an OOP principle that is heavily used in LLD to achieve loose coupling and flexibility, often preferred over inheritance."

🎯 One-Line Memory Trick
OOP concept → Composition
LLD usage   → Design with composition

🔥 Pro Tip (Very Important)

👉 Strategy pattern = Composition + Polymorphism