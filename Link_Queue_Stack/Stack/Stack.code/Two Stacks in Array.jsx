1️⃣ Concept

We have a single array of size n and want to maintain two stacks (Stack1 and Stack2) inside it:

Stack1 grows from the start of the array (index 0 → n-1).

Stack2 grows from the end of the array (index n-1 → 0).

The stacks should not overlap.

Benefits:

Efficient use of space.

Both stacks can grow dynamically until they meet.

2️⃣ Implementation in JavaScript
class TwoStacks {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.top1 = -1;        // Stack1 starts from beginning
    this.top2 = size;       // Stack2 starts from end
  }

  // Push element into Stack1
  push1(value) {
    if (this.top1 + 1 === this.top2) {
      console.log("Stack Overflow in Stack1!");
      return;
    }
    this.top1 += 1;
    this.arr[this.top1] = value;
  }

  // Push element into Stack2
  push2(value) {
    if (this.top2 - 1 === this.top1) {
      console.log("Stack Overflow in Stack2!");
      return;
    }
    this.top2 -= 1;
    this.arr[this.top2] = value;
  }

  // Pop element from Stack1
  pop1() {
    if (this.top1 === -1) {
      console.log("Stack Underflow in Stack1!");
      return null;
    }
    const popped = this.arr[this.top1];
    this.top1 -= 1;
    return popped;
  }

  // Pop element from Stack2
  pop2() {
    if (this.top2 === this.size) {
      console.log("Stack Underflow in Stack2!");
      return null;
    }
    const popped = this.arr[this.top2];
    this.top2 += 1;
    return popped;
  }

  // Display both stacks
  display() {
    console.log("Stack1 (bottom -> top):", this.arr.slice(0, this.top1 + 1).join(" <- "));
    console.log("Stack2 (bottom -> top):", this.arr.slice(this.top2).join(" <- "));
  }
}

// Example usage
const ts = new TwoStacks(10);

// Push elements in Stack1
ts.push1(10);
ts.push1(20);
ts.push1(30);

// Push elements in Stack2
ts.push2(100);
ts.push2(90);
ts.push2(80);

ts.display();
/* Output:
Stack1 (bottom -> top): 10 <- 20 <- 30
Stack2 (bottom -> top): 80 <- 90 <- 100
*/

console.log("Popped from Stack1:", ts.pop1()); // 30
console.log("Popped from Stack2:", ts.pop2()); // 80
ts.display();

✅ Key Points

Single array for two stacks → space-efficient.

Stack1 grows forward, Stack2 grows backward.

Overflow occurs when top1 + 1 == top2.

Push/Pop operations are O(1).

Widely used in memory-constrained systems or embedded devices.