The Decorator Pattern is a structural design pattern used to add new functionality to an object dynamically without modifying its original code.

1️⃣ Simple Meaning

Decorator Pattern wraps an object and adds extra behavior to it.

Think of it like adding toppings to pizza 🍕

Base Pizza → Cheese → Olives → Mushroom


Each topping adds new behavior without changing the original pizza.

2️⃣ Problem Without Decorator

Example: Coffee shop ☕

If we create classes like:

SimpleCoffee
MilkCoffee
SugarCoffee
MilkSugarCoffee
MilkSugarCreamCoffee


Too many classes ❌

3️⃣ Decorator Pattern Solution

We create decorators that add features.

Step 1 — Base Class
class Coffee {

    cost(){
        return 5
    }

}

Step 2 — Decorator
class MilkDecorator {

    constructor(coffee){
        this.coffee = coffee
    }

    cost(){
        return this.coffee.cost() + 2
    }

}

Step 3 — Another Decorator
class SugarDecorator {

    constructor(coffee){
        this.coffee = coffee
    }

    cost(){
        return this.coffee.cost() + 1
    }

}

Step 4 — Use It
let coffee = new Coffee()

coffee = new MilkDecorator(coffee)

coffee = new SugarDecorator(coffee)

console.log(coffee.cost())


Output

8


Calculation

Coffee = 5
Milk = +2
Sugar = +1

Total = 8

4️⃣ Diagram
Client
   |
   v
SugarDecorator
   |
   v
MilkDecorator
   |
   v
Coffee (Base)


Each decorator wraps the previous object.

5️⃣ Real-World Examples

Decorator pattern is used in:

Middleware in Node.js (Express)

Logging systems

UI frameworks

Authentication layers

Compression / encryption wrappers

Example in Express middleware

app.use(authMiddleware)
app.use(loggingMiddleware)


Each middleware decorates the request object.

6️⃣ Benefits

✅ Add functionality dynamically
✅ Avoid creating too many subclasses
✅ Flexible and reusable

7️⃣ Interview Definition

The Decorator Pattern is a structural pattern that dynamically adds new behavior to objects by wrapping them in decorator classes.

8️⃣ Quick Comparison
Pattern	Purpose
Factory	Create objects
Adapter	Convert interfaces
State	Change behavior based on state
Decorator	Add new functionality