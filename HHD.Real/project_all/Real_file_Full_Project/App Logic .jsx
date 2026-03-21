
🔹 7. App Logic (app.js)
const DB = require("./utils/DB");
const PaymentFactory = require("./services/PaymentFactory");
const PaymentStrategy = require("./services/PaymentStrategy");
const Order = require("./models/Order");

// Create orders
const order1 = new Order(1, 100);
const order2 = new Order(2, 200);

DB.saveOrder(order1);
DB.saveOrder(order2);

// Payment using Strategy + Factory + Adapter
function processPayment(order, type) {
    const paymentService = PaymentFactory.create(type);  // Factory
    const paymentStrategy = new PaymentStrategy(paymentService); // Strategy

    paymentStrategy.pay(order.amount);  // pay
    order.setState("Paid");             // State
}

// Process payments
processPayment(order1, "stripe");
processPayment(order2, "paypal");

// List all orders
console.log("All Orders:", DB.getOrders());

🔹 8. Output (What Happens)
Stripe Payment processed: $100
Order 1 state: Paid
PayPal Payment processed: $200
Order 2 state: Paid
All Orders: [Order {id:1, amount:100, state:"Paid"}, Order {id:2, amount:200, state:"Paid"}]


✅ Singleton ensures the same DB instance is used
✅ Factory creates payment method dynamically
✅ Strategy handles execution dynamically
✅ Adapter makes PayPal conform to unified interface
✅ State tracks order lifecycle

🔹 9. Interview Talking Points

“I used Singleton for DB so every service shares same instance.”

“I used Factory to dynamically create payment services.”

“I used Strategy so the payment execution can switch easily.”

“I used Adapter to unify third-party PayPal API interface.”

“I used State to track the order lifecycle.”

🔹 10. Next Steps (Optional Advanced)

Add TTL / caching for payment status → Redis

Add Throttle/Debounce on payment API → prevent spam

Add Distributed Cache → multiple Node.js instances