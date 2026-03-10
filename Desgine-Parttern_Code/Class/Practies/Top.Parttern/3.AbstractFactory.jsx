The Adapter Pattern is used when two systems have incompatible interfaces but you still want them to work together.

👉 The adapter acts like a translator between them.

1️⃣ Real-Life Example

Think of a mobile charger adapter.

Indian Plug  →  Adapter  →  US Socket


The adapter converts one interface into another.

Same concept in code.

2️⃣ Simple JavaScript Example
Old API (existing system)
class OldPayment {

  pay(amount){
    console.log("Paid using old system:", amount)
  }

}

New System Expecting Different Method

The new system expects:

makePayment()


But the old class has:

pay()


So they cannot work together.

3️⃣ Adapter Class
class PaymentAdapter {

  constructor(oldPayment){
    this.oldPayment = oldPayment
  }

  makePayment(amount){
    this.oldPayment.pay(amount)
  }

}


Adapter converts interface.

makePayment() → pay()

4️⃣ Using the Adapter
let oldPayment = new OldPayment()

let adapter = new PaymentAdapter(oldPayment)

adapter.makePayment(500)


Output

Paid using old system: 500

5️⃣ Step-by-Step Flow
Step 1

Old system

pay()

Step 2

New system expects

makePayment()

Step 3

Adapter converts

makePayment() → pay()

6️⃣ Visualization
Client
   |
PaymentAdapter
   |
OldPayment


Adapter connects both systems.

7️⃣ Real Node.js Example

Payment gateways.

Suppose your system expects:

processPayment()


But gateways have different methods.

Stripe

stripe.charge()


PayPal

paypal.pay()


Razorpay

razorpay.capture()


Adapter makes them look the same.

8️⃣ Example
class Stripe {

  charge(amount){
    console.log("Stripe payment:", amount)
  }

}

class StripeAdapter{

  constructor(stripe){
    this.stripe = stripe
  }

  processPayment(amount){
    this.stripe.charge(amount)
  }

}


Usage

let payment = new StripeAdapter(new Stripe())

payment.processPayment(1000)

9️⃣ Why Adapter Pattern Is Used

Without adapter:

if(paymentType === "stripe")
if(paymentType === "paypal")
if(paymentType === "razorpay")


Messy code.

With adapter:

payment.processPayment()


Clean system.

🔟 When To Use Adapter

Use when:

You integrate third-party APIs
You connect legacy systems
You convert incompatible interfaces

🎯 Interview One-Line Answer

Adapter Pattern

Converts one interface into another so incompatible systems can work together.