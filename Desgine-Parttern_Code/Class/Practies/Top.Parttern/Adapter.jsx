2️⃣ Adapter Pattern
Purpose

Make two incompatible interfaces work together.

Example:

Old API → pay()
New System → makePayment()

Structure
Client
  |
Adapter
  |
Old System

Example
class Adapter{
  constructor(old){
    this.old = old
  }

  makePayment(amount){
    this.old.pay(amount)
  }
}


Meaning:

convert interface