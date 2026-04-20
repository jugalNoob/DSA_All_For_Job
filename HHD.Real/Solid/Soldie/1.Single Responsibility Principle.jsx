SOLID Principles in JavaScript (Simple Explanation)

1. Single Responsibility Principle (SRP)
"A class should have only one reason to change"
→ One class = One Job
JavaScript// ❌ Bad - Violates SRP
class UserManager {
    constructor() {}
    
    saveUser(user) { /* save to DB */ }
    sendWelcomeEmail(user) { /* send email */ }
    generateReport(user) { /* generate PDF report */ }
}

// ✅ Good
class UserRepository {
    saveUser(user) { /* only database logic */ }
}

class EmailService {
    sendWelcomeEmail(user) { /* only email logic */ }
}

class ReportGenerator {
    generateUserReport(user) { /* only reporting logic */ }
}