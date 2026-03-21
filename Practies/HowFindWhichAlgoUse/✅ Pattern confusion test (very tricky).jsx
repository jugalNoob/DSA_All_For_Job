✅ Pattern confusion test (very tricky)


Perfect 😎 — now let’s do a REAL Pattern Confusion Test (interview-level tricky) 🔥
Don’t rush — try to guess first, then check answer.

🧠 RULE (remember while solving)

👉 SUM = K → Prefix Sum wins
👉 Otherwise → Sliding Window (if window-type)

🧪 CONFUSION TEST
❓ 1

👉 “Longest subarray with sum = K”

⏳ Think...

✅ Answer: Prefix Sum

👉 Even though “longest” is there
✔ sum = K dominates

❓ 2

👉 “Longest substring without repeating characters”

⏳ Think...

✅ Answer: Sliding Window

✔ substring + no repeat
❌ no sum

❓ 3

👉 “Maximum sum subarray of size K”

⏳ Think...

✅ Answer: Sliding Window

✔ fixed window size
✔ no sum = K condition

❓ 4 (TRICKY 🔥)

👉 “Count subarrays with sum ≤ K”

⏳ Think...

✅ Answer: Sliding Window (if all positive)
OR Prefix Sum (if negatives exist)

👉 This is hybrid thinking

❓ 5 (VERY TRICKY 😈)

👉 “Shortest subarray with sum ≥ K”

⏳ Think...

✅ Answer:

Sliding Window (if all positive)

Advanced (Deque + Prefix Sum) if negatives

❓ 6

👉 “Number of subarrays divisible by K”

⏳ Think...

✅ Answer: Prefix Sum

✔ count + math condition

❓ 7

👉 “Longest substring with at most K distinct characters”

⏳ Think...

✅ Answer: Sliding Window

✔ window + constraint

❓ 8 (TRAP 🔥)

👉 “Find if subarray with sum = K exists”

⏳ Think...

✅ Answer: Prefix Sum

✔ existence also uses prefix sum

❓ 9

👉 “Minimum window substring”

⏳ Think...

✅ Answer: Sliding Window

✔ classic window shrink problem

❓ 10 (HARD 🔥)

👉 “Count subarrays with equal number of 0s and 1s”

⏳ Think...

✅ Answer: Prefix Sum

👉 Trick:

0 → -1

🧠 FINAL LEARNING (VERY IMPORTANT)
🥇 Priority Rule
SUM / COUNT → Prefix Sum
WINDOW / LONGEST → Sliding Window

🥈 Override Rule
If BOTH present:
👉 SUM wins → Prefix Sum

🥉 Edge Rule
If negative numbers:
👉 Sliding Window fails
👉 Use Prefix Sum

🔥 MEMORY HACK
Sliding Window → 🪟 Move range
Prefix Sum → 📊 Compare history

🏆 INTERVIEW LEVEL ANSWER

I first check if the problem involves sum or counting subarrays, which suggests prefix sum. If not, and the problem involves optimizing a window like longest or shortest substring, I use sliding window. If both appear, sum conditions take priority.