// Core Pub/Sub structure
const topics = {};

// Subscribe function
const subscribe = (topic, listener) => {
  if (!topics[topic]) {
    topics[topic] = [];
  }
  topics[topic].push(listener);
  console.log(`Subscribed to topic: ${topic}`);
};

// Publish function
const publish = (topic, data) => {
  if (!topics[topic] || topics[topic].length === 0) {
    console.log(`No subscribers for topic: ${topic}`);
    return;
  }
  topics[topic].forEach(listener => listener(data));
};

// --- Usage Example ---

// Subscribers
subscribe("news", data => console.log(`Subscriber 1 received: ${data}`));
subscribe("news", data => console.log(`Subscriber 2 received: ${data}`));
subscribe("news", data => console.log(`Subscriber 3 received: ${data}`));

// Publisher
publish("news", "📰 Today’s Headline: JavaScript conquers the world!");

// Output:
// Subscriber 1 received: 📰 Today’s Headline: JavaScript conquers the world!
// Subscriber 2 received: 📰 Today’s Headline: JavaScript conquers the world!
// Subscriber 3 received: 📰 Today’s Headline: JavaScript conquers the world!

// Add subscribers
const sub1 = data => console.log("Subscriber 1:", data);
const sub2 = data => console.log("Subscriber 2:", data);
const sub3 = data => console.log("Subscriber 3:", data);

subscribe("news", sub1);
subscribe("news", sub2);
subscribe("news", sub3);

// Publish a message
publish("news", "📰 JavaScript conquers the world!");
