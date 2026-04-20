Nice 👍 this one is easy but very important in interviews.

🧠 Interface Segregation Principle (ISP)

“Don’t force a class to implement methods it doesn’t need.”

💡 Simple Meaning

👉 Big interface ❌
👉 Small, specific interfaces ✅

❌ Bad Example (Violates ISP)
class Machine {
    print() {}
    scan() {}
    fax() {}
}

Problem:

Now every class must implement ALL methods ❌

class Printer extends Machine {
    print() { console.log('Printing'); }

    scan() { throw new Error('Not supported'); } ❌
    fax() { throw new Error('Not supported'); } ❌
}


👉 Printer doesn’t need scan/fax
👉 But forced to implement ❌

✅ Good Example (Follows ISP)

👉 Split into small interfaces

class Printer {
    print() {
        console.log('Printing');
    }
}

class Scanner {
    scan() {
        console.log('Scanning');
    }
}

class Fax {
    fax() {
        console.log('Faxing');
    }
}

Combine when needed
class MultiFunctionPrinter {
    print() { console.log('Printing'); }
    scan() { console.log('Scanning'); }
}

🧠 Why this is good
Classes only implement what they need ✅
No unnecessary code ❌
Easier to maintain
🔥 Real-world Example
❌ Bad
class UserService {
    login() {}
    sendEmail() {}
    uploadVideo() {}
}


👉 One class doing too much

✅ Good
class AuthService {
    login() {}
}

class EmailService {
    sendEmail() {}
}

class VideoService {
    uploadVideo() {}
}

⚡ Difference from SRP (Important)


| SRP                          | ISP              |
| ---------------------------- | ---------------- |
| One responsibility per class | Small interfaces |
| Focus on class               | Focus on methods |




🚀 Interview Answer (Short)

“ISP means we should split large interfaces into smaller ones so
 that classes only implement the methods they actually use.”




❗ Trick Question

👉 “Is ISP only for interfaces?”

Answer:

❌ No (JS doesn’t have real interfaces)
✅ It’s about design principle