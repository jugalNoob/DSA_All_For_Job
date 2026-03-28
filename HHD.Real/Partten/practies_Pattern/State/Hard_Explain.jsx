// State Interface
class OrderState {
  cancel(order) { throw new Error("Not allowed in this state"); }
  ship(order)   { throw new Error("Not allowed in this state"); }
  // ... other actions
}

// Concrete States
class CreatedState extends OrderState {
  cancel(order) { console.log("Order cancelled"); order.setState(new CancelledState()); }
  pay(order)    { console.log("Paid"); order.setState(new PaidState()); }
}
class PaidState extends OrderState {
  ship(order)   { console.log("Shipped"); order.setState(new ShippedState()); }
  cancel(order) { console.log("Cannot cancel paid order"); }
}
class ShippedState extends OrderState {
  cancel(order) { console.log("Cannot cancel shipped order"); }
}

// Context
class Order {
  constructor() {
    this.state = new CreatedState();   // initial state
  }
  setState(newState) {
    this.state = newState;
    console.log(`→ State changed to ${newState.constructor.name}`);
  }
  cancel() { this.state.cancel(this); }
  pay()    { this.state.pay?.(this); }
  ship()   { this.state.ship?.(this); }
}

// Usage
const order = new Order();
order.pay();     // → PaidState
order.ship();    // → ShippedState
order.cancel();  // Not allowed