Ah! Now you’re asking about a Delay Queue — this is more of a system design / messaging pattern rather than just a data structure. Let me explain clearly.

What is a Delay Queue?

A Delay Queue is a queue where elements are scheduled to be processed after a specific delay.

You enqueue an item with a timestamp or delay.

The queue will only release items after their delay has passed.

Useful for:

Retry mechanisms

Scheduled tasks

Rate-limiting jobs

Expired tasks handling

JavaScript Implementation (Simple)

This version uses setTimeout to simulate delayed processing:

class DelayQueue {
  constructor() {
    this.queue = [];
  }

  // Enqueue a task with a delay in milliseconds
  enqueue(task, delay) {
    const executeTime = Date.now() + delay;
    this.queue.push({ task, executeTime });

    // Sort queue by executeTime (optional for clarity)
    this.queue.sort((a, b) => a.executeTime - b.executeTime);

    // Schedule execution
    setTimeout(() => {
      this.dequeue();
    }, delay);
  }

  // Process the task
  dequeue() {
    if (this.queue.length === 0) return;

    const item = this.queue.shift();
    console.log(`Executing task: ${item.task} at ${new Date().toLocaleTimeString()}`);
  }

  display() {
    console.log(
      "Delay Queue:",
      this.queue.map((t) => `${t.task} (exec at ${new Date(t.executeTime).toLocaleTimeString()})`)
    );
  }
}

// Example usage
const dq = new DelayQueue();
dq.enqueue("Task A", 3000); // 3 seconds delay
dq.enqueue("Task B", 1000); // 1 second delay
dq.enqueue("Task C", 5000); // 5 seconds delay
dq.display();


Output Example (after respective delays):

Executing task: Task B at 12:00:01
Executing task: Task A at 12:00:03
Executing task: Task C at 12:00:05

✅ Key Points

Each item has a timestamp or delay.

Queue only releases items after their delay.

Can be implemented with:

Simple setTimeout (for small-scale Node.js tasks)

Priority queue / heap (for large-scale or high-precision systems)

Common in message brokers:

RabbitMQ → Delayed Message Plugin

Kafka → schedule with timestamp + consumer filter

Redis → sorted set + timestamps