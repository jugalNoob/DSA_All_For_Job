🥈 2. Find Middle of Linked List
Concept:

Use Fast & Slow Pointer

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}


⏱ O(n)
📦 O(1)