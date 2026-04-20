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



🔍 What this function does

👉 It checks:

Is there a cycle?
If yes → where does the cycle start?
🧠 Step-by-step explanation
1. Two pointers (slow & fast)
let slow = head;
let fast = head;

slow → moves 1 step
fast → moves 2 steps
2. Detect cycle
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;

If there is no cycle → fast becomes null
If there is a cycle → slow and fast will meet
if (slow === fast)


👉 This means: cycle exists

3. Find cycle starting point
slow = head;


Now:

slow → starts from beginning
fast → stays at meeting point
4. Move both at same speed
while (slow !== fast) {
  slow = slow.next;
  fast = fast.next;
}


👉 When they meet again → that node is cycle start

5. Return result
return slow;


👉 This is the starting node of the loop

🎯 Why this works (important for interview)

Key idea:

Distance from head → cycle start
Distance from meeting point → cycle start

👉 These distances become equal when you reset slow

So both pointers meet at the cycle start