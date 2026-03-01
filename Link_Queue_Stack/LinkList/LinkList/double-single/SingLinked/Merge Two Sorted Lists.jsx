🏅 5. Merge Two Sorted Lists
function merge(l1, l2) {
  let dummy = { next: null };
  let current = dummy;

  while (l1 && l2) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;

  return dummy.next;
}


⏱ O(n + m)