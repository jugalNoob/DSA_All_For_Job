🔹 1. Strategy Pattern (Which notification?)
class NotificationStrategy {
  send(user, message) {}
}

class EmailStrategy extends NotificationStrategy {
  send(user, message) {
    console.log("Email sent to", user.email);
  }
}

class SMSStrategy extends NotificationStrategy {
  send(user, message) {
    console.log("SMS sent to", user.phone);
  }
}


👉 Decides HOW to send