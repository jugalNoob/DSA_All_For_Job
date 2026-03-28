3️⃣ L → Liskov Substitution Principle (LSP)

👉 “Child class should replace parent without breaking code”

❌ Bad
class Bird {
  fly() {}
}

class Penguin extends Bird {
  fly() {
    throw new Error("Cannot fly");
  }
}


👉 Penguin breaks behavior ❌

✅ Good
class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class Penguin extends Bird {}


👉 No broken behavior ✅

💡 Simple meaning:

👉 “Child class kabhi system todna nahi chahiye”