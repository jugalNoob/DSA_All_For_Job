Perfect! Let’s build a full Coffee Shop system using Abstract Factory + Decorator Pattern. This will be a FAANG-level LLD example showing how to:

Create different coffee types dynamically (via Abstract Factory)
Add toppings/decorators dynamically (via Decorator Pattern)
Keep the system extensible and easy to maintain
🔹 Step 1 — Abstract Factory for Coffee Types

We’ll have two coffee families: Regular Coffee and Special Coffee. Each family can produce a base coffee.

// Coffee Products
class RegularCoffee {
    cost() { return 10 }
    getDescription() { return "Regular Coffee" }
}

class SpecialCoffee {
    cost() { return 15 }
    getDescription() { return "Special Coffee" }
}

// Factories
class RegularCoffeeFactory {
    createCoffee() {
        return new RegularCoffee()
    }
}

class SpecialCoffeeFactory {
    createCoffee() {
        return new SpecialCoffee()
    }
}


✅ Abstract Factory separates coffee creation from the client code.

🔹 Step 2 — Decorators for Toppings

Each decorator wraps a coffee object and adds cost + description.

// Base Decorator
class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee
    }

    cost() {
        return this.coffee.cost()
    }

    getDescription() {
        return this.coffee.getDescription()
    }
}

// Milk Topping
class MilkDecorator extends CoffeeDecorator {
    cost() { return this.coffee.cost() + 5 }
    getDescription() { return this.coffee.getDescription() + ", Milk" }
}

// Sugar Topping
class SugarDecorator extends CoffeeDecorator {
    cost() { return this.coffee.cost() + 2 }
    getDescription() { return this.coffee.getDescription() + ", Sugar" }
}

// Chocolate Topping
class ChocolateDecorator extends CoffeeDecorator {
    cost() { return this.coffee.cost() + 10 }
    getDescription() { return this.coffee.getDescription() + ", Chocolate" }
}

🔹 Step 3 — Client Code to Use Factory + Decorator
// Step 1: Choose a coffee factory
let coffeeFactory = new RegularCoffeeFactory()  // or new SpecialCoffeeFactory()

// Step 2: Create base coffee using factory
let myCoffee = coffeeFactory.createCoffee()

// Step 3: Add toppings dynamically
myCoffee = new MilkDecorator(myCoffee)
myCoffee = new SugarDecorator(myCoffee)
myCoffee = new ChocolateDecorator(myCoffee)

// Step 4: Show final coffee
console.log("Your Order:", myCoffee.getDescription()) // Regular Coffee, Milk, Sugar, Chocolate
console.log("Total Cost:", myCoffee.cost())           // 10 + 5 + 2 + 10 = 27


✅ Output:

Your Order: Regular Coffee, Milk, Sugar, Chocolate
Total Cost: 27

🔹 Step 4 — Dynamic Toppings (Optional)

We can allow toppings to be added dynamically from user input or config:

const toppings = [MilkDecorator, SugarDecorator, ChocolateDecorator]

let mySpecialCoffee = new SpecialCoffeeFactory().createCoffee()

toppings.forEach(Decorator => {
    mySpecialCoffee = new Decorator(mySpecialCoffee)
})

console.log(mySpecialCoffee.getDescription()) // Special Coffee, Milk, Sugar, Chocolate
console.log(mySpecialCoffee.cost())           // 15 + 5 + 2 + 10 = 32

🔹 Why This Is FAANG-Level LLD
Abstract Factory: Decouples coffee creation from the client
Decorator Pattern: Dynamically adds toppings without modifying base classes
Extensible: Add new coffee types (Espresso, Latte) or toppings (Caramel, Whipped Cream) without touching existing code
Dynamic & Configurable: Can handle runtime user choices
Matches real-world scenarios: coffee shops, UI theming, payment systems, etc.    