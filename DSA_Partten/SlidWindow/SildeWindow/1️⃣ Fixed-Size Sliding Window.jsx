1️⃣ Fixed-Size Sliding Window


1️⃣ Fixed-Size Sliding Window

Window size is fixed (k elements)

Move the window one step at a time (left++, right++)

Often used for sum, average, or max/min in subarray of size k

Example Problems:

Maximum sum of subarray of size k

Average of k consecutive elements

Moving average problem

Code Template:

let sum = 0;
for (let i = 0; i < k; i++) sum += arr[i]; // first window

let maxSum = sum;

for (let i = k; i < arr.length; i++) {
  sum += arr[i] - arr[i - k]; // slide window
  maxSum = Math.max(maxSum, sum);
}






function maxSumFixedWindow(arr, k) {
  if (arr.length < k) return null;

  let sum = 0;
  // calculate sum of first window
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let maxSum = sum;

  // slide the window
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]; // add new, remove old
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

// Example usage
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(maxSumFixedWindow(arr, k)); // Output: 9 ([5,1,3])
