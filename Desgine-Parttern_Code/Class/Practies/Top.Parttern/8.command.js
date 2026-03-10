class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(obs => obs !== fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

const user1 = (data) => {
  console.log("User1 received:", data);
};

const user2 = (data) => {
  console.log("User2 received:", data);
};

// Create subject
const subject = new Subject();

// Subscribe observers
subject.subscribe(user1);
subject.subscribe(user2);

subject.unsubscribe(user1)

// Trigger notification
subject.notify("New video uploaded!");