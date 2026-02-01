Love this move 🔥
Here are 15 mock interview questions built exactly to test pattern selection — not just coding.
These are spoken-interview style, with follow-ups interviewers actually ask.

🎤 Mock Interview: Pattern-Trap DSA Questions (15)

Each question includes:

🎯 What interviewer is testing

❌ Common wrong instinct

✅ Expected pattern

💬 Perfect candidate explanation

1️⃣ Maximum Subarray Sum

Interviewer

Find the maximum sum of a contiguous subarray.

🎯 Testing: Pattern recognition

❌ Wrong instinct
“Let’s use sliding window.”

✅ Expected
Kadane’s Algorithm

💬 Perfect answer

“Sliding window fails because the window size isn’t fixed or shrinkable by a condition. We must discard negative prefixes, which Kadane handles in O(n).”

2️⃣ Longest Increasing Subsequence

Interviewer

Return the length of the longest increasing subsequence.

❌ Wrong instinct
Sliding window

✅ Expected
DP + Binary Search

💬

“The subsequence isn’t contiguous, so window logic doesn’t apply. This is a DP optimization problem.”

3️⃣ Find Duplicate Number (1…n)

Interviewer

There’s exactly one duplicate. You can’t modify the array and must use O(1) space.

❌ Wrong instinct
HashSet

✅ Expected
Fast–Slow (Floyd Cycle)

💬

“This maps to cycle detection because each index points to another index.”

4️⃣ Subarray Sum Equals K (with negatives)

Interviewer

Count subarrays whose sum equals K.

❌ Wrong instinct
Sliding window

✅ Expected
Prefix Sum + HashMap

💬

“Negative numbers break window monotonicity, so prefix sums are required.”

5️⃣ Longest Substring Without Repeating Characters

Interviewer

Find the longest substring with all unique characters.

❌ Wrong instinct
Fast–Slow pointers

✅ Expected
Sliding Window + HashMap

💬

“The window must always satisfy uniqueness, so we shrink on conflict.”

6️⃣ Middle of Linked List

Interviewer

Return the middle node in one pass.

❌ Wrong instinct
Length counting

✅ Expected
Fast–Slow

💬

“Fast moves twice as fast, so when it finishes, slow is at the middle.”

7️⃣ Palindrome Linked List

Interviewer

Check if a linked list is a palindrome.

❌ Wrong instinct
Array conversion

✅ Expected
Fast–Slow + Reverse

💬

“We reverse the second half in place to compare efficiently.”

8️⃣ Kth Largest Element

Interviewer

Find the Kth largest element.

❌ Wrong instinct
Sorting

✅ Expected
Heap / Quickselect

💬

“Sorting is O(n log n); a heap reduces this to O(n log k).”

9️⃣ Count Distinct Elements in Every Window of Size K

Interviewer

Return distinct count for every window.

❌ Wrong instinct
Recount every window

✅ Expected
Sliding Window + Frequency Map

💬

“We maintain counts as elements enter and leave the window.”

🔟 Word Break

Interviewer

Can the string be segmented using the dictionary?

❌ Wrong instinct
Sliding window

✅ Expected
DP

💬

“This is overlapping subproblems, not a window problem.”

1️⃣1️⃣ Merge Intervals

Interviewer

Merge overlapping intervals.

❌ Wrong instinct
Sliding window

✅ Expected
Sort + Greedy merge

💬

“Intervals must be sorted before merging.”

1️⃣2️⃣ Valid Parentheses

Interviewer

Check if parentheses are valid.

❌ Wrong instinct
Two pointers

✅ Expected
Stack

💬

“Nested structure requires LIFO behavior.”

1️⃣3️⃣ Meeting Rooms II

Interviewer

Minimum number of meeting rooms.

❌ Wrong instinct
Sorting only

✅ Expected
Min Heap

💬

“We track ongoing meetings using a heap.”

1️⃣4️⃣ Rotate Array

Interviewer

Rotate array by k steps in place.

❌ Wrong instinct
Extra array

✅ Expected
Reverse method

💬

“Three reversals achieve rotation in O(1) space.”

1️⃣5️⃣ Detect Cycle in Linked List

Interviewer

Detect if a cycle exists.

❌ Wrong instinct
Visited set

✅ Expected
Fast–Slow

💬

“Two pointers will eventually meet inside the cycle.”

🧠 FINAL INTERVIEW CHEAT LINE

Use this sentence when stuck:

“At first glance this looks like a sliding window problem, but the condition doesn’t stay monotonic, so sliding window won’t work.”

🔥 Interviewers LOVE this.