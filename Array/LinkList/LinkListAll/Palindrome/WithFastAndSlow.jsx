function isPalindrome(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = reverse(slow);
  let firstHalf = head;

  while (secondHalf) {
    if (firstHalf.value !== secondHalf.value) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
}
