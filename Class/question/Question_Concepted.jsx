✅ Difference between _balance vs #balance (VERY asked in interviews)


🧠 _balance vs #balance in JavaScript


🟡 1. _balance (Convention Only)
class Bank {
  constructor(amount) {
    this._balance = amount; // "protected" by convention
  }
}

const user = new Bank(1000);

console.log(user._balance); // ✅ Accessible

🔍 Meaning:
_ is just a naming convention
It means: “Hey developer, don’t touch this” ⚠️
But JS does NOT enforce it

👉 Anyone can still do:

user._balance = -99999; // ❌ allowed


🔴 2. #balance (Real Private Field)
class Bank {
  #balance;

  constructor(amount) {
    this.#balance = amount;
  }
}

const user = new Bank(1000);

console.log(user.#balance); // ❌ Syntax Error

🔍 Meaning:
# = true private
Enforced by JavaScript engine
Cannot access outside class

👉 Even this fails:

user["#balance"]; // ❌ undefined

| Feature         | `_balance`      | `#balance`           |
| --------------- | --------------- | -------------------- |
| Access control  | ❌ Not enforced  | ✅ Enforced by JS     |
| Type            | Public property | Private field        |
| Outside access  | ✅ Allowed       | ❌ Not allowed        |
| Safety          | ❌ Low           | ✅ High               |
| Interview level | Basic           | Advanced / Modern JS |



00::: --- :::

Overriding                      vs                    Overloading

🧠 1. Method Overriding
👉 Definition

When a child class changes the implementation of a method from the parent class

💻 Example (JavaScript)
class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Dog barks

🔍 What Happened?
Parent: speak()
Child: also speak()
Child overrides parent

👉 Same method, different implementation

🎯 Key Points
Requires inheritance
Happens at runtime
Same method name + same parameters
🧠 2. Method Overloading
👉 Definition

Same method name with different parameters

⚠️ Important (JavaScript)

👉 JS does NOT support true overloading
👉 But we simulate it

💻 Example (Simulated)
function add(a, b) {
  if (b === undefined) {
    return a;
  }
  return a + b;
}

console.log(add(5));      // 5
console.log(add(5, 10));  // 15

🔍 What Happened?
Same function name: add
Different behavior based on arguments

👉 That’s overloading (simulated)

⚔️ Overriding vs Overloading


 | Feature         | Overriding 🔁        | Overloading ➕              |
| --------------- | -------------------- | -------------------------- |
| Definition      | Change parent method | Same method, diff params   |
| Requires        | Inheritance          | No inheritance needed      |
| JS Support      | ✅ Yes                | ❌ Not direct               |
| Example         | `Dog.speak()`        | `add(a)` / `add(a,b)`      |
| Runtime/Compile | Runtime              | Compile-time (other langs) |




🧠 Simple Memory Trick
Override  → replace behavior
Overload  → add variations

🔥 Real-Life Example
Overriding
Parent → login()
Child → login() with OTP

Overloading
search()
search(name)
search(name, age)

🚀 In Your System Design
Overriding
class Notification {
  send() {}
}

class Email extends Notification {
  send() {}
}

Overloading (Simulated)
function send(msg, type) {
  if (!type) console.log("default");
  else console.log(type);
}

🎯 Interview One-Liner

"Method overriding allows a subclass to provide a specific implementation of a method, while method overloading allows multiple methods with the same name but different parameters."

🔥 Final Summary
Overriding → inheritance + replace method
Overloading → same name + different inp

