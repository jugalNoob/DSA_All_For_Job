class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Add element with priority
  enqueue(value, priority) {
    const newNode = { value, priority };
    let added = false;

    // Insert in correct position based on priority
    for (let i = 0; i < this.queue.length; i++) {
      if (priority > this.queue[i].priority) {
        this.queue.splice(i, 0, newNode);
        added = true;
        break;
      }
    }

    // If not added, push to the end
    if (!added) {
      this.queue.push(newNode);
    }
  }

  // Remove element with highest priority
  dequeue() {
    if (this.isEmpty()) {
      console.log("Priority Queue is empty");
      return null;
    }
    return this.queue.shift();
  }

  // Peek element with highest priority
  peek() {
    if (this.isEmpty()) return null;
    return this.queue[0];
  }

  // Check if empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Display queue
  display() {
    console.log(
      "Priority Queue:",
      this.queue.map((n) => `${n.value}(${n.priority})`).join(" <- ")
    );
  }
}

// Example usage
const pq = new PriorityQueue();
pq.enqueue("Task A", 2);
pq.enqueue("Task B", 5);
pq.enqueue("Task C", 1);
pq.display(); // Priority Queue: Task B(5) <- Task A(2) <- Task C(1)
console.log("Dequeued:", pq.dequeue()); // Task B(5)
pq.display(); // Priority Queue: Task A(2) <- Task C(1)
