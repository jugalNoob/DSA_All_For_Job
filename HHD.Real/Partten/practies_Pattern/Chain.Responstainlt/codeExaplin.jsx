🧠 1. What is Chain of Responsibility?

👉 One-line:

“Request passes through a chain of handlers until one handles it.”

🎯 Real Example (Logging System)
Levels:
INFO → DEBUG → ERROR


👉 If log level is:

INFO → handled by INFO logger
DEBUG → handled by DEBUG logger
ERROR → handled by ERROR logger
🧠 How it works (simple flow)
Request → InfoLogger → DebugLogger → ErrorLogger


👉 Each logger:

Checks: “Can I handle this?”
If YES → handle
If NO → pass to next
🔥 Visual Flow
Log: ERROR

InfoLogger → can't handle → pass
        ↓
DebugLogger → can't handle → pass
        ↓
ErrorLogger → ✅ handle

🧩 Code (Simple Node.js)
class Logger {
    setNext(next) {
        this.next = next
    }

    log(level, message) {
        if (this.next) {
            this.next.log(level, message)
        }
    }
}

🟢 Info Logger
class InfoLogger extends Logger {
    log(level, message) {
        if (level === "INFO") {
            console.log("INFO:", message)
        } else {
            super.log(level, message)
        }
    }
}

🔵 Debug Logger
class DebugLogger extends Logger {
    log(level, message) {
        if (level === "DEBUG") {
            console.log("DEBUG:", message)
        } else {
            super.log(level, message)
        }
    }
}

🔴 Error Logger
class ErrorLogger extends Logger {
    log(level, message) {
        if (level === "ERROR") {
            console.log("ERROR:", message)
        } else {
            super.log(level, message)
        }
    }
}

🔗 Create Chain
let info = new InfoLogger()
let debug = new DebugLogger()
let error = new ErrorLogger()

info.setNext(debug)
debug.setNext(error)

▶️ Run
info.log("ERROR", "Something broke")

✅ Output
ERROR: Something broke

🧠 Why use this?

❌ Without CoR:

if(level === "INFO") ...
else if(level === "DEBUG") ...
else if(level === "ERROR") ...


👉 Big messy code ❌

✔ With CoR:

Clean code ✅
Easy to extend ✅
Add new level easily ✅
🔥 Real Use Cases
Logging system
Middleware (Express.js)
Authentication chain
Request validation