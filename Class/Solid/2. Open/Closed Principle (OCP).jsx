2. Open/Closed Principle (OCP)


"Open for extension, closed for modification"

→ You should be able to add new behavior
 without changing existing code



 Great 👍 now you’re moving to SOLID principles level 🔥

🧠 Open/Closed Principle (OCP)

“Software entities (classes, functions) should be OPEN for extension but CLOSED for modification.”

💡 Simple Meaning
✅ You should be able to add new features
❌ Without changing existing code
❌ Bad Example (Violates OCP)
class Payment {
    pay(type) {
        if (type === 'card') {
            console.log('Pay with card');
        } else if (type === 'upi') {
            console.log('Pay with UPI');
        }
    }
}

Problem:

👉 If new payment comes (PayPal, Crypto):

You must modify this class again

❌ Not closed for modification

✅ Good Example (Follows OCP)
Step 1: Base class
class Payment {
    pay() {
        throw new Error('Method not implemented');
    }
}

Step 2: Extend for new behavior
class CardPayment extends Payment {
    pay() {
        console.log('Pay with card');
    }
}

class UpiPayment extends Payment {
    pay() {
        console.log('Pay with UPI');
    }
}

Step 3: Use it
function processPayment(payment) {
    payment.pay();
}

processPayment(new CardPayment());
processPayment(new UpiPayment());

🧠 Why this is good

👉 Want to add new method?

class CryptoPayment extends Payment {
    pay() {
        console.log('Pay with Crypto');
    }
}


✅ No change in old code
✅ Just extend → safe, scalable

🔥 Real-world Example
Payment gateways (Stripe, Razorpay, PayPal)
Notification systems (Email, SMS, Push)
Logging systems (File, DB, Console)
⚡ Compare (Important)



| Bad                  | Good             |
| -------------------- | ---------------- |
| if-else / switch     | polymorphism     |
| modify existing code | extend new class |
| risky                | safe             |



🚀 Interview Answer (Short)

“OCP means we should design systems so that new functionality can be added without modifying existing code, usually using abstraction and inheritance.”

❗ Key Trick Question

👉 Interviewer may ask:
“Is using too many classes good?”

Answer:

❌ Not always
✅ Only when behavior changes frequently
🎯 Your understanding path

You already did:

✅ SRP
Now OCP

Next should be:

LSP (very important tricky one)
ISP
DIP
