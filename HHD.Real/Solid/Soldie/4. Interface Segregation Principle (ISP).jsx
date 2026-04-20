4. Interface Segregation Principle (ISP)
"Clients should not be forced to depend on interfaces they do not use"
→ Don't make fat interfaces
JavaScript// ❌ Bad - Fat Interface
class Worker {
    work() {}
    eat() {}
    sleep() {}
}

class Robot extends Worker {
    eat() { throw new Error("Robot can't eat"); } // Forced to implement unused method
}

// ✅ Good - Segregated Interfaces (Using Composition in JS)
class Workable {
    work() {}
}

class Eatable {
    eat() {}
}

// Human implements what it needs
class Human {
    work() { console.log("Working..."); }
    eat() { console.log("Eating..."); }
}

// Robot only implements what it needs
class Robot {
    work() { console.log("Working 24/7..."); }
}