Great question 👍
Let’s understand when to use subarray (contiguous part of array) in simple interview language.

✅ First: What is a Subarray?

A subarray is a continuous (contiguous) part of an array.

Example:

arr = [9, 2, 1, 5]


Valid subarrays:

[9]
[2]
[1]
[5]
[9,2]
[2,1]
[1,5]
[9,2,1]
[2,1,5]
[9,2,1,5]


❌ [9,1] is NOT a subarray (because 2 is skipped).

🔥 When Do We Use Subarray?

You use subarray when:

The problem clearly says or implies continuous elements.

🟢 1️⃣ When Problem Says “Contiguous”

If question says:

“Maximum contiguous sum”

“Longest continuous subarray”

“Subarray of size k”

“Window of size k”

👉 Immediately think Subarray

Example:

Maximum Subarray Sum

Input: [2, -1, 3, 4, -2]
Output: 8  // [3,4,1]


We use:

Kadane’s Algorithm

Time: O(n)

🟢 2️⃣ Sliding Window Problems

When question says:

Fixed window size

Longest substring

Smallest subarray

Max sum of size k

👉 Use Sliding Window (Two Pointer Subarray)

Example:

Find max sum subarray of size k


That means:
👉 You must use contiguous elements

🟢 3️⃣ Prefix Sum Problems

If question says:

“Find subarray with sum = target”

“Count subarrays with sum = k”

👉 Use Prefix Sum + HashMap

🟢 4️⃣ When Order Must Stay AND No Skipping Allowed

Subarray = no skipping
Subsequence = skipping allowed

If skipping is NOT allowed → subarray.

🟢 5️⃣ Real Interview Keywords

If question contains words like:

contiguous

continuous

window

segment

consecutive

slice

subarray sum

sliding window

👉 100% Subarray problem.

🔥 Difference in Thinking


| If Question Says                   | Use         |
| ---------------------------------- | ----------- |
| Continuous / contiguous            | Subarray    |
| Can skip elements                  | Subsequence |
| Window size k                      | Subarray    |
| Increasing sequence (can skip)     | Subsequence |
| Exact sum with continuous elements | Subarray    |
| Longest increasing (skip allowed)  | Subsequence |



🎯 Simple Trick To Decide

Ask yourself:

❓ Can I skip elements?

If YES → Subsequence
If NO → Subarray

💡 Example Comparison

Array:

[9, 2, 1]


Subarray example:

[2,1] ✅
[9,1] ❌


Subsequence example:

[9,1] ✅

🚀 In Interviews

Most common subarray problem types:

Maximum Subarray (Kadane)

Subarray with given sum

Longest substring without repeating characters

Sliding window max/min

Count subarrays with sum k

Fixed window problems