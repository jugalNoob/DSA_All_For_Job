💻 Simple Example
class User {
  constructor(name) {
    this._name = name;
  }

  // Getter (read)
  get name() {
    return this._name;
  }

  // Setter (write)
  set name(value) {
    if (value.length < 3) {
      console.log("Name too short");
      return;
    }
    this._name = value;
  }
}

const user = new User("Jugal");

console.log(user.name); // getter → Jugal

user.name = "Jo";       // setter → validation fail
user.name = "John";     // setter → success

console.log(user.name); // John

🔍 How It Works
✅ Getter
get name()


👉 Called when you do:

user.name

✅ Setter
set name(value)


👉 Called when you do:

user.name = "John"

🔥 Important Trick

👉 Looks like property, but actually function

user.name      → getter()
user.name = x  → setter(x)

⚠️ Why _name?
this._name


👉 Avoid infinite loop

❌ Wrong:

get name() {
  return this.name; // recursion 💥
}

🧠 Real-Life Example

👉 Think of ATM

Check balance → getter
Deposit money → setter
🧩 Without Getter/Setter (Bad)
user.name = ""; // no validation ❌

🧩 With Getter/Setter (Good)
set name(value) {
  if (!value) throw Error("Invalid");
}

🚀 Use Cases
Validation
Logging
Formatting
Security
🎯 Interview One-Liner

"Getters and setters allow controlled access to object properties while hiding internal implementation."

🔥 Final Summary
Getter → read value
Setter → update value with control
