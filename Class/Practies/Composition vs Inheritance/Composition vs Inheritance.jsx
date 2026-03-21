🔥 5. Composition vs Inheritance (VERY IMPORTANT)

👉 Prefer composition

class Engine {
  start() {}
}

class Car {
  constructor() {
    this.engine = new Engine();
  }
}
