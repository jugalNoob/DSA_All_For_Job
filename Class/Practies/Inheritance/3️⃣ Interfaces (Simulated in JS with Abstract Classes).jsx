3️⃣ Interfaces (Simulated in JS with Abstract Classes)

Meaning:

An interface is a contract: a class must implement certain methods.

JS does not have built-in interfaces, but you can simulate them using abstract base classes.

Example:

class Payment {
    pay(amount) {
        throw new Error("pay() must be implemented");
    }
}

class CreditCardPayment extends Payment {
    pay(amount) {
        console.log(`Paid ${amount} using credit card`);
    }
}

class PayPalPayment extends Payment {
    pay(amount) {
        console.log(`Paid ${amount} using PayPal`);
    }
}

let payment1 = new CreditCardPayment();
payment1.pay(100); // Paid 100 using credit card

let payment2 = new PayPalPayment();
payment2.pay(200); // Paid 200 using PayPal


✅ Key points:

Payment acts like an interface — it defines the method but doesn’t implement it.

Child classes must implement pay().