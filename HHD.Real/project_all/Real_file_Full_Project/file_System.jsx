🏗 Project: Payment System Backend

Features:

Supports Stripe and PayPal payments

Tracks Order State (Pending → Paid → Completed)

Uses Factory to create payment services dynamically

Uses Adapter to integrate third-party APIs

Uses Singleton for DB / Cache connection

Uses Strategy for choosing payment method dynamically

🔹 1. Project Structure
/project
  /services
    PaymentFactory.js
    PaymentStrategy.js
    StripeAdapter.js
    PaypalAdapter.js
  /models
    Order.js
  /utils
    DB.js        (Singleton)
  app.js
