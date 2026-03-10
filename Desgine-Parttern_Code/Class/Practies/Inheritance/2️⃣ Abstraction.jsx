2️⃣ Abstraction

Meaning:

Abstraction is about hiding implementation details and showing only essential features.

In JS, we cannot make true abstract classes like Java, but we can throw errors in base methods to simulate abstraction.

Example:

class Vehicle {
    startEngine() {
        throw new Error("startEngine() must be implemented by subclass");
    }
}

class Car extends Vehicle {
    startEngine() {
        console.log("Car engine started");
    }
}

let myCar = new Car();
myCar.startEngine(); // Car engine started

let vehicle = new Vehicle();
vehicle.startEngine(); // ❌ Error: must be implemented


✅ Key points:

The base class defines the method, but child implements the details.

Users of the class don’t care about implementation — only the interface.