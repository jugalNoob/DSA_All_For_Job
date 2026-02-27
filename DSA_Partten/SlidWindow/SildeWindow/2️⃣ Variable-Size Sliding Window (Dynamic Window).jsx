2️⃣ Variable-Size Sliding Window (Dynamic Window)

2️⃣ Variable-Size Sliding Window (Dynamic Window)

Window size changes dynamically based on condition

Move right pointer to expand

Move left pointer to shrink when condition violated

Example Problems:

Longest substring without repeating characters

Smallest subarray with sum ≥ target

Longest subarray with at most k distinct elements

Code Template:

let left = 0;
let maxLen = 0;

for (let right = 0; right < arr.length; right++) {
  add arr[right] to window (update frequency/count);

  while (window invalid) {
    remove arr[left] from window;
    left++;
  }

  maxLen = Math.max(maxLen, right - left + 1);
}





function minSubarrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // expand window

    // shrink window while condition is satisfied
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left]; // remove left element
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// Example usage
const nums = [2, 3, 1, 2, 4, 3];
const target = 7;
console.log(minSubarrayLen(target, nums)); // Output: 2 ([4,3])
