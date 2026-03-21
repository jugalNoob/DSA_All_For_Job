function maxSumSubarray(data, size) {
    let max = -Infinity;
    console.log(max)
    for (let i = 0; i <= data.length - size; i++) {
        let current = 0;
        // Sum elements of current subarray
        for (let j = i; j < i + size; j++) {
            current += data[j];
        }
        max = Math.max(current, max);
    }
    return max;
}

// Example
let arr = [1, 2, 3, 4, 5];
console.log(maxSumSubarray(arr, 3)); // Output: 12 ([3,4,5] is max sum)

✅ Explanation:

maxEndingHere keeps track of the maximum sum ending at current index.

maxSoFar keeps track of the global maximum sum.

Handles negative numbers correctly.