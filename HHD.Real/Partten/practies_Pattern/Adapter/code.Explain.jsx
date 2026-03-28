class StripeAPI {
    makePayment(amount) {
        console.log("Stripe paid:", amount);
    }
}

class PaymentService {
    constructor(payment) {
        this.payment = payment;
    }

    process(amount) {
        this.payment.pay(amount);   // ← expects .pay()
    }
}

class StripeAdapter {
    constructor(stripe) {
        this.stripe = stripe;
    }

    pay(amount) {                   // ← provides .pay()
        this.stripe.makePayment(amount);
    }
}

// ──── Usage ────
const stripe = new StripeAPI();
const adapter = new StripeAdapter(stripe);

const service = new PaymentService(adapter);

service.process(1000);


Perfect — your code is a textbook Adapter Pattern example 🔥. Let me explain it step by step in plain “story style” so it clicks clearly.

1️⃣ The Problem
PaymentService expects an object with a .pay(amount) method.
StripeAPI has .makePayment(amount) instead.
❌ Without an adapter, PaymentService.process() would fail:
this.payment.pay(amount); // ❌ StripeAPI has no .pay()

2️⃣ Adapter Solution
Adapter’s job: “convert” StripeAPI interface → what PaymentService expects
We create StripeAdapter with a .pay() method that internally calls stripe.makePayment()
3️⃣ Flow Step-By-Step
const stripe = new StripeAPI();       // Step 1: Original Stripe API
const adapter = new StripeAdapter(stripe); // Step 2: Adapter wraps Stripe
const service = new PaymentService(adapter); // Step 3: Service gets normalized interface
service.process(1000);                // Step 4: Call process

🔍 Execution Trace


| Step | Object                | Method Called      | What Happens                                                       |
| ---- | --------------------- | ------------------ | ------------------------------------------------------------------ |
| 1    | service.process(1000) | .process()         | PaymentService calls `this.payment.pay(1000)`                      |
| 2    | StripeAdapter         | .pay(1000)         | Adapter intercepts call and forwards to `stripe.makePayment(1000)` |
| 3    | StripeAPI             | .makePayment(1000) | Stripe prints: `Stripe paid: 1000`                                 |


