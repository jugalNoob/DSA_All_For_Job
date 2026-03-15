                Client
                   |
             Load Balancer
                   |
                Node.js API
                   |
------------------------------------------------
| Singleton → MongoDB / Redis Connection
| Factory   → Notification Service
| Strategy  → Payment Method
| Adapter   → Stripe / PayPal API
| Observer  → Kafka Events
------------------------------------------------



1️⃣ Singleton Pattern

👉 Only one instance of a class exists in the whole application

Used in Projects

Database connection

Redis connection

Logger service

Configuration manager

Example project

Node.js API → MongoDB connection


You must create only one DB connection, otherwise memory and connection limits will break.

Example

class Database{

  constructor(){
    if(Database.instance){
      return Database.instance
    }

    console.log("DB connected")

    Database.instance = this
  }

}

let db1 = new Database()
let db2 = new Database()


Output

DB connected


Only one instance created.

2️⃣ Factory Pattern

👉 Creates objects without exposing creation logic

Used when multiple object types exist.

Used in Projects

User role creation

Payment gateway selection

Notification system

Logger types

Example project

Notification system
Email / SMS / Push


Code

class Email{
  send(){
    console.log("Email sent")
  }
}

class SMS{
  send(){
    console.log("SMS sent")
  }
}

class NotificationFactory{

  static create(type){

    if(type === "email") return new Email()
    if(type === "sms") return new SMS()

  }

}

let notify = NotificationFactory.create("email")
notify.send()

3️⃣ Strategy Pattern

👉 Choose one algorithm from many

Used in Projects

Payment systems

Discount calculation

Sorting algorithms

Authentication methods

Example project

E-commerce checkout


Payment methods

Credit Card
UPI
PayPal


Code

class UPI{
  pay(amount){
    console.log("UPI payment:", amount)
  }
}

class Card{
  pay(amount){
    console.log("Card payment:", amount)
  }
}

class Payment{

  constructor(strategy){
    this.strategy = strategy
  }

  pay(amount){
    this.strategy.pay(amount)
  }

}

let payment = new Payment(new UPI())
payment.pay(500)

4️⃣ Adapter Pattern

👉 Connect incompatible systems

Used in Projects

Third-party API integration

Payment gateways

Legacy systems

External services

Example project

Stripe / PayPal integration


Each API different.

Adapter converts them to:

processPayment()


Code

class Stripe{
  charge(amount){
    console.log("Stripe:", amount)
  }
}

class StripeAdapter{

  constructor(stripe){
    this.stripe = stripe
  }

  processPayment(amount){
    this.stripe.charge(amount)
  }

}

let payment = new StripeAdapter(new Stripe())
payment.processPayment(1000)

5️⃣ Observer Pattern

👉 One object notifies multiple objects when something changes

Used in Projects

Event systems

Kafka consumers

Notification systems

Real-time updates

Example project

Order placed → send notifications

Email
SMS
Analytics


Code

class Order{

  constructor(){
    this.observers = []
  }

  subscribe(fn){
    this.observers.push(fn)
  }

  notify(data){
    this.observers.forEach(fn => fn(data))
  }

}

let order = new Order()

order.subscribe((data)=>console.log("Email sent:", data))
order.subscribe((data)=>console.log("SMS sent:", data))

order.notify("Order placed")


Output

Email sent: Order placed
SMS sent: Order placed

6️⃣ Real Backend Architecture Using These

Example Node.js microservice project

Client
  |
API Server
  |
--------------------------------
| Singleton → DB / Redis
| Factory → Notification type
| Strategy → Payment method
| Adapter → Stripe / PayPal API
| Observer → Kafka events
--------------------------------

7️⃣ Interview One-Line Explanation

| Pattern   | One Line                         |
| --------- | -------------------------------- |
| Singleton | Only one instance exists         |
| Factory   | Creates objects dynamically      |
| Strategy  | Selects algorithm at runtime     |
| Adapter   | Converts incompatible interfaces |
| Observer  | One change notifies many         |

