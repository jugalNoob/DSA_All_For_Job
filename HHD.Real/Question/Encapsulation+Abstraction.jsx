✅ Perfect Answer (Service Company Level)
🟢 Encapsulation

👉 Encapsulation means:

Wrapping data and methods together and restricting direct access

Example:

class Bank {
  #balance = 1000; // private

  getBalance() {
    return this.#balance;
  }
}


👉 We hide data using private variables

🔵 Abstraction

👉 Abstraction means:

Hiding internal implementation and showing only necessary details

Example:

class Car {
  start() {
    console.log("Car started");
  }
}


👉 User doesn’t know how engine works internally

🔥 Key Difference (1 Line)

Encapsulation = Data hiding
Abstraction = Implementation hiding

🎯 Interview Tip

👉 Say this line:

“Encapsulation protects data, while abstraction hides complexity.”

🚀 Feedback on You

✅ Good — you stayed on question this time
👉 Just remember to always:

Define
Give example
Give 1-line difference