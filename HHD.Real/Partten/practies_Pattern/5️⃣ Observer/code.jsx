class NewsPublisher {
    constructor() {
        this.subscribers = [];   // List of observers
        this.news = "";          // Optional: current news
    }

    // Subscribe a new subscriber
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
        console.log(`${subscriber.name} subscribed successfully!`);
    }

    // Unsubscribe a subscriber
    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
        console.log(`${subscriber.name} unsubscribed!`);
    }

    // Notify all subscribers with news
    notify(news) {
        console.log(`\n📢 Publishing News: ${news}\n`);
        this.subscribers.forEach(subscriber => {
            subscriber.update(news);
        });
    }
}

// Observer / Subscriber Class
class Subscriber {
    constructor(name) {
        this.name = name;
    }

    update(news) {
        console.log(`${this.name} received: "${news}"`);
    }
}

// ==================== Usage ====================

let publisher = new NewsPublisher();

let sub1 = new Subscriber("Rahul");
let sub2 = new Subscriber("Priya");
let sub3 = new Subscriber("Amit");

publisher.subscribe(sub1);
publisher.subscribe(sub2);
publisher.subscribe(sub3);

publisher.notify("Heavy Rain expected in Jammu today!");

publisher.unsubscribe(sub2);

publisher.notify("New COVID variant detected in India.");
// Output:
// Notification: JavaScript 2026 specification released!
// Mobile App received: JavaScript 2026 specification released!
// Web App received: JavaScript 2026 specification released!


// 1. The Subject (Publisher)
class NewsPublisher {
  constructor() {
    this.subscribers = []; // List of observers
  }

  // Add an observer
  subscribe(observer) {
    this.subscribers.push(observer);
    console.log("A new subscriber was added.");
  }

  // Remove an observer
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
    console.log("A subscriber was removed.");
  }

  // Notify all active observers
  notify(news) {
    console.log(`\nPublishing news: "${news}"`);
    this.subscribers.forEach(subscriber => {
      subscriber.update(news); // Call the common interface method
    });
  }
}

// 2. The Observer (Subscriber)
class Subscriber {
  constructor(name) {
    this.name = name;
  }

  // The method the Subject will call
  update(news) {
    console.log(`${this.name} received the news: ${news}`);
  }
}

// --- Usage ---
const bbcNews = new NewsPublisher();

const phoneApp = new Subscriber("Mobile App User");
const emailClient = new Subscriber("Email Subscriber");

// Subscribing to the publisher
bbcNews.subscribe(phoneApp);
bbcNews.subscribe(emailClient);

// Firing an event
bbcNews.notify("JavaScript 2026 specification released!");

// Unsubscribing
bbcNews.unsubscribe(emailClient);

// Firing another event (only phoneApp will receive this)
bbcNews.notify("Observer Pattern is awesome.");