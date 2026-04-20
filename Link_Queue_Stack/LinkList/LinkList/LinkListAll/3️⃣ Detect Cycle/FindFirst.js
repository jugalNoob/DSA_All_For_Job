🧠 Problem

You have a linked list like this:

10 → 20 → 30 → 40 → 50
          ↑         ↓
          └─────────┘


👉 There is a loop
👉 You need to find the start node of the loop (30)

🚀 Idea (2 steps)
Step 1: Detect loop (slow + fast)
Step 2: Find loop start
🧠 Step 1: Detect loop
slow = head
fast = head

while (fast && fast.next) {
  slow = slow.next
  fast = fast.next.next

  if (slow === fast) {
    // loop detected
    break
  }
}


👉 When slow == fast → loop exists

🧠 Why they meet?

Because:

fast moves 2 steps
slow moves 1 step
👉 fast eventually catches slow inside the loop
🧠 Step 2: Find start of loop (IMPORTANT)

After meeting point:

slow = head


Now:

👉 move both 1 step at a time

while (slow !== fast) {
  slow = slow.next
  fast = fast.next
}


👉 where they meet again = START of loop

🔥 FULL CODE
findLoopStart(head) {
  let slow = head
  let fast = head

  // Step 1: detect loop
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      break
    }
  }

  // no loop
  if (!fast || !fast.next) {
    return null
  }

  // Step 2: find start
  slow = head

  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}

🧠 Step-by-step example
10 → 20 → 30 → 40 → 50
          ↑         ↓
          └─────────┘

🔁 Phase 1 (meeting inside loop)
slow → 30
fast → 30   ✔ meet

🔁 Phase 2 (reset slow)
slow = 10
fast = 30

🔁 Move both 1 step:
slow → 20
fast → 40

slow → 30
fast → 50

slow → 40
fast → 30

slow → 50
fast → 40

slow → 30
fast → 30  ✔

🏁 Answer
30 = start of loop

🧠 Why this works (simple logic)

Inside loop:

distance from head → start of loop = same for both pointers after reset

So they naturally meet at loop start.

💡 One-line memory trick

“Meet inside loop → reset one pointer → move together → meet at start”