🧠 What is Aggregation?

👉 Aggregation = HAS-A relationship (weak ownership)

One object uses another, but both can exist independently

🎯 Simple Definition
Aggregation = “uses-a” relationship

🚗 Real-Life Example
🧑‍🏫 Teacher & Student
Teacher has students
BUT students can exist without teacher

👉 That’s Aggregation

💻 JavaScript Example


class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor(engine) {
    this.engine = engine; // passed from outside
  }

  startCar() {
    this.engine.start();
  }
}

const engine = new Engine();   // independent object
const car = new Car(engine);   // injected

car.startCar();