🧠 OOP Questions & Answers (Basic → Advanced)
🟢 BASIC LEVEL
❓ 1. What is OOP?

👉 OOP (Object-Oriented Programming) is a programming paradigm based on objects and classes.

❓ 2. What is a Class?

👉 A class is a blueprint to create objects.

class Car {}

❓ 3. What is an Object?

👉 An object is an instance of a class.

const car = new Car();

❓ 4. What are the 4 pillars of OOP?

👉

Abstraction
Encapsulation
Inheritance
Polymorphism
❓ 5. What is Encapsulation?

👉 Hiding data and exposing via methods

class Bank {
  #balance = 0;
}

❓ 6. What is Abstraction?

👉 Hide complexity, show only essential methods

❓ 7. What is Inheritance?

👉 One class inherits from another

class Animal {}
class Dog extends Animal {}

❓ 8. What is Polymorphism?

👉 Same method → different behavior

❓ 9. What is this keyword?

👉 Refers to the current object

❓ 10. What is constructor?

👉 Special method to initialize object

🟡 INTERMEDIATE LEVEL
❓ 11. What is difference between _var and #var?

👉

_var → convention
#var → real private
❓ 12. What are getters and setters?

👉 Methods to control access to properties

❓ 13. What is static keyword?

👉 Belongs to class, not object

❓ 14. What is prototype?

👉 JS mechanism for inheritance

❓ 15. What is prototype chain?

👉 Object → prototype → parent → null

❓ 16. Difference: Class vs Prototype?

👉 Class = syntax
👉 Prototype = actual working

❓ 17. What is method overriding?

👉 Child class overrides parent method

❓ 18. What is method overloading?

👉 Same method with different params
(JS doesn’t support directly)

❓ 19. What is interface?

👉 Contract defining methods (concept in JS)

❓ 20. Abstract class vs Interface?

👉

Abstract → partial implementation
Interface → only structure
🔵 ADVANCED LEVEL (LLD + DESIGN)
❓ 21. What is Composition?

👉 HAS-A relationship (strong control)

❓ 22. What is Aggregation?

👉 Weak HAS-A relationship

❓ 23. What is Association?

👉 General relationship (no ownership)

❓ 24. Composition vs Inheritance?

👉 Composition preferred for flexibility

❓ 25. What is Strategy Pattern?

👉 Change behavior at runtime

❓ 26. Strategy vs Polymorphism?

👉

Polymorphism → concept
Strategy → pattern using it
❓ 27. What is Factory Pattern?

👉 Creates objects dynamically

❓ 28. What is Observer Pattern?

👉 One-to-many notification system

❓ 29. What is Singleton Pattern?

👉 Only one instance exists

❓ 30. What is Dependency Injection?

👉 Pass dependency instead of creating it

🔴 SYSTEM DESIGN + REAL USE
❓ 31. How is OOP used in backend?

👉

Services
Controllers
Models
❓ 32. Where is abstraction used?

👉 API layer:

login()


Hidden:

DB
Queue
Email
❓ 33. Where is encapsulation used?

👉 Private data:

Password
Balance
❓ 34. Where is polymorphism used?

👉

process(event)


Different handlers

❓ 35. Where is composition used?

👉

Service → uses Repository

🔥 INTERVIEW TRICK QUESTIONS
❓ 36. Is JavaScript truly OOP?

👉 Yes, prototype-based OOP

❓ 37. Difference: __proto__ vs prototype?

👉

prototype → function property
__proto__ → object reference
❓ 38. Can we make private variables in JS?

👉 Yes using:

#variable

❓ 39. Why not always use inheritance?

👉 Leads to:

Tight coupling
Rigid code
❓ 40. Why prefer composition?

👉

Flexible
Reusable
Maintainable
🚀 FINAL MASTER ANSWER (If interviewer asks)

👉 “Explain OOP in 1 answer”

"OOP is a programming paradigm based on objects and classes, using encapsulation for data security, abstraction for simplicity, inheritance for reuse, and polymorphism for flexibility. In real systems, we prefer composition over inheritance and use design patterns like strategy and factory for scalable architecture."

🔥 If You Want Next Level