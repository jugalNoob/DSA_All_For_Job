


🟡 2. Maximum Subarray Sum (Kadane’s Algorithm) 🧠


function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (max < sum) {
      max = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

console.log("Final max subarray sum =", maxSubArray([5, 4, -1, 7, 8]));

📝 Q: What problem is this solving?

Find the maximum sum of any contiguous subarray.

For example:
Array → [5, 4, -1, 7, 8]

Best subarray → [5, 4, -1, 7, 8] → sum = 23

✅ How Kadane's works:

Keep adding elements to sum

If sum ever drops below 0 → reset (because negative sum will reduce
 future subarray sums)

Keep track of the maximum sum found so far

👉 Real-life Uses:

📈 Stock profit analysis

💰 Bank account daily deposits tracking

🕹️ Game max score streak

⏱ Time: O(n)
💾 Space: O(1)

👉 Interview Tip:
This is a very common question in FAANG interviews. They
 may give inputs with negative numbers to check if you 
 handle that correctly.

2 . second 



function maxSubArray(nums) {

  // 🔁 INITIAL STATE:
  let sum = 0;
  let max = nums[0]; // max = 5

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; // accumulate current element into sum

    // 🔍 Print internal state
    console.log(`i=${i}, nums[i]=${nums[i]}, sum=${sum}, max=${max}`);

    // 🧠 If current sum is greater than max so far, update max
    if (max < sum) {
      max = sum;
      console.log(`  🔄 Updated max = ${max}`);
    }

    // ❌ If current sum goes negative, reset it
    if (sum < 0) {
      sum = 0;
      console.log(`  🔁 sum < 0, reset sum to 0`);
    }
  }

  return max;
}

// Time Complexity - O(n)
// Space Complexity - O(1)

console.log("Final max subarray sum =", maxSubArray([5, 4, -1, 7, 8]));

// console.log("Final max subarray sum =", maxSubArray([-1 , -1,5, 4, -1, 7, 8 , ]));


// 🧠 FOR LOOP:
// We'll go through each number one by one and track:



// |  i | nums\[i] | sum += nums\[i] | Updated max? | Reset sum? | sum | max |
// | -: | -------: | --------------- | ------------ | ---------- | --- | --- |
// |  0 |        5 | 0 + 5 = 5       | 5 ≥ 5 → ✅    | No         | 5   | 5   |
// |  1 |        4 | 5 + 4 = 9       | 9 > 5 → ✅    | No         | 9   | 9   |
// |  2 |       -1 | 9 - 1 = 8       | 8 < 9 → ❌    | No         | 8   | 9   |
// |  3 |        7 | 8 + 7 = 15      | 15 > 9 → ✅   | No         | 15  | 15  |
// |  4 |        8 | 15 + 8 = 23     | 23 > 15 → ✅  | No         | 23  | 23  |



// 📊 1. Stock Market Analysis
// Goal: Find the best time to buy and sell a stock to maximize profit (if you can buy once and sell once).

// 📈 Input: Daily stock price changes (profit/loss)



// 💵 2. Bank Account Monitoring
// Goal: Find the time period with the highest net deposit activity.

// 📦 Input: Daily net balance changes (deposits - withdrawals)


// 🎮 4. Gaming: Maximum Score Streak
// Goal: Track the maximum scoring streak in a game.

// 🕹️ Input: Points scored in each level or round


🟠 3. For Loop Sum → Basic Iteration
let data = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < data.length; i++) {
  sum += data[i];
}

console.log("Sum of array:", sum); 
// Output: 150

📝 Q: What is this doing?

This is the most basic and fastest way to calculate sum.

It works in O(n) and doesn’t create any extra array or call function overhead.






🚀 Extra Practice Question (Common)

Q: Given an array arr = [1, 2, 3, 4, 5], calculate the sum of elements between index 1 and 3 efficiently (range sum).
A: Use Prefix Sum technique.



function prefixSum(arr) {
  let prefix = [0];
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }
  return prefix;
}

let arr = [1, 2, 3, 4, 5];
let pref = prefixSum(arr);

// sum between index 1 and 3 (2+3+4)
let left = 1, right = 3;
let rangeSum = pref[right + 1] - pref[left];
console.log(rangeSum); 
// 👉 9



| Method     | Use Case            | Time                         | Key Concept       |
| ---------- | ------------------- | ---------------------------- | ----------------- |
| For Loop   | Simple sum          | O(n)                         | Basic Iteration   |
| reduce()   | Functional approach | O(n)                         | Cleaner code      |
| Kadane’s   | Max subarray sum    | O(n)                         | Reset on negative |
| Prefix Sum | Range queries       | O(n) preprocess + O(1) query | Cumulative sum    |
