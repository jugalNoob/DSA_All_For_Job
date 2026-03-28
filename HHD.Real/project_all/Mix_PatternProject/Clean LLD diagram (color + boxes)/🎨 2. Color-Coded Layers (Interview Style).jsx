🎨 2. Color-Coded Layers (Interview Style)
🟩 GREEN → Client Layer
[ Client / Controller ]
        │
        ▼


👉 Handles request (API / UI)


🟦 BLUE → Business Layer
[ Payment Service ]
        │
        ▼


👉 Core logic (no dependency on external APIs)

🟨 YELLOW → Adapter Layer
[ PaymentAdapter Interface ]
        │
 ┌───────────────┬───────────────┐
 ▼               ▼               ▼
[StripeAdapter] [RazorpayAdapter] [PaypalAdapter]


👉 Converts different APIs → common interface

🟥 RED → External Systems
[ Stripe API ]
[ Razorpay API ]
[ Paypal API ]


👉 Third-party (uncontrolled)