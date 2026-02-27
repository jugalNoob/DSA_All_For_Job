1️⃣ Definition of Subsequence

A subsequence of an array (or string) is a sequence that can be 
derived by deleting zero or more elements without changing the order
of the remaining elements.



.. Order matters

.. Contiguity is NOT required (unlike subarrays)


2️⃣ Example

Take the array:

const data = [9, 2, 1];


All possible subsequences:

Subsequence

| Subsequence |                                         |
| ----------- | --------------------------------------- |
| []          | (empty subsequence)                     |
| [9]         |                                         |
| [2]         |                                         |
| [1]         |                                         |
| [9,2]       |                                         |
| [9,1]       | ✅ non-contiguous but order is preserved |
| [2,1]       |                                         |
| [9,2,1]     |                                         |



Notice:

[9,1] is valid as a subsequence (skip 2)

[2,9] is NOT valid because order is violated



| Feature          | Subarray | Subsequence |
| ---------------- | -------- | ----------- |
| Contiguous?      | Yes      | No          |
| Order preserved? | Yes      | Yes         |
| Example          | `[9,2]`  | `[9,1]`     |




4️⃣ Number of Subsequences

If array length = n, total subsequences = 
2
𝑛
2
n

Why? For each element, you can include it or exclude it → 2 choices

For [9,2,1] → 
2
3
=
8
2
3
=8 subsequences

[], [9], [2], [1], [9,2], [9,1], [2,1], [9,2,1]

5️⃣ Use in DSA

Subsequences are common in problems like:

Longest Increasing Subsequence (LIS)

Find the subsequence with increasing numbers

Example: [3,10,2,1,20] → LIS = [3,10,20]

Maximum sum subsequence (non-contiguous elements)

String problems (like checking if one string is a subsequence of another)

✅ In short:

A subsequence keeps the original order but can skip elements, while a subarray is always contiguous.