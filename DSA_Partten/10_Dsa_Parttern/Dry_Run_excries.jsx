Perfect 🔥
Below are dry-run exercises where the ENTIRE question is about choosing the RIGHT pattern.
I’ll force you to pause, pick a pattern, then dry-run — exactly how interviews test you.

🧪 Dry-Run Exercises: Pattern Choice Matters (10)

For each:
1️⃣ Pause → choose pattern
2️⃣ Then see dry-run
3️⃣ Then see why other patterns FAIL

1️⃣ Longest Subarray with Sum = K (NEGATIVES)

Input

nums = [1, -1, 5, -2, 3], k = 3


🛑 Pause: Sliding Window or Prefix Sum?

❌ Wrong: Sliding Window

Window expands → sum increases ❌ (negatives break it)

✅ Correct: Prefix Sum + Map
Dry-run
prefixSum = 0
map = {0: -1}
maxLen = 0

i=0 → sum=1 → store
i=1 → sum=0 → seen before → len=2
i=2 → sum=5 → need 2 ❌
i=3 → sum=3 → need 0 ✅ → len=4


✔ Answer = 4

🧠 Rule

If negatives exist → sliding window is DEAD.

2️⃣ Find Duplicate Number (1…n)

Input

nums = [3,1,3,4,2]


🛑 Pause: HashSet or Fast–Slow?

❌ Wrong: HashSet

Uses extra space ❌

✅ Correct: Floyd Cycle Detection
Dry-run
slow = nums[0] = 3
fast = nums[nums[0]] = nums[3] = 4

slow → 4
fast → nums[nums[4]] = nums[2] = 3

slow → 2
fast → nums[nums[3]] = nums[4] = 2  ✅ meet


🧠 Rule

Index → value mapping = hidden linked list.

3️⃣ Longest Substring Without Repeating Characters

Input

s = "abba"


🛑 Pause: Fast–Slow or Sliding Window?

❌ Wrong: Fast–Slow

No shrinking logic ❌

✅ Correct: Sliding Window + Map
Dry-run
window = "ab" ✔
next = 'b' → duplicate → move left pointer
window = "b"


✔ Answer = 2

🧠 Rule

Constraint must stay VALID → sliding window.

4️⃣ Middle of Array

Input

arr = [10, 20, 30, 40, 50]


🛑 Pause: Count length or Fast–Slow?

✅ Correct: Fast–Slow
Dry-run
slow: 10 → 20 → 30
fast: 10 → 30 → end


✔ Middle = 30

🧠 Rule

One pointer moves twice → midpoint.

5️⃣ Max Consecutive Ones (NO flips)

Input

nums = [1,1,0,1,1,1]


🛑 Pause: Prefix Sum or Sliding Window?

❌ Wrong: Prefix Sum

Overkill ❌

✅ Correct: Simple scan / sliding window
Dry-run
count resets at 0
max = 3

6️⃣ Subarray Product Less Than K

Input

nums = [10,5,2,6], k = 100


🛑 Pause: Prefix Sum or Sliding Window?

❌ Wrong: Prefix Sum

Multiplication ≠ subtraction ❌

✅ Correct: Sliding Window
Dry-run
10 → 10
10×5 → 50
10×5×2 → 100 ❌ shrink
5×2×6 → 60 ✔


✔ Answer = 8

🧠 Rule

Product + positives → sliding window works.

7️⃣ Palindrome Linked List

🛑 Pause: Stack or Fast–Slow?

❌ Wrong: Stack

O(n) space ❌

✅ Correct: Fast–Slow + Reverse
Dry-run
slow reaches middle
reverse second half
compare both halves


🧠 Rule

Need midpoint + reverse → fast–slow.

8️⃣ Kth Largest Element

Input

nums = [3,2,1,5,6,4], k=2


🛑 Pause: Sort or Heap?

❌ Wrong: Sort

O(n log n) ❌

✅ Correct: Min Heap (size k)
Dry-run
Heap keeps [5,6]
Top = 5


✔ Answer = 5

9️⃣ Detect Cycle in Linked List

🛑 Pause: Visited Set or Fast–Slow?

❌ Wrong: Set

Extra memory ❌

✅ Correct: Fast–Slow

🧠 Rule

If fast meets slow → cycle exists.

🔟 Minimum Size Subarray Sum

Input

nums = [2,3,1,2,4,3], target = 7


🛑 Pause: Prefix sum or Sliding window?

❌ Wrong: Prefix Sum

Window is shrinkable ❌

✅ Correct: Sliding Window
Dry-run
[2,3,1,2] → sum=8 → shrink
[4,3] → sum=7 → min=2


✔ Answer = 2

🧠 MASTER DECISION RULE (MEMORIZE)
Negatives? → Prefix Sum
Need middle / cycle? → Fast–Slow
Window must stay valid? → Sliding Window
Order doesn’t matter? → DP / Greedy
