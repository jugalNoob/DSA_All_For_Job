class Stripe {

  charge(amount){
    console.log("Stripe charged:", amount)
  }

}


class PayPal {

  pay(amount){
    console.log("PayPal payment:", amount)
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



class PayPalAdapter{

  constructor(paypal){
    this.paypal = paypal
  }

  processPayment(amount){
    this.paypal.pay(amount)
  }

}


let stripe = new StripeAdapter(new Stripe())
stripe.processPayment(500)

let paypal = new PayPalAdapter(new PayPal())
paypal.processPayment(700)






Here is a very simple Adapter Pattern example for a payment gateway (good for interviews).

The system expects:

processPayment()


But each payment gateway has different method names.

1️⃣ Stripe Gateway (Third-party API)
class Stripe {

  charge(amount){
    console.log("Stripe charged:", amount)
  }

}


Stripe uses:

charge()

2️⃣ PayPal Gateway
class PayPal {

  pay(amount){
    console.log("PayPal payment:", amount)
  }

}


PayPal uses:

pay()

3️⃣ Stripe Adapter

Convert

processPayment() → charge()

class StripeAdapter{

  constructor(stripe){
    this.stripe = stripe
  }

  processPayment(amount){
    this.stripe.charge(amount)
  }

}

4️⃣ PayPal Adapter

Convert

processPayment() → pay()

class PayPalAdapter{

  constructor(paypal){
    this.paypal = paypal
  }

  processPayment(amount){
    this.paypal.pay(amount)
  }

}

5️⃣ Using the Adapters
let stripe = new StripeAdapter(new Stripe())
stripe.processPayment(500)

let paypal = new PayPalAdapter(new PayPal())
paypal.processPayment(700)


Output

Stripe charged: 500
PayPal payment: 700

6️⃣ Visualization
           Client
             |
      processPayment()
             |
        Adapter Layer
        /           \
 StripeAdapter   PayPalAdapter
     |                |
  charge()           pay()
     |                |
  Stripe API       PayPal API

7️⃣ Why Adapter Is Useful

Without adapter:

if(paymentType === "stripe") stripe.charge()
if(paymentType === "paypal") paypal.pay()


Messy code.

With adapter:

payment.processPayment()


Clean and scalable.

8️⃣ Interview One-Line

Adapter Pattern

Converts incompatible interfaces so different systems can work together.