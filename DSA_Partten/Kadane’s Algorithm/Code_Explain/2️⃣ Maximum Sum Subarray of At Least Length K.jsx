2️⃣ Maximum Sum Subarray of At Least Length K

Idea: Combine sliding window of size K with Kadane-style extension.

Time Complexity: O(n)

Space Complexity: O(n) (prefix sum optional)

function maxSumAtLeastK(arr, K) {
    let n = arr.length;
    if (n < K) return null;

    // Step 1: Compute max sum ending at each index (Kadane)
    let maxEndingHere = [...arr]; // copy array
    for (let i = 1; i < n; i++) {
        maxEndingHere[i] = Math.max(arr[i], maxEndingHere[i - 1] + arr[i]);
    }

    // Step 2: Compute sum of first K elements
    let windowSum = 0;
    for (let i = 0; i < K; i++) {
        windowSum += arr[i];
    }

    let maxSum = windowSum;

    // Step 3: Slide window and extend beyond K using Kadane
    for (let i = K; i < n; i++) {
        windowSum += arr[i]; // add new element
        // Extend window sum if it can include previous maxEndingHere
        windowSum = Math.max(windowSum, windowSum + maxEndingHere[i - K]);
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example
let arr2 = [1, 2, 3, -2, 5];
console.log(maxSumAtLeastK(arr2, 2)); // Output: 9 ([1,2,3,-2,5])


✅ Explanation:

Step 1: Kadane tracks max sum ending at each index.

Step 2: Initialize window of size K.

Step 3: Slide window and optionally extend beyond K using maxEndingHere.




| Feature                         | Exactly K           | At Least K                        |
| ------------------------------- | ------------------- | --------------------------------- |
| Window size                     | Fixed = K           | ≥ K, can grow                     |
| Method                          | Sliding window only | Sliding window + Kadane extension |
| Example arr = [1,2,3,-2,5], K=2 | Max sum = 6 ([2,3]) | Max sum = 9 ([1,2,3,-2,5])        |





Perfect! Let’s visualize both “exactly K” and “at least K” maximum 
sum subarrays so you can see how the window moves and grows.

1️⃣ Max Sum Subarray of Exactly Length K (Sliding Window)

Array: [1, 2, 3, 4, 5], K = 3

We take subarrays of exactly 3 elements:



| Step | Window  | Sum | Max Sum |
| ---- | ------- | --- | ------- |
| 1    | [1,2,3] | 6   | 6       |
| 2    | [2,3,4] | 9   | 9       |
| 3    | [3,4,5] | 12  | 12 ✅    |



✅ Key idea: The window always stays size K.

2️⃣ Max Sum Subarray of At Least Length K (Sliding + Kadane Extension)

Array: [1, 2, 3, -2, 5], K = 2

We start with window of size K, then extend beyond K if it increases sum:

| Step | Window + Extension    | Sum | Max Sum |
| ---- | --------------------- | --- | ------- |
| 1    | [1,2]                 | 3   | 3       |
| 2    | [2,3]                 | 5   | 5       |
| 3    | [1,2,3] (extend)      | 6   | 6       |
| 4    | [2,3,-2] (extend)     | 3   | 6       |
| 5    | [1,2,3,-2,5] (extend) | 9   | 9 ✅     |


Visualization:

Start with window size K = 2:
[1,2] -> sum = 3
Slide right:
[2,3] -> sum = 5
Extend window backwards using Kadane info:
[1,2,3] -> sum = 6
[2,3,-2] -> sum = 3
Extend further:
[1,2,3,-2,5] -> sum = 9 (max)


✅ Key idea: The window can grow beyond K by including previous max subarrays, which is why we get a larger sum than “exactly K.”

Summary Visual Difference
Exactly K:   [===] [===] [===] -> Fixed size, slide only
At Least K:  [==] -> grow -> [===] -> grow -> [=====] -> max sum


Exactly K: simple sliding window.

At Least K: sliding + Kadane allows flexible extension beyond K.

