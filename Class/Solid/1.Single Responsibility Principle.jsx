SOLID Principles in JavaScript (Simple Explanation)

1. Single Responsibility Principle (SRP)
"A class should have only one reason to change"
→



🧠 What SRP says

A class should have only ONE reason to change

❌ Your first design (Bad – violates SRP)
class MultiFunction {
    emailsend() {}
    otpSend() {}
}

Problem:

👉 This class is doing multiple responsibilities

Email logic
OTP logic

👉 If email changes → modify class
👉 If OTP changes → modify same class

❌ Violates SRP

✅ Your improved design (Good – follows SRP)
class EmailSend {
    send() {}
}

class OtpSend {
    send() {}
}


👉 Now:

EmailSend → only email logic
OtpSend → only OTP logic

✅ Each class has one responsibility

🔥 Improvements (Important for interview)
1. Naming consistency
class OtpSend   // PascalCase


❌ Avoid:

class otpsend

2. Make it more meaningful
class EmailService {
    sendEmail(email, message) {
        console.log(`Sending email to ${email}`);
    }
}

class OtpService {
    sendOtp(number) {
        console.log(`Sending OTP to ${number}`);
    }
}

🚀 Real-world example

👉 In production systems:

Email service → handles SMTP / API
OTP service → handles SMS / verification

They are completely different systems

⚡ Advanced (SRP + Extensibility)

If later you add:

class PushNotificationService {
    sendPush(userId) {}
}


👉 No change needed in existing classes
✅ This is clean design

❗ Key Interview Line

👉 Say this:

“SRP means one class should have one 
responsibility and one reason to change. 
It improves maintainability, testability,
 and scalability.”

🔥 Your Final Clean Version
class EmailService {
    send(email, message) {
        console.log("Email sent");
    }
}

class OtpService {
    send(number) {
        console.log("OTP sent");
    }
}

🎯 Verdict on your code

✔ Concept: ✅ Correct
✔ Design direction: ✅ Good
❗ Improvements: Naming + clarity