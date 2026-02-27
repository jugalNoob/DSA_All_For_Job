1️⃣ Counting Subsequences

Problem type: “Count the number of subsequences satisfying some condition”

Formula / Pattern:

Total subsequences of array of length n = 
2
𝑛
2
n

If a condition exists, use DP / recursion to count valid ones.

Example:

Array = [1, 2, 3]

Count all subsequences with sum = 3

Use recursion:

count(i, sum) = count(i+1, sum) + count(i+1, sum - arr[i])


Choice at each index: include or exclude the element.

2️⃣ Longest Increasing Subsequence (LIS)

Problem type: “Find the longest subsequence where elements are increasing”

Formula / DP approach:

LIS[i] = max(LIS[j] + 1) for all j < i and arr[j] < arr[i]


Build LIS[i] from previous elements

Result = max(LIS[0..n-1])

Time Complexity: O(n²)
Optimized: O(n log n) using binary search

3️⃣ Maximum Sum Increasing Subsequence (MSIS)

Problem type: “Find subsequence with maximum sum where elements increase”

DP Formula:

MSIS[i] = arr[i] + max(MSIS[j]) for all j < i and arr[j] < arr[i]


Each element can contribute to sum if it forms an increasing subsequence

4️⃣ Subsequence Matching / String Problems

Problem type: “Check if sequence X is a subsequence of sequence Y”

Formula / Approach:

i = 0, j = 0
while i < X.length and j < Y.length:
    if X[i] == Y[j]:
        i += 1
    j += 1
if i == X.length → X is subsequence


Two-pointer approach

Linear time O(n + m)

5️⃣ Subsequence with Exact Sum / Target

Problem type: “Find number of subsequences whose sum = target”

Recursion / DP Formula:

count(i, sum) = count(i+1, sum) + count(i+1, sum - arr[i])


count(i+1, sum) → exclude current element

count(i+1, sum - arr[i]) → include current element

Often optimized with memoization

6️⃣ Bitmask / Generate All Subsequences

Problem type: “Generate all possible subsequences”

Formula / Pattern:

For array length n, total subsequences = 
2
𝑛
2
n

Use bitmasking to represent inclusion/exclusion:

for(let mask = 0; mask < (1 << n); mask++) {
    let subseq = [];
    for(let i = 0; i < n; i++){
        if(mask & (1 << i)) subseq.push(arr[i]);
    }
    console.log(subseq);
}

7️⃣ Key Tips / Patterns for Interviews

Choice at each element → include or exclude → classic recursion/backtracking

Order matters → subsequence must preserve order

Contiguous? → if yes → it’s a subarray, if not → it’s subsequence

DP states → often index + constraint (sum, last number, length)

Bitmask → small n (≤20) → generate all subsequences



| Problem Type                       | Formula / Approach                       | Notes                           |
| ---------------------------------- | ---------------------------------------- | ------------------------------- |
| Count all subsequences             | (2^n)                                    | Simple combinatorial            |
| Subsequence sum = target           | `count(i+1,sum) + count(i+1,sum-arr[i])` | Recursive / DP                  |
| Longest Increasing Subsequence     | `LIS[i] = max(LIS[j]+1)`                 | DP O(n²) / O(n log n) optimized |
| Maximum Sum Increasing Subsequence | `MSIS[i] = arr[i] + max(MSIS[j])`        | DP O(n²)                        |
| Check if X is subsequence of Y     | Two pointers i,j                         | O(n+m)                          |
| Generate all subsequences          | Bitmask 0..2^n-1                         | For small arrays                |



