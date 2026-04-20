3. Liskov Substitution Principle (LSP)
"Objects of a subclass should be substitutable for objects of the parent class"
→ Child class should not break the parent’s behavior
JavaScript// ❌ Bad - Violates LSP
class Bird {
    fly() {
        console.log("I can fly");
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly!"); // Breaks expectation
    }
}

// ✅ Good
class Bird {
    move() {
        console.log("I am moving");
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log("I can fly high");
    }
}

class Penguin extends Bird {
    move() {
        console.log("I swim");
    }
}