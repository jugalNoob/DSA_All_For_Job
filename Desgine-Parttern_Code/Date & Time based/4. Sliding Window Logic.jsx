🚦 4. Sliding Window Logic
let requests = [];

function hit() {
  const now = Date.now();

  requests.push(now);

  // keep only last 10 sec
  requests = requests.filter(t => now - t < 10000);

  console.log("Active requests:", requests.length);
}

🧠 Use cases:
real-time analytics
traffic monitoring
Kafka consumer tracking