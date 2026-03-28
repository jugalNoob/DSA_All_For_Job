Your System → Adapter → Third-party API
(pay)        (convert)     (makePayment)



🔌 3️⃣ ADAPTER PATTERN (REAL UNDERSTANDING)

🧠 Problem

You have a third-party API:

class StripeAPI {
    makePayment(amount) {
        console.log("Stripe paid:", amount);
    }
}


👉 But your system expects:

pay(amount)


❌ Interface mismatch

✅ Step 1: Existing System Interface
class PaymentService {
    constructor(payment) {
        this.payment = payment;
    }

    process(amount) {
        this.payment.pay(amount); // expects pay()
    }
}

❌ Problem

Stripe has:

makePayment()


System expects:

pay()



✅ Step 2: Adapter
class StripeAdapter {
    constructor(stripe) {
        this.stripe = stripe;
    }

    pay(amount) {
        // convert interface
        this.stripe.makePayment(amount);
    }
}

✅ Step 3: Use It
const stripe = new StripeAPI();
const adapter = new StripeAdapter(stripe);

const service = new PaymentService(adapter);

service.process(1000);

🔍 Execution Flow
PaymentService.process()
   ↓
calls pay()
   ↓
Adapter converts → makePayment()
   ↓
Stripe runs

🧠 VISUAL DIFFERENCE
🔵 Strategy Pattern
SortContext
   ↓
[BubbleSort | QuickSort]
(same method, different logic)
