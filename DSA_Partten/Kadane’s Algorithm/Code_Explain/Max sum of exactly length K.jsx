1️⃣ **Max sum of exactly length K

Meaning: The subarray must have exactly K elements. No more, no less.

Example:

arr = [1, 2, 3, 4, 5], K = 3
// Possible subarrays of length 3: [1,2,3], [2,3,4], [3,4,5]
// Sums: 6, 9, 12 → Max sum = 12


✅ Key: You only look at subarrays with size exactly K.

2️⃣ **Max sum of at least length K

Meaning: The subarray can be K or more elements (K, K+1, … up to full array).

Example:

arr = [1, 2, 3, -2, 5], K = 2
// Subarrays length ≥ 2:
// [1,2] → 3
// [1,2,3] → 6
// [1,2,3,-2] → 4
// [1,2,3,-2,5] → 9  ✅ Max sum
// [2,3] → 5
// [2,3,-2] → 3
// [2,3,-2,5] → 8


✅ Key: You start from K, but can extend the subarray beyond K elements.

💡 Summary of Difference

| Type       | Length of Subarray | Notes                               |
| ---------- | ------------------ | ----------------------------------- |
| Exactly K  | K                  | Only subarrays with size = K        |
| At least K | ≥ K                | Subarrays can be K, K+1, …, up to n |


Exactly K → simple sliding window sum of size K → O(n)

At least K → more tricky → combine sliding window + Kadane or prefix sums → O(n)