class CircularQueue {
  constructor(maxSize) {
    this.queue = new Array(maxSize);
    this.maxSize = maxSize;
    this.front = -1;
    this.rear = -1;
  }

  // Check if queue is full
  isFull() {
    return (this.rear + 1) % this.maxSize === this.front;
  }

  // Check if queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // Add element
  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full");
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
      this.queue[this.rear] = value;
    } else {
      this.rear = (this.rear + 1) % this.maxSize;
      this.queue[this.rear] = value;
    }
  }

  // Remove element
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }

    const removed = this.queue[this.front];

    if (this.front === this.rear) {
      // Only one element was present
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }

    return removed;
  }

  // Get front element
  peek() {
    if (this.isEmpty()) return null;
    return this.queue[this.front];
  }

  // Display queue elements
  display() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let i = this.front;
    let result = [];
    while (true) {
      result.push(this.queue[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.maxSize;
    }
    console.log("Queue elements:", result.join(" <- "));
  }
}

// Example usage
const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.display(); // Queue elements: 10 <- 20 <- 30
cq.dequeue();
cq.display(); // Queue elements: 20 <- 30
cq.enqueue(40);
cq.enqueue(50);
cq.enqueue(60);
cq.display(); // Queue elements: 20 <- 30 <- 40 <- 50 <- 60
cq.enqueue(70); // Queue is full


✅ Key Features:

Fixed size array → no shifting needed.

front and rear pointers wrap around using modulo (%) → circular behavior.

enqueue and dequeue are O(1).

Proper handling of empty and full conditions.