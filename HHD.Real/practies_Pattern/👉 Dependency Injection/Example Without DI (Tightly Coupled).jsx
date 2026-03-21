🔹 Example Without DI (Tightly Coupled)
class Stripe {
    pay(amount) {
        console.log("Stripe paid:", amount);
    }
}

class PaymentProcessor {
    constructor() {
        this.paymentService = new Stripe(); // hard-coded dependency ❌
    }

    process(amount) {
        this.paymentService.pay(amount);
    }
}

const processor = new PaymentProcessor();
processor.process(100);

Problem:

PaymentProcessor is tightly coupled to Stripe.

Hard to switch to PayPal or mock for tests.