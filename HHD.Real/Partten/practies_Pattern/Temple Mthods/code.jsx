🔹 UML / Conceptual Structure
AbstractClass
    + templateMethod()
    + step1()
    + step2() (abstract)
    + step3()

ConcreteClassA
    + step2() implementation

ConcreteClassB
    + step2() different implementation

templateMethod() defines the fixed algorithm
step2() can vary by subclass
🔹 Real Example (Coffee/Tea Making)
class CaffeineBeverage {
    prepare() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    boilWater() {
        console.log("Boiling water");
    }

    pourInCup() {
        console.log("Pouring into cup");
    }

    // Steps to be implemented by subclass
    brew() {
        throw new Error("brew() must be implemented");
    }

    addCondiments() {
        throw new Error("addCondiments() must be implemented");
    }
}

class Tea extends CaffeineBeverage {
    brew() {
        console.log("Steeping the tea");
    }

    addCondiments() {
        console.log("Adding lemon");
    }
}

class Coffee extends CaffeineBeverage {
    brew() {
        console.log("Dripping Coffee through filter");
    }

    addCondiments() {
        console.log("Adding sugar and milk");
    }
}

// Usage
let tea = new Tea();
tea.prepare();
/*
Output:
Boiling water
Steeping the tea
Pouring into cup
Adding lemon
*/

let coffee = new Coffee();
coffee.prepare();
/*
Output:
Boiling water
Dripping Coffee through filter
Pouring into cup
Adding sugar and milk
*/

🔹 Key Interview Notes
Template Method vs Strategy Pattern:
Template method = fixed algorithm structure, only some steps vary
Strategy = entire algorithm can vary (dynamic behavior)
Hooks (optional steps):
Template method can have optional hooks for subclasses to override
Useful in reporting frameworks, pipelines, or workflows
Benefits:
Avoid code duplication
Enforce consistent algorithm structure
Easy to extend for new variations