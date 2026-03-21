🔹 Example With DI (Loose Coupling)
class Stripe {
    pay(amount) {
        console.log("Stripe paid:", amount);
    }
}

class PayPal {
    pay(amount) {
        console.log("PayPal paid:", amount);
    }
}

// DI: inject dependency from outside
class PaymentProcessor {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    process(amount) {
        this.paymentService.pay(amount);
    }
}

// Inject Stripe
const stripeProcessor = new PaymentProcessor(new Stripe());
stripeProcessor.process(100);

// Inject PayPal
const paypalProcessor = new PaymentProcessor(new PayPal());
paypalProcessor.process(200);


✅ Now PaymentProcessor can work with any payment method.