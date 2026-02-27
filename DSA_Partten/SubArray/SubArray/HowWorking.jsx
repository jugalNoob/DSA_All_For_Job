Ah! you’re asking about subarrays in DSA (Data Structures & Algorithms)
 and how they relate to your array:

const data = [9, 2, 1];


Let’s explain clearly.

1️⃣ What is a Subarray?

A subarray is a contiguous portion of an array.

Contiguous means the elements are next 
to each other in the original array.

Order matters: [2, 1] is a valid subarray of [9, 2, 1],
 but [9, 1] is not, because 2 is skipped.

 2️⃣ Examples from data = [9, 2, 1]

All possible subarrays:

Subarray

| Subarray  |
| --------- |
| [9]       |
| [2]       |
| [1]       |
| [9, 2]    |
| [2, 1]    |
| [9, 2, 1] |


✅ Note: Every single element is considered a subarray.

3️⃣ How many subarrays are there?

If array length = n, the number of subarrays = n * (n + 1) / 2

For data = [9, 2, 1] → n = 3

3∗(3+1)/2=6

Matches our list above.



4️⃣ Difference Between Subarray and Subsequence

Subarray: Must be contiguous

Example: [2,1] ✅, [9,1] ❌

Subsequence: Can skip elements, just keep order

Example: [9,1] ✅ as a subsequence, [2,9] ❌ (wrong order)

5️⃣ Use in DSA

Subarrays are used in problems like:

Maximum sum subarray → Kadane’s algorithm

const arr = [9, -2, 3, 4];
// Find the contiguous subarray with max sum


Sliding window problems

Example: max/min in a window of size k

Prefix sums → Efficient sum of subarrays