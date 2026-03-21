⚡ 4. Flow Explanation (INTERVIEW READY)

👉 Step-by-step:

Client calls PaymentController

Controller calls PaymentService

Service selects adapter (Stripe / Razorpay)

Adapter converts request → provider format

External API executes payment

Response comes back → normalized