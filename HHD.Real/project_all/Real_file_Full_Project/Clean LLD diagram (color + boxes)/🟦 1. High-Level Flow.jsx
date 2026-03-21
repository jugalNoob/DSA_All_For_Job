🎯 🔷 ADAPTER PATTERN – CLEAN LLD DIAGRAM
🟦 1. High-Level Flow
[ Client ]
     │
     ▼
[ Payment Service ]
     │
     ▼
[ Adapter Interface ]
     │
 ┌───────────────┬───────────────┐
 ▼               ▼               ▼
[StripeAdapter] [RazorpayAdapter] [PaypalAdapter]
     │               │               │
     ▼               ▼               ▼
[Stripe API]   [Razorpay API]   [Paypal API]