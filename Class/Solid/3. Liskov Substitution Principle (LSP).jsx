Nice 👍 now you’re at one of the most important (and tricky) SOLID principles.

🧠 Liskov Substitution Principle (LSP)

“A child class should be able to replace its parent class without breaking the program.”

💡 Simple Meaning

👉 If you use a parent class, you should be able to swap it with any child class
👉 And everything should still work correctly

❌ Bad Example (Violates LSP)
Classic mistake:
class Bird {
    fly() {
        console.log('Flying');
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error("Penguins can't fly"); // ❌ problem
    }
}

Usage:
function makeBirdFly(bird) {
    bird.fly();
}

makeBirdFly(new Bird());     // ✅ works
makeBirdFly(new Penguin());  // ❌ breaks

🚨 Problem

👉 Penguin cannot replace Bird properly

❌ Violates LSP

✅ Good Example (Follows LSP)
Fix: Separate behavior
class Bird {}

class FlyingBird extends Bird {
    fly() {
        console.log('Flying');
    }
}

class Sparrow extends FlyingBird {}

class Penguin extends Bird {
    swim() {
        console.log('Swimming');
    }
}

Usage:
function makeBirdFly(bird) {
    bird.fly();
}

makeBirdFly(new Sparrow()); // ✅ works
// makeBirdFly(new Penguin()) ❌ not allowed now (correct design)

🧠 Why this works

👉 We don’t force all birds to fly
👉 We model behavior correctly

🔥 Real-world Example (Node.js mindset)
❌ Bad
class Database {
    connect() {}
}

class MongoDB extends Database {
    connect() {}
}

class FileStorage extends Database {
    connect() {
        throw new Error("No DB connection"); // ❌ breaks expectation
    }
}

✅ Good
class Storage {}

class Database extends Storage {
    connect() {}
}

class FileStorage extends Storage {
    readFile() {}
}

⚡ Key Rules (Interview)

👉 Child class must:

Not break parent behavior
Not throw unexpected errors
Not remove functionality
🚀 Interview Answer (Short)

“LSP means derived classes must be substitutable for their base classes without altering correctness of the program.”

❗ Trick to Remember

👉 Ask yourself:

“If I replace parent with child, will code break?”

YES → ❌ LSP violated
NO → ✅ correct
🎯 Common Mistake
Using inheritance just for reuse ❌
Instead of proper abstraction ✅
🔥 Your SOLID Progress
✅ SRP
✅ OCP
✅ LSP

Next:
👉 ISP (easy but important)
👉 DIP (very important for system design)

If you want:

🔥 Real-world API design using LSP
🔥 Interview tricky questions (they love Penguin example)
🔥 Combine SRP + OCP + LSP in one system