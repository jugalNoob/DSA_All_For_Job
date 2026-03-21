// Common Interface
class PaymentProcessor {
  processPayment(amount) {
    throw new Error("Must implement processPayment");
  }
}

// Stripe (3rd party)
class Stripe {
  charge(amount) {
    console.log("Stripe charged:", amount);
  }
}

// PayPal (3rd party)
class PayPal {
  pay(amount) {
    console.log("PayPal payment:", amount);
  }
}

// Stripe Adapter
class StripeAdapter extends PaymentProcessor {
  constructor(stripe) {
    super();
    this.stripe = stripe;
  }

  processPayment(amount) {
    this.stripe.charge(amount);
  }
}

// PayPal Adapter
class PayPalAdapter extends PaymentProcessor {
  constructor(paypal) {
    super();
    this.paypal = paypal;
  }

  processPayment(amount) {
    this.paypal.pay(amount);
  }
}

// Client (IMPORTANT 🔥)
class PaymentService {
  constructor(processor) {
    this.processor = processor;
  }

  pay(amount) {
    this.processor.processPayment(amount);
  }
}

// Usage
const payment1 = new PaymentService(
  new StripeAdapter(new Stripe())
);
payment1.pay(500);

const payment2 = new PaymentService(
  new PayPalAdapter(new PayPal())
);
payment2.pay(700);
