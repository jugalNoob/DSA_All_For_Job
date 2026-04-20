🧠 What type of problems does Backtracking solve?

👉 Backtracking is used when:

🔥 You need to TRY ALL POSSIBILITIES

and find:

all solutions ✅
valid combinations ✅
best/valid arrangement ✅
🎯 Core Idea

“Generate → Check → Undo → Try next”

🧩 Types of Problems Backtracking Solves
1. ✅ All Combinations

👉 “Give me all possible subsets”

Example:

[1,2,3] → [[], [1], [2], [1,2]...]

✔️ Use: Subsets

2. 🔄 All Arrangements (Order matters)

👉 “Arrange elements in all ways”

Example:

[1,2,3] → [1,2,3], [1,3,2], ...

✔️ Use: Permutations

3. 🎯 Target-Based Problems

👉 “Find combinations that sum to target”

Example:

[2,3,6,7], target = 7

✔️ Use: Combination Sum

4. ✂️ String Partitioning

👉 “Split string into valid parts”

Example:

"aab" → ["a","a","b"], ["aa","b"]

✔️ Use: Palindrome Partition / Restore IP

5. ♟️ Constraint Problems

👉 “Place things without conflict”

Examples:

N-Queens 👑
Sudoku solver
6. 🔍 Decision + All Paths

👉 “Can we form?” OR “List all ways”

Example:

Word Break I → true/false
Word Break II → all sentences
🔥 Pattern Recognition (MOST IMPORTANT)

If question says:

Keyword in Question	Use Backtracking?
“All possible”	✅ YES
“Return all combinations”	✅ YES
“Generate all”	✅ YES
“Find all ways”	✅ YES
“Try every possibility”	✅ YES
❌ When NOT to use Backtracking
Only need one answer fast → use Greedy/DP
Large input + repetition → use DP (memoization)
🧠 Real Examples
Easy
Subsets
Permutations
Medium
Combination Sum
Restore IP
Hard
N-Queens
Word Break II
💡 Real-world analogy

Imagine:
👉 Trying all passwords 🔐

Try one → fail ❌ → backtrack
Try next → fail ❌ → backtrack
Until success ✅
🎯 One-line Interview Answer

“Backtracking is used to explore all possible combinations or configurations when constraints are involved, especially when we need to generate all valid solutions.”