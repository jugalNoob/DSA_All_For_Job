The State Pattern is a behavioral design pattern used when an object’s behavior changes depending on its internal state.

Instead of using many if/else or switch conditions, we move the behavior into separate state classes.

1️⃣ Simple Meaning

State Pattern allows an object to change its behavior when its internal state changes.

The object acts differently depending on its state.

2️⃣ Real-Life Example

Think about a traffic light 🚦

States:

Red
Yellow
Green


Behavior changes depending on the state:

Red → Stop
Yellow → Ready
Green → Go


Instead of many if conditions, we create state classes.

3️⃣ Problem Without State Pattern

Example: Order status

class Order {

  constructor(){
    this.state = "pending"
  }

  next(){

    if(this.state === "pending"){
      console.log("Order confirmed")
      this.state = "confirmed"
    }
    else if(this.state === "confirmed"){
      console.log("Order shipped")
      this.state = "shipped"
    }
    else if(this.state === "shipped"){
      console.log("Order delivered")
      this.state = "delivered"
    }

  }

}


Problem ❌

Many if/else

Hard to maintain

Violates Open/Closed principle