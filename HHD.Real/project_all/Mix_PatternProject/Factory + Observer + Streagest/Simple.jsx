3️⃣ No default case in factory

👉 What if type is invalid?

✅ Clean & Correct Version
🟢 Notification Strategies
class EmailSend {
  send(user, message) {
    console.log(`📧 Email to ${user.name}: ${message}`);
  }
}

class SmsSend {
  send(user, message) {
    console.log(`📱 SMS to ${user.name}: ${message}`);
  }
}

🟡 Factory Pattern
class NotificationFactory {
  static create(type) {
    if (type === "email") return new EmailSend();
    if (type === "sms") return new SmsSend();

    throw new Error("Invalid notification type");
  }
}

🔵 Observer Pattern (Publisher)
class NewsPublisher {
  constructor() {
    this.subscribers = [];
  }

  subscribe(user) {
    this.subscribers.push(user);
  }

  unsubscribe(user) {
    this.subscribers = this.subscribers.filter(sub => sub !== user);
  }

  notify(news) {
    this.subscribers.forEach(sub => {
      sub.update(news);
    });
  }
}

🟣 Subscriber (Observer)
class Subscriber {
  constructor(name, strategy) {
    this.name = name;
    this.strategy = strategy;
  }

  update(news) {
    this.strategy.send(this, news);
  }
}

🚀 Usage
let news = new NewsPublisher();

let user1 = new Subscriber(
  "Rahul",
  NotificationFactory.create("email")
);

let user2 = new Subscriber(
  "Amit",
  NotificationFactory.create("sms")
);

news.subscribe(user1);
news.subscribe(user2);

news.notify("Today is raining ☔");

🧠 Output
📧 Email to Rahul: Today is raining ☔
📱 SMS to Amit: Today is raining ☔

🎯 Why this is powerful (INTERVIEW GOLD)
✔ Factory
Removes new EmailSend() everywhere
Centralized object creation
✔ Observer
Decouples publisher & subscribers
Easy to scale (1000 users)
🔥 Real-world Example

This pattern is used in:

Notification systems (Email / SMS / Push)
Kafka consumers (publish → many consumers)
Event-driven systems (Node.js EventEmitter)
⚡ One-line memory trick
Factory → “How object is created”
Observer → “Who gets notified”
🚀 Next Level (if you want 😈)
Add Push Notification (Firebase)
Make it async (Kafka / queue based)
Add retry + failure handling (production level)