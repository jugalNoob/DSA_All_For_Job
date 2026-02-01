🚨 Fast–Slow Pointer Mistakes (Interview Traps)
❌ 1. Forgetting the SORTED requirement (Array trap)
❌ Wrong assumption
“I’ll remove duplicates using fast–slow”


But array is not sorted.

❌ Example
[2,1,2,3,1] ❌


Fast–slow WILL FAIL.

✅ Correct thinking

Fast–slow remove-duplicates ONLY works on sorted arrays.

🧠 Interviewer checks

Can you verify preconditions before using a pattern?

❌ 2. Wrong fast initialization (off-by-one)
❌ Bug
let slow = 0
for (let fast = 0; fast < nums.length; fast++) { ❌


You compare element with itself → useless comparison.

✅ Fix
let slow = 0
for (let fast = 1; fast < nums.length; fast++) { ✅


🧠 Interviewer checks

Index discipline & boundary control

❌ 3. Infinite loop in cycle detection
❌ Bug
while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
}


If no cycle → 💥 infinite loop.

✅ Fix

Use do...while or check bounds.

do {
    slow = nums[slow]
    fast = nums[nums[fast]]
} while (slow !== fast)


🧠 Interviewer checks

Can you reason about termination?

❌ 4. Forgetting bounds check for fast + 1
❌ Bug
while (fast < arr.length) {
    slow++
    fast += 2
}


💥 Out-of-bounds access.

✅ Fix
while (fast < arr.length && fast + 1 < arr.length)


🧠 Interviewer checks

Defensive programming

❌ 5. Confusing Fast–Slow with Two Pointers
❌ Wrong usage
Palindrome → Fast–Slow directly


Fast–slow only finds middle, not palindrome itself.

✅ Correct flow

1️⃣ Fast–slow → find middle
2️⃣ Reverse second half
3️⃣ Compare

🧠 Interviewer checks

Do you know pattern LIMITS?

❌ 6. Overwriting values too early (data corruption)
❌ Bug
nums[slow] = nums[fast]
slow++


If slow === fast, unnecessary write.

✅ Fix

Only write after increment OR when different.

if (nums[fast] !== nums[slow]) {
    slow++
    nums[slow] = nums[fast]
}


🧠 Interviewer checks

In-place mutation awareness

❌ 7. Thinking Fast–Slow works for ALL duplicates
❌ Wrong belief
Fast–slow can find duplicates in any array


❌ False.

✅ Truth

Fast–slow duplicate detection works only when:

Numbers range 1…n

Exactly one duplicate

Acts like linked list

🧠 Interviewer checks

Can you explain WHY it works?

❌ 8. Missing cycle-entry logic (big trap)
❌ Candidate stops here
console.log("cycle detected")

✅ Interviewer follow-up:

“Where does the cycle start?”

Correct logic:

slow = 0
while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
}


🧠 Interviewer checks

Depth of Floyd’s algorithm knowledge

❌ 9. Wrong middle for even-length array
❌ Bug
Which middle do you want?


Array: [10,20,30,40]

Left middle → 20

Right middle → 30

✅ You must clarify
“I’ll return the right-middle”


🧠 Interviewer checks

Communication + clarity

❌ 10. Forgetting to reset slow pointer

Classic Floyd trap.

❌ Bug
// directly continue from detection

✅ Fix
slow = 0


Then move both one step.

🧠 Interviewer checks

Mathematical understanding

❌ 11. Using extra space accidentally
❌ Mistake
let seen = new Set()


After saying:

“I’ll do it in O(1) space”

🚩 Red flag.

🧠 Interviewer checks

Constraint discipline

❌ 12. Fast pointer jumping incorrectly
❌ Bug
fast = nums[fast + 2] ❌

✅ Correct
fast = nums[nums[fast]] ✅


🧠 Interviewer checks

Pointer semantics vs index arithmetic

❌ 13. Not explaining pointer roles
❌ Weak answer
“I used slow and fast pointers”

✅ Strong answer
“Fast scans the structure while slow tracks the valid position or meeting point.”


🧠 Interviewer checks

Can you teach the idea?

❌ 14. Choosing Fast–Slow when Sliding Window fits better
❌ Example
Maximum subarray sum


Fast–slow ❌
Sliding window ✅

🧠 Interviewer checks

Pattern selection maturity

❌ 15. Not dry-running with small input

Interviewer gives:

[1]
[1,1]
[1,2]


Candidate freezes 😬

🧠 Interviewer checks

Edge-case confidence

🧠 Master Rule (Remember This)

Fast–Slow is about structure, not just speed.

If problem talks about:

structure repeating

relative position

meeting point

👉 Fast–Slow is your weapon.

🏆 One Killer Line to Say in Interview

“Before using fast–slow, I’ll confirm the array’s structure supports it — like sorted order or index-based traversal — to avoid invalid assumptions.”