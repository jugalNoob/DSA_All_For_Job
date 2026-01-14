| Type                         | Description                                           | Example Problem                            |
| ---------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| **1️⃣ Fixed-size window**    | Window size stays **constant** (like 3, 5, etc.)      | “Find max sum of any 3 elements in array”  |
| **2️⃣ Variable-size window** | Window size **grows or shrinks** based on a condition | “Find smallest subarray with sum ≥ target” |



✅ Your Code → Fixed-size Sliding Window

Yes 💯 — your code is a fixed-size sliding window.

Because:

windowSize is constant

Every time you move the window, you remove one element and add one element

The window never grows or shrinks — it just slides

🔹 Fixed-size Sliding Window (your code)
function maxSumSubarray(arr, windowSize) {
  if (arr.length < windowSize) return null;

  let maxSum = 0;
  let currentSum = 0;

  // Step 1: first window
  for (let i = 0; i < windowSize; i++) {
    maxSum += arr[i];
  }
  currentSum = maxSum;

  // Step 2: slide window
  for (let i = windowSize; i < arr.length; i++) {
    currentSum = currentSum - arr[i - windowSize] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}


✅ This is a fixed sliding window.

🔹 Variable-size Sliding Window (different)

Example — find the smallest subarray whose sum ≥ target:

function minSubArrayLen(target, arr) {
  let start = 0, end = 0;
  let total = 0, minLen = Infinity;

  while (end < arr.length) {
    total += arr[end];
    while (total >= target) {
      minLen = Math.min(minLen, end - start + 1);
      total -= arr[start];
      start++;
    }
    end++;
  }

  return minLen === Infinity ? 0 : minLen;
}


Here:

The window grows (end++)

Then shrinks (start++)

Size is variable


| Type                | Window Size         | Example Code              |
| ------------------- | ------------------- | ------------------------- |
| **Fixed Window**    | Constant (e.g., 3)  | ✅ Your `maxSumSubarray()` |
| **Variable Window** | Changes dynamically | `minSubArrayLen()`        |


So yes 👍
✅ Your code = Fixed-size Sliding Window
🧮 It’s a special case of the Sliding Window Technique



