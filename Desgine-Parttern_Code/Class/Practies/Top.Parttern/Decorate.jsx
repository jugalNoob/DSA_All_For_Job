The Decorator Pattern is used to add new functionality to an object dynamically without modifying the original class.

Think of it like adding layers.

Example:

Coffee
Coffee + Milk
Coffee + Milk + Sugar


Each layer decorates the original object.

1️⃣ Simple Example
Base Class
class Coffee {

  cost(){
    return 100
  }

}

Decorator 1 (Milk)
class MilkDecorator{

  constructor(coffee){
    this.coffee = coffee
  }

  cost(){
    return this.coffee.cost() + 20
  }

}

Decorator 2 (Sugar)
class SugarDecorator{

  constructor(coffee){
    this.coffee = coffee
  }

  cost(){
    return this.coffee.cost() + 10
  }

}

2️⃣ Using the Decorators
let coffee = new Coffee()

coffee = new MilkDecorator(coffee) 

coffee = new SugarDecorator(coffee)

console.log(coffee.cost())


Output

130


Because

Coffee = 100
Milk = 20
Sugar = 10
--------------
Total = 130

3️⃣ Step-by-Step Flow
Step 1
coffee = new Coffee()


Cost

100

Step 2
coffee = new MilkDecorator(coffee)


Now

100 + 20

Step 3
coffee = new SugarDecorator(coffee)


Now

100 + 20 + 10

4️⃣ Visualization
SugarDecorator
      |
MilkDecorator
      |
    Coffee


Each decorator wraps the object.

5️⃣ Real World Backend Example

Example: API request middleware

Request
  |
Auth Decorator
  |
Logging Decorator
  |
Cache Decorator


Each layer adds behavior.

6️⃣ Real Node.js Example

Express middleware works like the Decorator Pattern.

Example