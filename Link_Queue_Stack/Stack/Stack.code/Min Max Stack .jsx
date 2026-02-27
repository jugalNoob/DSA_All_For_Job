Ah! Now you’re asking about a Min/Max Stack — this is a very common interview question because it tests your ability to track minimum or maximum values efficiently while using a stack.

1️⃣ What is a Min/Max Stack?

A Min Stack is a stack that supports:

push(x) – add an element

pop() – remove the top element

top() – peek the top element

getMin() – return the minimum element in O(1)

Similarly, a Max Stack returns the maximum element in O(1).

Key Idea:

Use an auxiliary stack to keep track of min/max values.

2️⃣ Implementation in JavaScript (Min Stack)
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // auxiliary stack to track minimums
  }

  // Push element
  push(value) {
    this.stack.push(value);

    // Update minStack
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  // Pop element
  pop() {
    if (this.stack.length === 0) return null;

    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped;
  }

  // Peek top element
  top() {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
  }

  // Get minimum element
  getMin() {
    return this.minStack.length ? this.minStack[this.minStack.length - 1] : null;
  }

  // Display stack
  display() {
    console.log("Stack (bottom -> top):", this.stack.join(" <- "));
    console.log("MinStack (min -> top):", this.minStack.join(" <- "));
  }
}

// Example usage
const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(2);
minStack.display();
/* Output:
Stack (bottom -> top): 5 <- 3 <- 7 <- 2
MinStack (min -> top): 5 <- 3 <- 2
*/
console.log("Current Min:", minStack.getMin()); // 2
console.log("Popped:", minStack.pop());         // 2
console.log("Current Min:", minStack.getMin()); // 3
minStack.display();

✅ Key Points

Auxiliary stack keeps track of current min/max.

All operations: push, pop, top, getMin/getMax → O(1) time.

Useful for:

Real-time stock price tracking

Sliding window min/max problems

Undo/redo with min/max tracking

Max stack works the same way: just track maximums in auxiliary stack.