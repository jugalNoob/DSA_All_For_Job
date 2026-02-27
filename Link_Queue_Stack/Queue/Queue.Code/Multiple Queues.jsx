What are Multiple Queues?

A Multiple Queue system means:

You have separate queues for different purposes.

Each queue can have its own processing rules (e.g., priority, delay, rate limit).

Useful for:

Priority-based processing (high vs low priority tasks)

Type-based separation (emails vs notifications vs logs)

Parallel processing in multi-threaded or distributed systems

JavaScript Example: Managing Multiple Queues

Here’s a simple example where we have 3 separate queues:

class MultiQueue {
  constructor() {
    this.queues = {}; // Object to store multiple queues
  }

  // Create a new queue
  createQueue(name) {
    if (!this.queues[name]) {
      this.queues[name] = [];
      console.log(`Queue "${name}" created`);
    }
  }

  // Enqueue an item to a specific queue
  enqueue(queueName, value) {
    if (!this.queues[queueName]) {
      console.log(`Queue "${queueName}" does not exist`);
      return;
    }
    this.queues[queueName].push(value);
  }

  // Dequeue an item from a specific queue
  dequeue(queueName) {
    if (!this.queues[queueName] || this.queues[queueName].length === 0) {
      console.log(`Queue "${queueName}" is empty`);
      return null;
    }
    return this.queues[queueName].shift();
  }

  // Display all queues
  display() {
    for (const [name, queue] of Object.entries(this.queues)) {
      console.log(`${name}: [${queue.join(", ")}]`);
    }
  }
}

// Example usage
const mq = new MultiQueue();
mq.createQueue("highPriority");
mq.createQueue("lowPriority");
mq.createQueue("emailQueue");

mq.enqueue("highPriority", "Task 1");
mq.enqueue("lowPriority", "Task 2");
mq.enqueue("emailQueue", "Send Welcome Email");
mq.enqueue("highPriority", "Task 3");

mq.display();
/* Output:
highPriority: [Task 1, Task 3]
lowPriority: [Task 2]
emailQueue: [Send Welcome Email]
*/

console.log("Dequeue from highPriority:", mq.dequeue("highPriority")); // Task 1
mq.display();

✅ Key Points

Each queue is independent, can have its own rules.

Allows parallel processing in Node.js or distributed systems.

Can be combined with Delay Queues, Priority Queues, or Circular Queues for advanced task management.

Used in production systems for worker pools:

highPriority → processed immediately

lowPriority → background processing

emailQueue → delayed sending