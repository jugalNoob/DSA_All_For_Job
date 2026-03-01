function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let length = 1;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  k = k % length;
  if (k === 0) return head;

  tail.next = head; // make circular

  let steps = length - k;
  let newTail = head;

  for (let i = 1; i < steps; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
}
