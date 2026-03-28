🧠 3. Full LLD Diagram (BOX + FLOW)
                🟩 CLIENT LAYER
          ┌──────────────────────┐
          │   PaymentController  │
          └─────────┬────────────┘
                    │
                    ▼
                🟦 SERVICE LAYER
          ┌──────────────────────┐
          │   PaymentService     │
          │  (uses adapter)      │
          └─────────┬────────────┘
                    │
                    ▼
                🟨 ADAPTER LAYER
          ┌──────────────────────────┐
          │   PaymentAdapter (IF)    │
          │   pay(amount)            │
          └─────────┬────────────────┘
        ┌───────────┼───────────────┐
        ▼           ▼               ▼
 ┌────────────┐ ┌────────────┐ ┌────────────┐
 │ StripeAdpt │ │ RazorpayAd │ │ PaypalAdpt │
 └─────┬──────┘ └─────┬──────┘ └─────┬──────┘
       │              │               │
       ▼              ▼               ▼
            🟥 EXTERNAL SYSTEMS
   ┌────────────┐ ┌────────────┐ ┌────────────┐
   │ Stripe API │ │ Razorpay   │ │ Paypal API │
   └────────────┘ └────────────┘ └────────────┘
