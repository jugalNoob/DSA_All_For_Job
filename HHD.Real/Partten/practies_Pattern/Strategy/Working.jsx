✅ FIXED VERSION (CLEAN + INTERVIEW READY)
💳 1. Strategy Pattern (Payment)
class PaymentMethod {
  pay(amount) {
    throw new Error("Must implement pay()");
  }
}

class UpiPayment extends PaymentMethod {
  pay(amount) {
    console.log("UPI payment:", amount);
  }
}

class GooglePayment extends PaymentMethod {
  pay(amount) {
    console.log("Google Pay payment:", amount);
  }
}

🧠 Context Class (Strategy Controller)
class PaymentContext {
  constructor(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  setMethod(method) {
    this.paymentMethod = method;
  }

  pay(amount) {
    this.paymentMethod.pay(amount);
  }
}

🚀 Usage
let upi = new UpiPayment();
let payment = new PaymentContext(upi);

payment.pay(10000);

// switch strategy
payment.setMethod(new GooglePayment());
payment.pay(5000);
