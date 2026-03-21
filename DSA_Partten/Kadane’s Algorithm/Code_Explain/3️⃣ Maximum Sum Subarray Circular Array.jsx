Ah! Now we’re getting into a classic tricky Kadane variation: Maximum Sum Subarray in a Circular Array. This is a very common interview twist. Let’s break it down carefully.

Problem

Array is circular, meaning the subarray can wrap from the end to the start.

Example: [8, -1, 3, 4] → subarray [3,4,8] wraps around → sum = 15.

Goal: find the maximum sum contiguous subarray, considering circular wrapping.

Observation / Trick

There are two possibilities:

Non-wrapping maximum subarray

Standard Kadane’s algorithm works here.

Example: [8, -1, 3, 4] → max subarray without wrapping = [8, -1, 3, 4] = 14

Wrapping maximum subarray

Subarray wraps around.

Trick: Maximum sum with wrap = total sum of array - minimum sum subarray (non-wrapping).

Why?

Wrapping sum = sum of elements outside the “minimum subarray” in the middle.

Algorithm Steps

Compute maxKadane → maximum sum subarray without wrapping (normal Kadane).

Compute totalSum of the array.

Compute minKadane → minimum sum subarray (same Kadane trick, but for min).

Maximum sum circular = Math.max(maxKadane, totalSum - minKadane)

Edge Case:

If all numbers are negative, totalSum - minKadane = 0 → return maxKadane.

JavaScript Implementation
function maxCircularSubarray(arr) {
    const n = arr.length;

    // Standard Kadane for max subarray
    let maxKadane = kadane(arr);

    // Compute total sum
    let totalSum = arr.reduce((a, b) => a + b, 0);

    // Kadane for minimum subarray
    let minSum = kadane(arr.map(x => -x)); // invert array
    let maxWrap = totalSum + minSum; // totalSum - (-minSum)

    // Edge case: all negative numbers
    if (maxWrap === 0) return maxKadane;

    return Math.max(maxKadane, maxWrap);
}

// Standard Kadane
function kadane(arr) {
    let maxEndingHere = arr[0], maxSoFar = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

// Example
let arr = [8, -1, 3, 4];
console.log(maxCircularSubarray(arr)); // Output: 15

Step-by-step Example [8, -1, 3, 4]

maxKadane = 14 → [8, -1, 3, 4]

totalSum = 14

minKadane = -1 → [-1]

maxWrap = 14 - (-1) = 15 ✅

Result = Math.max(14, 15) = 15

Subarray [3,4,8] wraps around → sum = 15

Key Insight

Wrapping subarray = total sum minus minimum subarray in the middle

This is a clever twist that often confuses candidates.

Edge case: all negative numbers → return maxKadane (single largest element).