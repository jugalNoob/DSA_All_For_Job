class Queue {
  constructor(maxSize = Infinity) {
    this.data = [];
    this.maxSize = maxSize;
  }

  // Add element to the queue
  enqueue(value) {
    if (this.data.length >= this.maxSize) {
      console.log("Queue is already full");
    } else {
      this.data.push(value);
    }
  }

  // Remove element from the front of the queue
  dequeue() {
    if (this.data.length === 0) {
      console.log("Queue is already empty");
      return null;
    } else {
      return this.data.shift(); // Removes and returns the first element
    }
  }

  // Display the queue
  display() {
    console.log("Queue elements:", this.data.join(" <- "));
  }

  // Peek the front element
  front() {
    if (this.data.length === 0) return null;
    return this.data[0];
  }

  // Check if empty
  isEmpty() {
    return this.data.length === 0;
  }

  // Check size
  size() {
    return this.data.length;
  }
}

// Example usage
const q = new Queue(5);
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.display(); // Queue elements: 10 <- 20 <- 30
q.dequeue();
q.display(); // Queue elements: 20 <- 30
console.log("Front element:", q.front()); // Front element: 20
