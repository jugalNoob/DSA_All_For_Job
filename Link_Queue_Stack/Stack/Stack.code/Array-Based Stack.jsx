1️⃣ What is an Array-Based Stack?

An Array-Based Stack uses a dynamic array (or fixed-size array) to store elements.

Push: Add element at the end of the array

Pop: Remove element from the end of the array

Top / Peek: Check the last element without removing it

isEmpty: Check if array length is 0

Characteristics:

Simple to implement in JavaScript using the built-in array methods push() and pop().

Time complexity: O(1) for push and pop.

2️⃣ Implementation in JavaScript (Array-Based Stack)
class ArrayStack {
  constructor(maxSize = Infinity) {
    this.data = [];
    this.maxSize = maxSize;
  }

  // Push element onto stack
  push(value) {
    if (this.data.length >= this.maxSize) {
      console.log("Stack Overflow! Cannot push:", value);
      return;
    }
    this.data.push(value);
  }

  // Pop element from stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow! Stack is empty.");
      return null;
    }
    return this.data.pop();
  }

  // Peek top element
  peek() {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.data.length === 0;
  }

  // Display stack
  display() {
    console.log("Stack (bottom -> top):", this.data.join(" <- "));
  }
}

// Example usage
const stack = new ArrayStack(5);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60); // Stack Overflow
stack.display(); // Stack (bottom -> top): 10 <- 20 <- 30 <- 40 <- 50

console.log("Popped:", stack.pop()); // 50
console.log("Top element:", stack.peek()); // 40
stack.display(); // Stack (bottom -> top): 10 <- 20 <- 30 <- 40

✅ Key Points

Simple & built-in: Uses JavaScript array push and pop.

Optional max size: Can prevent overflow by limiting array length.

LIFO behavior: Last-in, first-out.

Time Complexity: O(1) for push/pop (amortized if dynamic resizing occurs).