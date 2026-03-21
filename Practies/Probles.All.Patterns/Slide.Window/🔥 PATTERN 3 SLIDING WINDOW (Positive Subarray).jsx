🔥 PATTERN 3: SLIDING WINDOW (Positive Subarray)
🧠 Intuition:

“Grow until invalid, shrink to fix”

Example:
[1, 2, 3, 4], target = 6


Process:

[1] → 1
[1,2] → 3
[1,2,3] → 6 ✅

Add 4 → 10 ❌ too big
Remove 1 → 9
Remove 2 → 7
Remove 3 → 4

💡 Brain Rule:

Expand → r++

Too big → shrink l++

👉 Works because numbers are positive (sum only increases)


🔥 3. SLIDING WINDOW (Positive Only)

🔥 3. SLIDING WINDOW (Positive Only)
🟢 Easy

Maximum Sum Subarray of Size K

Best Time to Buy/Sell Stock

Longest Substring Without Repeating

👉 Focus:

Expand + shrink

Window control

🟡 Medium

Longest Repeating Character Replacement

Permutation in String

Find All Anagrams in String

👉 Focus:

Dynamic window

Frequency map inside window

🔴 FAANG Level

Minimum Window Substring

Sliding Window Maximum

Longest Substring with K Distinct

👉 Focus:

Complex window conditions

Combining patterns