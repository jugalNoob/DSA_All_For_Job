1️⃣ What is a Set of Stacks?

A Set of Stacks is like stacking plates in real life:

When one stack reaches a threshold/limit, a new stack is created.

Push/pop operations behave as if it’s one large stack.

Helps avoid stack overflow in a single stack.

Use Case:

Limited memory per stack.

Servers/queues with maximum size constraints.

Multi-level undo operations in applications.

2️⃣ Implementation in JavaScript
class SetOfStacks {
  constructor(threshold = 5) {
    this.stacks = [[]];      // Array of stacks
    this.threshold = threshold;
  }

  // Push element
  push(value) {
    let lastStack = this.stacks[this.stacks.length - 1];
    if (lastStack.length >= this.threshold) {
      lastStack = [];
      this.stacks.push(lastStack);
    }
    lastStack.push(value);
  }

  // Pop element
  pop() {
    if (this.stacks.length === 0) {
      console.log("Stack Underflow! No stacks available.");
      return null;
    }
    let lastStack = this.stacks[this.stacks.length - 1];
    const popped = lastStack.pop();
    if (lastStack.length === 0 && this.stacks.length > 1) {
      this.stacks.pop(); // remove empty stack
    }
    return popped;
  }

  // Peek top element
  peek() {
    if (this.stacks.length === 0) return null;
    let lastStack = this.stacks[this.stacks.length - 1];
    return lastStack[lastStack.length - 1];
  }

  // Display all stacks
  display() {
    console.log("Set of Stacks:");
    this.stacks.forEach((stack, idx) => {
      console.log(`Stack ${idx + 1}:`, stack.join(" <- "));
    });
  }
}

// Example usage
const sos = new SetOfStacks(3);
sos.push(10);
sos.push(20);
sos.push(30); // fills first stack
sos.push(40); // goes to new stack
sos.push(50);

sos.display();
/* Output:
Set of Stacks:
Stack 1: 10 <- 20 <- 30
Stack 2: 40 <- 50
*/

console.log("Popped:", sos.pop()); // 50
sos.display();
console.log("Top element:", sos.peek()); // 40

✅ Key Points

Threshold-based stacks: Each stack has a max size.

Push/pop behaves like one big stack.

Useful for memory-limited environments.

Display shows all stacks for debugging.

Advanced variants:

popAt(index): Pop from a specific sub-stack.

If you want, I can draw a visual diagram showing Set of Stacks, in