🔹 2. Singleton (DB / Redis Connection)

🔹 2. Singleton (DB / Redis Connection)
// utils/DB.js
class DB {
    constructor() {
        if (DB.instance) return DB.instance;
        this.orders = []; // simple in-memory DB
        DB.instance = this;
    }

    saveOrder(order) {
        this.orders.push(order);
    }

    getOrders() {
        return this.orders;
    }
}

module.exports = new DB();