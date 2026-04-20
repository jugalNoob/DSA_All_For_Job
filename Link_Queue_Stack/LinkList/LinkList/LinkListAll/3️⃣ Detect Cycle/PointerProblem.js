🔥 1. Find Nth node from END (no deletion)
🎯 Problem

Return the value of the Nth node from the end.

Example
10 → 20 → 30 → 40
n = 2


👉 Output: 30

✅ Code
findNthFromEnd(n) {
  let fast = this.head;
  let slow = this.head;

  // move fast n steps
  for (let i = 0; i < n; i++) {
    if (!fast) return null;
    fast = fast.next;
  }

  // move both
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow.data;
}

🧠 Key idea

Same pattern:

“Create gap of n → move both”

🔥 2. Find Middle Node
🎯 Problem

Return the middle node of the linked list.

Example
10 → 20 → 30 → 40 → 50


👉 Output: 30

✅ Code
findMiddle() {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}

🧠 Key idea

Fast moves 2 steps, slow moves 1 → slow reaches middle

🔥 3. Detect Cycle (Floyd’s Algorithm)
🎯 Problem

Check if linked list has a loop.

✅ Code
hasCycle() {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; // cycle found
    }
  }

  return false;
}

🧠 Key idea

If fast catches slow → loop exists

🚀 Why these 3 are important