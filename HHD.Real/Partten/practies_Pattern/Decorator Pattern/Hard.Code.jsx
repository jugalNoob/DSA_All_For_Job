Perfect! Let’s design a dynamic Coffee Shop system using the Decorator Pattern, where you can add milk, sugar, chocolate, and other toppings at runtime — just like a real-world project.

🔹 Step 1 — Base Coffee
class Coffee {
    constructor() {
        this.description = "Plain Coffee"
    }

    cost() {
        return 10
    }

    getDescription() {
        return this.description
    }
}

Base coffee costs 10 and has a simple description.
🔹 Step 2 — Decorator Base Class
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

All decorators extend this class
Wrap the previous object dynamically
🔹 Step 3 — Toppings / Decorators
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 5
    }

    getDescription() {
        return this.coffee.getDescription() + ", Milk"
    }
}

class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 2
    }

    getDescription() {
        return this.coffee.getDescription() + ", Sugar"
    }
}

class ChocolateDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 10
    }

    getDescription() {
        return this.coffee.getDescription() + ", Chocolate"
    }
}

Each decorator adds cost and description dynamically
🔹 Step 4 — Usage Example
// Base Coffee
let myCoffee = new Coffee()

// Add Milk
myCoffee = new MilkDecorator(myCoffee)

// Add Sugar
myCoffee = new SugarDecorator(myCoffee)

// Add Chocolate
myCoffee = new ChocolateDecorator(myCoffee)

console.log("Your Order:", myCoffee.getDescription()) // Plain Coffee, Milk, Sugar, Chocolate
console.log("Total Cost:", myCoffee.cost())           // 10 + 5 + 2 + 10 = 27


✅ Output:

Your Order: Plain Coffee, Milk, Sugar, Chocolate
Total Cost: 27

🔹 Step 5 — Dynamic Toppings at Runtime

You can make it even more dynamic:

const toppings = [MilkDecorator, SugarDecorator, ChocolateDecorator]

let myCoffee2 = new Coffee()

toppings.forEach(Decorator => {
    myCoffee2 = new Decorator(myCoffee2)
})

console.log(myCoffee2.getDescription()) // Plain Coffee, Milk, Sugar, Chocolate
console.log(myCoffee2.cost())           // 27

You can read toppings from user input and apply decorators dynamically.
This is exactly how real coffee shop ordering systems work.
🔹 Why This Is FAANG-Level
Demonstrates OO Design + Decorator Pattern
Supports dynamic features without changing base class
Can scale to any number of toppings
Easy to combine with Command Pattern for payments or orders