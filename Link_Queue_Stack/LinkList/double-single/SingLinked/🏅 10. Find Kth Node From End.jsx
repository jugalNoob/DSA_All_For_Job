function kthFromEnd(head, k) {
  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    if (!fast) return null;
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
