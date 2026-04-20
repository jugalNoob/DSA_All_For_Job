class Payment {
  pay(amount) {
    console.log("Processing payment...");
  }
}

class CreditCard extends Payment {
  pay(amount) {
    console.log("Paid using Credit Card:", amount);
  }
}

class UPI extends Payment {
  pay(amount) {
    console.log("Paid using UPI:", amount);
  }
}



🧪 Usage
function processPayment(method) {
  method.pay(1000);
}

processPayment(new CreditCard());
processPayment(new UPI());