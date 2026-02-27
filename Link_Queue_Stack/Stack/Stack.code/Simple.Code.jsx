1️⃣ What is a Stack?

A Stack is a LIFO (Last In, First Out) data structure:

Push: Add an element to the top of the stack

Pop: Remove the element from the top of the stack

Peek / Top: Look at the top element without removing it

isEmpty: Check if the stack is empty

Think of it like a stack of plates — the last plate you put on top is the first one you take off.

2️⃣ Issues in Your Code

Variable names: cureent → typo, should be current.

Stack overflow check: if(cureent > max) → should be >= max (because arrays are 0-indexed).

alert in pop() is not recommended; better to console.log.

data.length = current works but can be clearer.

3️⃣ Improved Stack Implementation
class Stack {
  constructor(maxSize = 5) {
    this.data = [];
    this.top = 0; // points to the next free slot
    this.maxSize = maxSize;
  }

  // Push element onto stack
  push(element) {
    if (this.top >= this.maxSize) {
      console.log("Stack Overflow! Cannot push:", element);
      return;
    }
    this.data[this.top] = element;
    this.top += 1;
  }

  // Pop element from stack
  pop() {
    if (this.top === 0) {
      console.log("Stack Underflow! Stack is empty.");
      return null;
    }
    this.top -= 1;
    const popped = this.data[this.top];
    this.data.length = this.top; // optional, keeps array size consistent
    return popped;
  }

  // Peek top element
  peek() {
    if (this.top === 0) return null;
    return this.data[this.top - 1];
  }

  // Display stack
  display() {
    console.log("Stack:", this.data.join(" <- "));
  }
}

// Example usage
const stack = new Stack(5);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.push(70); // Overflow
stack.display();

stack.pop();
stack.pop();
stack.display();
console.log("Top element:", stack.peek());

✅ Key Points

Stack is LIFO: last pushed = first popped.

push() checks stack overflow (top >= maxSize).

pop() checks stack underflow (top === 0).

peek() is useful to view top without removing.

display() shows current stack visually.