| Feature | Adapter                | Strategy                 |
| ------- | ---------------------- | ------------------------ |
| Purpose | Convert interface      | Select algorithm         |
| Problem | Incompatible systems   | Multiple behaviors       |
| Methods | Different method names | Same method name         |
| Focus   | Compatibility          | Flexibility              |
| Example | API integration        | Payment method selection |



5️⃣ Real Backend Example
Adapter

Used when integrating:

Stripe

PayPal

Razorpay

Each API different.

Adapter converts them to:

processPayment()

Strategy

Used when selecting logic.

Example:

Discount strategy

Festival discount
Premium discount
Coupon discount


Each strategy different.

6️⃣ Interview One-Line Answer

Adapter Pattern:

Converts one interface into another so incompatible systems can work together.

Strategy Pattern:

Defines multiple algorithms and allows selecting one at runtime.

7️⃣ Easy Memory Trick
Adapter = Translator
Strategy = Algorithm Selector


✅ Since you are preparing for Node.js backend interviews, I can also explain 5 design patterns that interviewers ask most:

1️⃣ Singleton
2️⃣ Factory
3️⃣ Strategy
4️⃣ Adapter
5️⃣ Observer

(with real Node.js examples like Kafka, Redis, API systems).