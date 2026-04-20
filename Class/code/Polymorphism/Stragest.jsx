🎯 2. Strategy Pattern
👉 Definition

Select behavior dynamically at runtime

💻 Example
class CreditCardStrategy {
  pay() {
    console.log("Pay with Credit Card");
  }
}

class UPIStrategy {
  pay() {
    console.log("Pay with UPI");
  }
}

class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  pay() {
    this.strategy.pay();
  }
}

🧪 Usage
const payment = new PaymentContext(new UPIStrategy());
payment.pay();

🔥 Key Point
You can change behavior at runtime
No inheritance required
⚔️ Difference (Important Table)