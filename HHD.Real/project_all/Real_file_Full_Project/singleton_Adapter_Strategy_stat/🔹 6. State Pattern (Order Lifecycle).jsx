
🔹 6. State Pattern (Order Lifecycle)
// models/Order.js
class Order {
    constructor(id, amount) {
        this.id = id;
        this.amount = amount;
        this.state = "Pending"; // Pending → Paid → Completed
    }

    setState(state) {
        this.state = state;
        console.log(`Order ${this.id} state: ${this.state}`);
    }
}

module.exports = Order;