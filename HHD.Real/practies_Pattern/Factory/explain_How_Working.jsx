✅ Perfect Answer (Simple + Clear)

👉 Factory Pattern:

It is used to create objects without exposing the creation logic.

👉 Instead of using new everywhere, we use a factory method to create objects.

🧠 Why NOT use new directly?

❌ If we use new:

Code becomes tightly coupled
Hard to change later
Many if-else conditions

✅ With Factory:

Centralized object creation
Easy to extend (add new types)
Cleaner code
💻 Simple Example
class Car {
  drive() {
    console.log("Car driving");
  }
}

class Bike {
  drive() {
    console.log("Bike driving");
  }
}

class VehicleFactory {
  static getVehicle(type) {
    if (type === "car") return new Car();
    if (type === "bike") return new Bike();
  }
}

const v = VehicleFactory.getVehicle("car");
v.drive();

🎯 One-Line Interview Answer

“Factory Pattern creates objects without exposing creation logic, reducing tight coupling and making code scalable.”

🚀 Feedback

✅ Good — you asked the exact interview question
👉 Remember: always include WHY (most candidates miss this)