class Pending {

  test(order){
    console.log("Order placed")
    order.setState(new Ordered())
  }

}

class Ordered {

  test(order){
    console.log("iPhone order confirmed")
    order.setState(new Shipped())
  }

}

class Shipped {

  test(order){
    console.log("Order shipped")
    order.setState(new Completed())
  }

}

class Completed {

  test(){
    console.log("Order delivered")
  }

}


class Order {

  constructor(){
    this.state = new Pending()
  }

  setState(state){
    this.state = state
  }

  next(){
    this.state.test(this)
  }

}


let order = new Order()

order.next()
order.next()
order.next()
order.next()




Step 3 — Use It
let order = new Order()

order.next()
order.next()
order.next()


Output

Order confirmed
Order shipped
Order delivered

5️⃣ Diagram
        Order (Context)
              |
              v
        +-------------+
        |   State     |
        +-------------+
        | next()      |
        +-------------+
        /      |      \
       /       |       \
Pending   Confirmed   Shipped
State       State       State



6️⃣ Real-World Uses

State pattern is used in:

Order processing systems

Payment status

Media player (play / pause / stop)

ATM machine states

Game character states

Workflow engines

Example:

Pending → Processing → Completed → Cancelled

7️⃣ Benefits

✅ Removes large if/else blocks
✅ Clean code
✅ Easy to add new states
✅ Follows Open/Closed Principle

8️⃣ Quick Interview Definition

The State Pattern allows an object to change its behavior when its internal state changes by delegating state-specific behavior to separate classes.
