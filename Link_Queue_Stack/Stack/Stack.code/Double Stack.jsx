Ah! You’re asking about a Double Stack — this is slightly different from “Two Stacks in One Array.” A Double Stack usually refers to:

A stack that supports two separate stacks in one structure (space-optimized) or

A stack that tracks two kinds of data simultaneously, e.g., one for values and one for min/max (used in Min/Max Stack).

Let’s cover both common interpretations.

1️⃣ Double Stack (Two Stacks in One Array)

This is space-efficient, storing two stacks in a single array:

Stack1 grows from start → end

Stack2 grows from end → start

Overflow occurs only when the stacks meet

Example Implementation:

class DoubleStack {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.top1 = -1;
    this.top2 = size;
  }

  push1(value) {
    if (this.top1 + 1 === this.top2) {
      console.log("Stack1 Overflow!");
      return;
    }
    this.top1 += 1;
    this.arr[this.top1] = value;
  }

  push2(value) {
    if (this.top2 - 1 === this.top1) {
      console.log("Stack2 Overflow!");
      return;
    }
    this.top2 -= 1;
    this.arr[this.top2] = value;
  }

  pop1() {
    if (this.top1 === -1) return null;
    return this.arr[this.top1--];
  }

  pop2() {
    if (this.top2 === this.size) return null;
    return this.arr[this.top2++];
  }

  display() {
    console.log("Stack1:", this.arr.slice(0, this.top1 + 1).join(" <- "));
    console.log("Stack2:", this.arr.slice(this.top2).join(" <- "));
  }
}

// Usage
const ds = new DoubleStack(10);
ds.push1(1);
ds.push1(2);
ds.push2(100);
ds.push2(200);
ds.display();

2️⃣ Double Stack (Value + Min/Max Tracking)

Another common pattern is a Double Stack for tracking two things:

Main stack → stores values

Auxiliary stack → stores min or max for O(1) retrieval

Example (Min Stack):

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (!this.minStack.length || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
  }

  pop() {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return val;
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

✅ Key Points
Type	Use Case	Notes
Two stacks in one array	Space-efficient storage of two stacks	Good for memory-constrained systems
Double Stack (Value + Min/Max)	Retrieve min/max in O(1) while maintaining stack	Used in algorithms, real-time analytics