1️⃣ S → Single Responsibility Principle (SRP)

👉 “One class = One job”

❌ Bad Example
class User {
  saveToDB() {}
  sendEmail() {}
}


👉 Problem:

DB logic + Email logic together ❌
✅ Good Example
class UserService {
  saveToDB() {}
}

class EmailService {
  sendEmail() {}
}


👉 Each class has one responsibility ✅

💡 Simple meaning:

👉 “Ek class ek hi kaam kare”