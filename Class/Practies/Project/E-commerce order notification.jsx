class OrderSystem {
  constructor() {
    this.services = [];
  }

  subscribe(service) {
    this.services.push(service);
  }

  notify(order) {
    this.services.forEach(service => service(order));
  }
}

const emailService = (order) => {
  console.log("Email sent for order:", order.id);
};

const smsService = (order) => {
  console.log("SMS sent for order:", order.id);
};

const analyticsService = (order) => {
  console.log("Analytics updated for order:", order.id);
};

const orderSystem = new OrderSystem();

orderSystem.subscribe(emailService);
orderSystem.subscribe(smsService);
orderSystem.subscribe(analyticsService);

orderSystem.notify({ id: 101 });



class Store {
  constructor() {
    this.subscribers = []; // The list of emails
  }

  // Add a customer to the list
  subscribe(customer) {
    this.subscribers.push(customer);
  }

  // Remove a customer from the list
  unsubscribe(customer) {
    this.subscribers = this.subscribers.filter(s => s !== customer);
  }

  // Tell everyone the news!
  notify(message) {
    this.subscribers.forEach(customer => customer.update(message));
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received notification: ${message}`);
  }
}

// --- Using it ---
const nikeStore = new Store();

const userA = new Customer("Alice");
const userB = new Customer("Bob");

nikeStore.subscribe(userA);
nikeStore.subscribe(userB);

// The state changes!
nikeStore.notify("Air Jordans are back in stock!"); 
// Result: Both Alice and Bob get the message.