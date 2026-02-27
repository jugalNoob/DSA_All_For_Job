Perfect 🔥 now let’s deeply understand:

🥉 3️⃣ Detect Cycle — Floyd’s Algorithm (Tortoise & Hare)
🎯 Problem

Detect if linked list contains a cycle.

Example with cycle:

1 → 2 → 3 → 4 → 5
          ↑     ↓
          ← ← ← ←

✅ Your Code
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

🧠 Why This Works

Slow moves 1 step

Fast moves 2 steps

If cycle exists → fast will eventually "lap" slow

They will meet inside the loop

Think like a circular running track 🏃‍♂️

If one runner runs faster, he eventually catches the slower runner.

🔥 Step-by-Step Example

List:

1 → 2 → 3 → 4 → 5
          ↑     ↓
          ← ← ← ←

Iteration 1
slow = 2
fast = 3

Iteration 2
slow = 3
fast = 5

Iteration 3
slow = 4
fast = 4  ✅


They meet → cycle exists.

⚡ Complexity
Type	Value
Time	O(n)
Space	O(1) ✅