1️⃣ Strategy Pattern
Purpose

Choose different behavior / algorithm at runtime.

Example:

Payment methods
UPI
Card
Stripe

Structure
Client
  |
Context
  |
Strategy Interface
   /    |    \
UPI   Card  Stripe

Example
class PaymentContext{
  constructor(strategy){
    this.strategy = strategy
  }

  pay(amount){
    this.strategy.pay(amount)
  }
}


Meaning:

change algorithm




class paymentStrategy{

    pay(amount){
        throw new Error('error methods noraml')
    }
}


class UipPayment extends paymentStrategy{
    pay(amount){
        console.log('padi' , amount)
    }
}


class Strip extends paymentStrategy{

    pay(amount){
        console.log('strip' , amount)
    }
}



class PaymentContext{

  constructor(strategy){
    this.strategy = strategy
  }

  payNow(amount){
    this.strategy.pay(amount)
  }

}

const payment = new PaymentContext(new UipPayment())

payment.payNow(500)

const payments = new PaymentContext(new Strip())

payments.payNow(1000)





The Strategy Pattern means:

Define multiple algorithms (strategies) and switch them at runtime.

In simple words:

Different ways to do the same task


Example: Payment system

UPI
Credit Card
Paypal


All are different strategies to pay.

1️⃣ Step 1 — Strategy Interface (Base Class)
class PaymentStrategy {

  pay(amount){
    throw new Error("Payment method not implemented")
  }

}


Meaning:

All payment methods MUST implement pay()

2️⃣ Step 2 — Concrete Strategies
UPI Payment
class UpiPayment extends PaymentStrategy{

  pay(amount){
    console.log("Paid", amount, "using UPI")
  }

}

Card Payment
class CardPayment extends PaymentStrategy{

  pay(amount){
    console.log("Paid", amount, "using Card")
  }

}

PayPal Payment
class PaypalPayment extends PaymentStrategy{

  pay(amount){
    console.log("Paid", amount, "using Paypal")
  }

}

3️⃣ Step 3 — Context Class

The context uses a strategy.

class PaymentContext{

  constructor(strategy){
    this.strategy = strategy
  }

  payNow(amount){
    this.strategy.pay(amount)
  }

}


Meaning:

Context does not know HOW payment happens
It just calls strategy

4️⃣ Step 4 — Using the Strategy
UPI Payment
const payment = new PaymentContext(new UpiPayment())

payment.payNow(500)


Output

Paid 500 using UPI

Card Payment
const payment = new PaymentContext(new CardPayment())

payment.payNow(1000)


Output

Paid 1000 using Card

5️⃣ Flow Diagram
PaymentContext
      |
      v
PaymentStrategy
   /    |    \
UPI   Card   Paypal

6️⃣ Step-by-Step Execution
new PaymentContext(new UpiPayment())


Context stores strategy.

this.strategy = UpiPayment


Then:

payNow(500)


calls

UpiPayment.pay(500)

7️⃣ Why Strategy Pattern Is Useful

Without strategy:

if(type === "upi"){}
else if(type === "card"){}
else if(type === "paypal"){}


Bad design ❌

With strategy:

just change the strategy object


Clean code ✅

8️⃣ Real JavaScript Example

This pattern is used in:

payment gateways

sorting algorithms

authentication systems

compression methods

🎯 Interview One-Line Answer

Strategy Pattern

Allows selecting an algorithm (strategy) at runtime without changing the client code.