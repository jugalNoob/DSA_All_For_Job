// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack class
class Stack {
  constructor() {
    this.top = null; // points to the top node
    this.size = 0;
  }

  // Push element onto stack
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top; // link new node to current top
    this.top = newNode;      // update top
    this.size += 1;
  }

  // Pop element from stack
  pop() {
    if (!this.top) {
      console.log("Stack Underflow! Stack is empty.");
      return null;
    }
    const popped = this.top.value;
    this.top = this.top.next; // move top pointer
    this.size -= 1;
    return popped;
  }

  // Peek top element
  peek() {
    return this.top ? this.top.value : null;
  }

  // Check if stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Display stack
  display() {
    let current = this.top;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log("Stack (top -> bottom):", result.join(" <- "));
  }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Stack (top -> bottom): 30 <- 20 <- 10

console.log("Popped:", stack.pop()); // 30
stack.display();                     // Stack (top -> bottom): 20 <- 10
console.log("Top element:", stack.peek()); // 20
console.log("Is stack empty?", stack.isEmpty()); // false
