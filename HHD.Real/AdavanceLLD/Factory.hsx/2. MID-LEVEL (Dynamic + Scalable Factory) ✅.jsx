⚡ 2. MID-LEVEL (Dynamic + Scalable Factory) ✅

👉 Use map/registry pattern

class Car {
  drive() { console.log("Car 🚗"); }
}

class Bike {
  ride() { console.log("Bike 🏍️"); }
}

class Factory {
  static types = {
    car: Car,
    bike: Bike
  };

  static create(type) {
    const ClassRef = this.types[type];
    if (!ClassRef) throw new Error("Invalid type");
    return new ClassRef();
  }
}

const v1 = Factory.create("car");
v1.drive();

🔥 Why this is better?
Easy to add new types ✅
No if-else mess ✅
Clean + scalable ✅