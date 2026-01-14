Below is a complete Fast & Slow Pointer (Tortoise–Hare) guide
from basic → advanced, exactly how interviewers expect it.

🐢🐇 Fast & Slow Pointer Pattern (Base → Advanced)
✅ When to use this pattern?

Use Fast & Slow pointers when:

You traverse a linked list

You need to detect:

Cycle

Middle element

Palindrome

Loop start

Happy number

📌 Mostly used in Linked List + Math problems

🧠 Core Idea (VERY IMPORTANT)

Two pointers move at different speeds

slow → moves 1 step

fast → moves 2 steps

If there is a cycle, fast will eventually meet slow.

🔹 BASIC PATTERN TEMPLATE
let slow = head;
let fast = head;

while (fast !== null && fast.next !== null) {
  slow = slow.next;
  fast = fast.next.next;

  if (slow === fast) {
    // cycle detected
    break;
  }
}

📌 PROBLEM 1: DETECT CYCLE IN LINKED LIST (BASE)
Problem
Input: 1 → 2 → 3 → 4 → 2 (cycle)
Output: true

Logic

If fast meets slow → cycle exists

Code
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


⏱ O(n) | 📦 O(1)

📌 PROBLEM 2: FIND MIDDLE OF LINKED LIST
Logic

When fast reaches end

Slow is at the middle

Code
function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

📌 PROBLEM 3: FIND START OF CYCLE (ADVANCED)
Logic

Detect cycle

Reset slow to head

Move both one step

Meeting point = cycle start

Code
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
      return slow;
    }
  }
  return null;
}

📌 PROBLEM 4: LINKED LIST PALINDROME
Logic

Find middle

Reverse second half

Compare both halves

Code
function isPalindrome(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  let left = head;
  let right = prev;

  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true;
}

📌 PROBLEM 5: HAPPY NUMBER (MATH + FAST/SLOW)
Problem
Input: 19
Output: true

Logic

Apply sum of squares

Use cycle detection

Code
function isHappy(n) {
  let slow = n;
  let fast = n;

  function getNext(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  do {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  } while (slow !== fast);

  return slow === 1;
}

📌 PROBLEM 6: FIND LENGTH OF CYCLE (ADVANCED)
Logic

After meeting point

Count nodes until it loops back

function cycleLength(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let current = slow;
      let length = 0;
      do {
        current = current.next;
        length++;
      } while (current !== slow);
      return length;
    }
  }
  return 0;
}

🧠 COMMON INTERVIEW QUESTIONS



| Question        | Pattern     |
| --------------- | ----------- |
| Cycle detection | Fast & Slow |
| Middle node     | Fast & Slow |
| Palindrome list | Fast & Slow |
| Happy number    | Fast & Slow |
| Cycle start     | Fast & Slow |



🧠 INTERVIEW SIGNAL 🚨

If interviewer says:

“Detect loop / cycle / middle”

Immediately think:

FAST & SLOW POINTER

🎯 FINAL SUMMARY

Two pointers → different speed

Detect cycles efficiently

No extra space

Time: O(n)

Space: O(1)

If you want next:
➡ Fast & Slow dry-run diagrams
➡ Linked List + Two Pointer combined
➡ Top 10 interview problems
➡ Pattern comparison cheat sheet