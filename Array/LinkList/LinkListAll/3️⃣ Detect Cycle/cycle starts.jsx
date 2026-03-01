🏆 Interview Follow-Up 1
🔥 Find where cycle starts

After meeting:

Keep one pointer at meeting point

Move another pointer to head

Move both 1 step at a time

Where they meet → cycle start

function detectCycleStart(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;

      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow; // cycle start
    }
  }

  return null;
}
