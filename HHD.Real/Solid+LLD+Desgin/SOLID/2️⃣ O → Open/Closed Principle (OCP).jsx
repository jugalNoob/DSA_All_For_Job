2️⃣ O → Open/Closed Principle (OCP)

👉 “Code open for extension, closed for modification”

❌ Bad
class Payment {
  pay(type) {
    if (type === "stripe") {}
    else if (type === "paypal") {}
  }
}


👉 Every time new payment → change code ❌

✅ Good
class Payment {
  pay() {}
}

class StripePayment extends Payment {
  pay() {
    console.log("Stripe");
  }
}

class PaypalPayment extends Payment {
  pay() {
    console.log("Paypal");
  }
}


👉 Add new class instead of modifying old code ✅

💡 Simple meaning:

👉 “New feature add karo, old code mat todho”