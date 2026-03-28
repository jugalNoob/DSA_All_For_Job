
🔹 3. Adapter Pattern (Third-party APIs)
// services/StripeAdapter.js
class StripeAdapter {
    pay(amount) {
        console.log(`Stripe Payment processed: $${amount}`);
    }
}

module.exports = StripeAdapter;

// services/PaypalAdapter.js
class PaypalAdapter {
    makePayment(amount) {
        console.log(`PayPal Payment processed: $${amount}`);
    }
}

// Adapter to unify interface
class PaypalAdapterWrapper {
    constructor(paypal) {
        this.paypal = paypal;
    }

    pay(amount) {
        this.paypal.makePayment(amount);
    }
}

module.exports = PaypalAdapterWrapper;