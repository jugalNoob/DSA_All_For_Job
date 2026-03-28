class StripeAPI {
    makePayment(amount) {
        console.log("Stripe paid:", amount);
    }
}

class GooglePayAPI {
    sendPayment(amount) {
        console.log("Google Pay paid:", amount);
    }
}

// ──────────────────────────────────────────────
// Core business logic — depends only on .pay()
// ──────────────────────────────────────────────
class PaymentService {
    constructor(paymentProvider) {
        this.paymentProvider = paymentProvider;
    }

    process(amount) {
        this.paymentProvider.pay(amount);   // expects .pay()
    }
}

// ──────────────────────────────────────────────
// Adapters — make different APIs look the same
// ──────────────────────────────────────────────
class StripeAdapter {
    constructor(stripe) {
        this.stripe = stripe;
    }

    pay(amount) {
        this.stripe.makePayment(amount);
    }
}

class GooglePayAdapter {
    constructor(googlePay) {
        this.googlePay = googlePay;
    }

    pay(amount) {
        this.googlePay.sendPayment(amount);
    }
}

// ──── Usage Examples ────
console.log("=== Stripe Payment ===");
const stripe = new StripeAPI();
const stripeAdapter = new StripeAdapter(stripe);
const stripeService = new PaymentService(stripeAdapter);
stripeService.process(1000);
// → Stripe paid: 1000

console.log("\n=== Google Pay Payment ===");
const gpay = new GooglePayAPI();
const gpayAdapter = new GooglePayAdapter(gpay);
const gpayService = new PaymentService(gpayAdapter);
gpayService.process(500);
// → Google Pay paid: 500



      PaymentService  (expects .pay())
           ↑
     Adapter Layer
  ┌───────────────┐
  | StripeAdapter  | → converts .pay() → StripeAPI.makePayment()
  | GooglePayAdapter| → converts .pay() → GooglePayAPI.sendPayment()
  └───────────────┘
           ↑
 Third-party APIs
 ┌─────────────┐ ┌──────────────┐
 | StripeAPI   | | GooglePayAPI  |
 └─────────────┘ └──────────────┘




 // Original Stripe API
class StripeApi {
    makePay(order) {
        console.log('Stripe Payment processed:', order)
    }
}

// Google Pay API
class GoogleApi {
    makePay(order) {
        console.log('Google Pay processed:', order)
    }
}

// Service (depends on .pay())
class PaymentService {
    constructor(paymentAdapter) {
        this.paymentAdapter = paymentAdapter
    }

    process(order) {
        this.paymentAdapter.pay(order)
    }
}

// Stripe Adapter
class StripeAdapter {
    constructor(stripe) { this.stripe = stripe }
    pay(order) { this.stripe.makePay(order) }
}

// Google Pay Adapter
class GooglePayAdapter {
    constructor(google) { this.google = google }
    pay(order) { this.google.makePay(order) }
}

// ── Usage Examples ──

// Stripe
let stripeApiInstance = new StripeApi()
let stripeAdapter = new StripeAdapter(stripeApiInstance)
let stripeService = new PaymentService(stripeAdapter)
stripeService.process(10000)  // Output: Stripe Payment processed: 10000

// Google Pay
let googleApiInstance = new GoogleApi()
let googleAdapter = new GooglePayAdapter(googleApiInstance)
let googleService = new PaymentService(googleAdapter)
googleService.process(5000)   // Output: Google Pay processed: 5000
