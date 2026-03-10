7️⃣ Abstraction
Code
class Payment {
  pay(){
    throw new Error("Implement this method")
  }
}

class UpiPayment extends Payment{
  pay(){
    console.log("Paying via UPI")
  }
}

Meaning

Parent class forces child to implement method.

Example

const pay = new UpiPayment()
pay.pay()


Output

Paying via UPI


Abstraction hides implementation details. 

Java


Here we use:

extends
method override


So this is OOP inheritance implementing Abstraction.

Meaning

Parent class says:

Every payment MUST have pay()


Child class provides the implementation.

Structure:

Payment
   |
UPIPayment


So this is IS-A relationship

UPIPayment IS-A Payment
