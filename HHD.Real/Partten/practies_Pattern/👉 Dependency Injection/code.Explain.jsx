🔹 Real Node.js Example (Payment System + DI)
class StripePayment {
  pay(amount) {
    console.log("Paid via Stripe:", amount);
  }
}

class PaymentService {
  constructor(paymentMethod) { // inject dependency
    this.paymentMethod = paymentMethod;
  }

  makePayment(amount) {
    this.paymentMethod.pay(amount);
  }
}

const stripe = new StripePayment();
const service = new PaymentService(stripe);

service.makePayment(1000); // Paid via Stripe: 1000


✅ Swap payment method easily:

class UpiPayment {
  pay(amount) {
    console.log("Paid via UPI:", amount);
  }
}

const upi = new UpiPayment();
const service2 = new PaymentService(upi);
service2.makePayment(500); // Paid via UPI: 500

🔹 Interview One-Liner

"Dependency Injection is a design pattern where a class receives its dependencies from outside rather than creating them itself. It makes the system loosely coupled, testable, and scalable."

🔹 Pro Tip (Real Backend Use)
Controllers → inject services
Services → inject repositories or external APIs
PaymentService, OrderService, KafkaProducer → all injected
Makes testing + scaling super easy