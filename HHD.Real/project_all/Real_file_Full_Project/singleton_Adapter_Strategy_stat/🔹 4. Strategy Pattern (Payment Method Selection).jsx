
🔹 4. Strategy Pattern (Payment Method Selection)
// services/PaymentStrategy.js
class PaymentStrategy {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    pay(amount) {
        this.paymentMethod.pay(amount);
    }
}

module.exports = PaymentStrategy;