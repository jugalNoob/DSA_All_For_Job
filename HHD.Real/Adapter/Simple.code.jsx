Good question 👍
Many people confuse Adapter Pattern and Strategy Pattern in interviews. They are very different design patterns.

I will explain simple difference + code + interview explanation.

1️⃣ Core Difference


| Pattern      | Purpose                          |
| ------------ | -------------------------------- |
| **Adapter**  | Convert one interface to another |
| **Strategy** | Choose one algorithm from many   |



Simple way to remember:

Adapter = Translator
Strategy = Decision Maker

2️⃣ Adapter Pattern (Interface Conversion)

Problem:

Two systems cannot communicate because methods are different.

Example

Old system → pay()
New system → makePayment()


Adapter converts.

makePayment() → pay()


Code:

class OldPayment{
  pay(amount){
    console.log("Old payment:", amount)
  }
}

class PaymentAdapter{

  constructor(old){
    this.old = old
  }

  makePayment(amount){
    this.old.pay(amount)
  }

}

let adapter = new PaymentAdapter(new OldPayment())
adapter.makePayment(100)


Visualization

Client
  |
Adapter
  |
Old System


Adapter changes interface.