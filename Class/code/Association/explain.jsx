🔍 Why This is Association?
Person does NOT own Bank
Bank does NOT depend on Person
Just interaction
🧩 Types of Association
1. One-to-One
Person ↔ Passport

2. One-to-Many
Teacher → Students

3. Many-to-Many
User ↔ Courses

⚔️ Association vs Aggregation vs Composition


| Feature      | Association ⚪    | Aggregation 🟡  | Composition 🔴  |
| ------------ | ---------------- | --------------- | --------------- |
| Relationship | Uses / interacts | HAS-A (weak)    | HAS-A (strong)  |
| Ownership    | ❌ None           | ⚠️ Weak         | ✅ Strong        |
| Lifetime     | Independent      | Independent     | Dependent       |
| Example      | Person uses Bank | Car uses Engine | Car owns Engine |



🔥 Key Difference (Very Important)
Association → no ownership
Aggregation → weak ownership
Composition → strong ownership

🧠 In Your System Design
Association Example:
class LoginController {
  login(userService) {
    userService.validate();
  }
}


👉 Here:

Controller just uses service
No ownership
No lifecycle dependency
🚀 Why Association Matters
Basic building block of all relationships
Keeps system loosely coupled
Makes code modular
🎯 Interview One-Liner

"Association is a relationship where two objects interact with each other without ownership or lifecycle dependency."

🧠 Memory Trick
Association → just knows each other
Aggregation → uses each other
Composition → owns each other

🔥 Final Visual
Association:
Person ----> Bank (interaction only)

Aggregation:
Car ----> Engine (uses)

Composition:
Car ----> Engine (owns)


If you want next level, I can show: