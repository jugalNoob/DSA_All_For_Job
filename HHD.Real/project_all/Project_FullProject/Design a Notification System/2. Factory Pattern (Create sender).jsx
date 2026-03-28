🔹 2. Factory Pattern (Create sender)
class NotificationFactory {
  static create(type) {
    if (type === "email") return new EmailStrategy();
    if (type === "sms") return new SMSStrategy();
  }
}


👉 Decides WHAT object to create