
🔍 Step-by-Step Explanation
1. Class Definition
class Bank {


👉 You are creating a blueprint for bank accounts.

2. Private Variable
#balance = 0;


👉 This is VERY IMPORTANT

# means private field
Only accessible inside the class
Outside access is completely blocked

💡 Think:

#balance → hidden locker 🔒

3. Constructor
constructor(amount) {
  this.#balance = amount;
}


👉 Runs when object is created:

const user = new Bank(1000);


✔ Sets:

#balance = 1000

4. Deposit Method
deposit(amount) {
  this.#balance += amount;
}


👉 Adds money to balance

Example:

user.deposit(500);


Now:

balance = 1500

5. Getter Method
getBalance() {
  return this.#balance;
}


👉 Safe way to read balance

user.getBalance(); // 1000


✔ Allowed because:

It’s inside class
You control what to return
6. Object Creation
const user = new Bank(1000);


👉 Creates new bank account

user.#balance = 1000 (internally)

7. Access via Method ✅
console.log(user.getBalance());


👉 Output:

1000


✔ Works because:

You are using public method
8. Direct Access ❌
console.log(user.#balance);


👉 ❌ ERROR

Why?

#balance is private
Cannot be accessed outside class

💥 JavaScript throws:

SyntaxError: Private field '#balance' must be declared in an enclosing class

🔥 Core Concept (Important)
Inside Class ✅
this.#balance

Outside Class ❌
user.#balance

🧠 What Concepts You Used
🔒 Encapsulation
Hiding data (#balance)
🎭 Abstraction
Showing only needed method (getBalance())
🧩 Flow Visualization
User → Bank Object
        │
        ├── deposit()  → modify balance
        ├── getBalance() → read balance
        │
        ❌ cannot access #balance directly

🚀 Simple Analogy

Think of UPI app:

You can:
Check balance ✅
Send money ✅
You cannot:
Directly edit bank DB ❌

👉 Same concept

🎯 Final One-Line Understanding

#balance is hidden (encapsulation), and getBalance() gives controlled access (abstraction).