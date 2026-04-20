🧠 Core Idea

👉 Polymorphism = Concept (OOP feature)
👉 Strategy = Design Pattern (implementation using polymorphism)

🎯 1. Polymorphism
👉 Definition

Same method → different behavior

💻 Example
class Payment {
  pay() {}
}

class CreditCard extends Payment {
  pay() {
    console.log("Pay with Credit Card");
  }
}

class UPI extends Payment {
  pay() {
    console.log("Pay with UPI");
  }
}

🧪 Usage
function processPayment(method) {
  method.pay();
}


👉 You don’t care which type
👉 Behavior changes automatically

🔥 Key Point
It’s a language feature
Comes from inheritance / interfaces


