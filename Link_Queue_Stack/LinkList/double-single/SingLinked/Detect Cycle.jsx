🥉 3. Detect Cycle (Floyd’s Algorithm)
Concept:

Fast moves 2 steps, slow moves 1 step

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}


⏱ O(n)
📦 O(1)

🏅 4. Remove Nt