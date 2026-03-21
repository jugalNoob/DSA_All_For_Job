Perfect 🔥 — now we’ll go next level: tricky interview scenarios where they test if you can choose the right pattern in real systems, not just name them.

I’ll give 10+ high-level scenarios with explanation of which pattern to pick and why — exactly like Google / Amazon / FAANG interviews.

🚀 🎯 TRICKY INTERVIEW SCENARIOS: PATTERN SELECTION
Scenario 1: Payment Gateway Integration

Problem:
You need to support multiple payment providers (Stripe, Razorpay, PayPal) and allow switching between payment methods dynamically.

Pattern Selection:

Adapter → To handle different APIs

Strategy → To switch payment methods dynamically

Factory → To create the provider object

Tricky Question:

“Why not just create separate classes for each provider?”

Answer:

It will tightly couple code; Adapter + Factory + Strategy makes it extensible & decoupled.

Scenario 2: Trading System Order Handling

Problem:
You want to queue orders and execute them asynchronously. Orders may be BUY, SELL, or CANCEL.

Pattern Selection:

Command → Encapsulate orders as objects

Observer → Notify UI, wallet, or analytics services

Strategy → Different matching algorithms (price-time / FIFO / custom)

Tricky Question:

“Why Command over just calling service methods directly?”

Answer:

Command decouples request creation from execution, enables retries, logging, and async processing.

Scenario 3: Chat Application (Real-Time Notifications)

Problem:
You need to notify multiple users when a new message arrives.

Pattern Selection:

Observer → Users are observers of chat channels

Singleton → Single WebSocket or connection manager

Tricky Question:

“Why not just loop through all users and send notifications?”

Answer:

Observer automatically decouples sender & receivers; easier to add/remove observers dynamically.

Scenario 4: Logging System

Problem:
You want to log to multiple destinations: File, DB, Console, Cloud.

Pattern Selection:

Decorator → Add logging behaviors dynamically

Chain of Responsibility → Pipeline of log processors

Tricky Question:

“Why not just call all log functions in one method?”

Answer:

Decorator + Chain → flexible, extensible, maintainable; can add/remove log destinations without touching core code.

Scenario 5: Rate Limiter Service

Problem:
API should support multiple throttling strategies: Fixed Window, Sliding Window, Token Bucket.

Pattern Selection:

Strategy → Switch throttling algorithms dynamically

Singleton → Redis connection / centralized counter

Tricky Question:

“Why not hardcode the algorithm?”

Answer:

Strategy allows runtime flexibility; easy to extend without changing core code.

Scenario 6: File Upload System

Problem:
You want to compress and encrypt files before uploading to cloud or local storage.

Pattern Selection:

Decorator → Wrap file object with additional features (compression/encryption)

Strategy → Choose upload destination (S3 / local / FTP)

Tricky Question:

“Why use Decorator, not subclass?”

Answer:

Decorator allows dynamic addition of features at runtime, subclassing creates combinatorial explosion.

Scenario 7: Parking Lot System

Problem:
Cars, Bikes, Trucks — each type has different slot allocation logic.

Pattern Selection:

Factory → Create vehicle object

Strategy → Allocate slot logic

State → Track slot state (Free/Occupied/Reserved)

Tricky Question:

“Why not just use if-else?”

Answer:

Strategy + Factory → flexible, decoupled, scalable design for future vehicle types.

Scenario 8: Authentication System

Problem:
Multiple authentication methods: JWT, OAuth, API Key, LDAP.

Pattern Selection:

Chain of Responsibility → Process request through multiple auth handlers

Tricky Question:

“Why not pick one method in code?”

Answer:

Chain allows flexible multi-step authentication without tight coupling; easy to extend new methods.

Scenario 9: Payment Retry System

Problem:
Payment may fail and should be retried with different provider or method.

Pattern Selection:

Command → Retry request encapsulated

Strategy → Choose alternate provider

Observer → Notify user/UI on retry attempt

Tricky Question:

“Why Command and Strategy together?”

Answer:

Command decouples execution; Strategy chooses algorithm/provider dynamically; Observer notifies asynchronously.

Scenario 10: Document Processing System

Problem:
Documents can be scanned, converted to PDF, encrypted, and sent via email.

Pattern Selection:

Decorator → Add behaviors like encrypt, compress

Chain of Responsibility → Sequential processing steps

Tricky Question:

“Why not just one large processing function?”

Answer:

Decorator + Chain → modular, maintainable, easy to extend with new processing steps.

🧠 QUICK INTERVIEW CHEAT SHEET (Tricky Logic)


| Problem Type            | Recommended Patterns | Reason                         |
| ----------------------- | -------------------- | ------------------------------ |
| Different APIs          | Adapter              | Decouple client & provider     |
| Encapsulate request     | Command              | Async, retry, queue            |
| Multiple algorithms     | Strategy             | Runtime flexibility            |
| Object creation         | Factory              | Extensibility                  |
| Event system            | Observer             | Decoupling, notifications      |
| Single instance         | Singleton            | Resource sharing               |
| Object behavior changes | State                | Context-dependent behavior     |
| Add feature dynamically | Decorator            | Avoid combinatorial subclasses |
| Sequential processing   | Chain                | Flexible pipelines             |



INTERVIEW TIP

Don’t just name pattern

Always explain why it’s better than alternatives

Mention future extensibility & maintainability