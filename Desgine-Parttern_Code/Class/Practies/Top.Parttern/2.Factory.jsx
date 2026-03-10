4️⃣ Decorator Pattern
Purpose

Add extra functionality dynamically.

Example:

Coffee
Coffee + Milk
Coffee + Milk + Sugar

Structure
Client
  |
Decorator
  |
Original Object

Example
class MilkDecorator{

  constructor(coffee){
    this.coffee = coffee
  }

  cost(){
    return this.coffee.cost() + 20
  }

}


Meaning:

add behavior

⭐ One Super Simple Comparison



🔹 What is Factory Pattern?

Definition:
Factory is a Creational Design Pattern that creates objects 
without exposing the creation logic to the client.

You just ask the factory for an object, and it gives you the correct type.


Useful when you have multiple types of related objects.

Use Case in LLD:

Notification system → SMS, Email, Push

Payment system → CreditCard, PayPal, Wallet

Vehicles → Car, Bike, Truck

Key Idea:

“Client code doesn’t need to know which exact class is being instantiated.”

🔹 Simple JavaScript Example: Notification Factory
// Step 1: Define notification classes

class EmailNotification {
  send(message) {
    console.log("Email sent:", message);
  }
}

class SMSNotification {
  send(message) {
    console.log("SMS sent:", message);
  }
}

class PushNotification {
  send(message) {
    console.log("Push notification sent:", message);
  }
}

// Step 2: Create the Factory
class NotificationFactory {
  static createNotification(type) {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        throw new Error("Invalid notification type");
    }
  }
}

// Step 3: Client uses Factory
const notification1 = NotificationFactory.createNotification("email");
notification1.send("Welcome to our app!");

const notification2 = NotificationFactory.createNotification("sms");
notification2.send("Your OTP is 123456");

const notification3 = NotificationFactory.createNotification("push");
notification3.send("You have a new message");


3️⃣ How It Works

Client (your code) doesn’t need to know how to create a shape

Factory decides which class to instantiate

Easy to add new shapes → just add a new case in ShapeFactory

4️⃣ Why Use Factory Pattern?

Centralizes object creation

Makes code flexible and easy to extend

Reduces repetition if you need similar objects

Helps in interview questions for “how to create objects dynamically”

5️⃣ Real-World Analogy

Think of Starbucks: You ask for a “coffee” → barista (factory) decides whether to make latte, cappuccino, or espresso. You don’t care about the details.